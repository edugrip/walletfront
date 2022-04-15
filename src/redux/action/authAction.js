import axios from 'axios';
// import {useHistory} from "react-router-dom";
export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const RESET_ERROR = 'RESET_ERROR'
export const REFERESH_TOKEN = 'REFERESH_TOKEN'
export const AUTHENTICATOR_SUCCESS = 'AUTHENTICATOR_SUCCESS'
export const OTP_INFO = 'OTP_INFO'
export const RELOAD_PAGE = 'RELOAD_PAGE'


const APIURL = "/accounts/authenticate";

export const login = (loginObj,api,check) => {
   const ftoken = sessionStorage.getItem("ftoken");
   let data = "";

   if(check==="login")
   {
     data = {
       "email":loginObj.email,
       "password":loginObj.password,
       "Otp":loginObj.Otp,
       "NotificationToken":ftoken
     }
   }

   // if(check==="mpin")
   // {
   //   data = {
   //     "email":loginObj.email,
   //     "MPinHash":loginObj.MPinHash,
   //     "NotificationToken":ftoken
   //   }
   // }


    return dispatch => {
        dispatch({
            type: LOGIN_BEGIN
        })

        axios
            .post(api, {
              ...data
            })
            .then(res => {
                if (res.data.jwtToken)
                {
                   document.cookie = `refreshToken=${res.data.refreshToken}; max-age=900000`;
                   localStorage.setItem('userDetails', JSON.stringify(res.data));

                    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.jwtToken}`;

                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload:{token:res.data.jwtToken,refreshToken:res.data.refreshToken,all_details:res.data},
                        role:res.data.role,
                        isAuthenticatorEnable:res.data.twoFactorEnabled
                    });


                }

                else if (res.data.message)
                {
                    if(res.data.message ===  "OTP has been expired. New OTP sent on your emaiL")
                    {
                      dispatch({
                          type: OTP_INFO,
                          payload: res.data.message
                      });

                    }


                    if(res.data.message === "Login OTP sent on your emaiL")
                    {
                      dispatch({
                          type: OTP_INFO,
                          payload: res.data.message
                      });
                    }

                    if(res.data.message === "Please enter OTP which is send on your Registered Email Or Mobile Number.")
                    {
                      dispatch({
                          type: OTP_INFO,
                          payload: res.data.message
                      });
                    }

                    if(res.data.message === " Invalid OTP or Check your otp again.")
                    {
                      dispatch({
                          type: OTP_INFO,
                          payload: res.data.message
                      });
                    }

                    if(res.data.error === 1)
                    {
                        dispatch({
                            type: LOGIN_FAIL,
                            payload: res.data.message
                        })
                    }
                }

            })
            .catch(err => {
                let msg = (err.response && err.response.data) ? err.response.data.message : "";
                if(msg === "Login OTP sent on your emaiL" || msg === "Invalid OTP or Check your otp again.")
                {
                  dispatch({
                      type: OTP_INFO,
                      payload: msg
                  })

                }
                else
                {
                  dispatch({
                      type: LOGIN_FAIL,
                      payload: msg
                  })
                }
            });
    };
};

export const reloadPage = () => {
  return dispatch => {
    dispatch({
        type: RELOAD_PAGE
    })
}
}

export const RefreshData = () => {

    return (dispatch,getState) => {

      const items = getState();
      let token = items.user.refreshToken;
      const ajax = axios({
        method:"POST",
        url:"/accounts/refresh-token",
        data:{
          RefreshToken:token
        }
      });

      ajax.then((res)=>{
        if (res.data.jwtToken)
        {
            let jwtToken = res.data.jwtToken;
            let refreshToken = res.data.refreshToken;
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
            dispatch({
                type: REFERESH_TOKEN,
                payload:{token:jwtToken,refreshToken:refreshToken},
            });
            // console.log("New token set");
            // document.cookie = `refreshToken=${res.data.jwtToken}; max-age=900000`;
        }
      });

      ajax.catch((error)=>{
        if(error.response)
        {
          if(error.response.status === 401)
          {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload:error
            });
          }

          else
          {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload:error
            });
          }
        }

      });
    };
};

export const logout = () => {
    return (dispatch,getState) => {
        const items = getState();
        let token = items.user.refreshToken;
        let userId = items.user.all_details.id;

        const ajax = axios({
          method:"POST",
          url:"/accounts/revoke-token",
          data:{
            token:token,
            UserId:userId
          }
        });

        ajax.then(()=>{
          dispatch({
              type: LOGOUT_SUCCESS
          });
        });

        ajax.catch(()=>{
          dispatch({
              type: LOGOUT_SUCCESS
          });
        });
    };
};


export const resetError = { type: RESET_ERROR }

export const AuthenticatorVerification = () => {
    return dispatch => {
      dispatch({
          type: AUTHENTICATOR_SUCCESS,
          payload:"success",
      });
    };
};
