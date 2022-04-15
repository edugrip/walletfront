import axios from 'axios';
export const ADD_PRODUCT_BEGIN = 'ADD_PRODUCT_BEGIN'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL'
export const ADD_IMAGE_BEGIN = 'ADD_IMAGE_BEGIN'
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS'
export const ADD_IMAGE_FAIL = 'ADD_IMAGE_FAIL'
export const RESET_ERROR = 'RESET_ERROR'


export const addProduct = (title,description,type,category,weightRangeGramsMin,weightRangeGramsMax,size,imagePath) => {
    return dispatch => {
        dispatch({
            type: ADD_PRODUCT_BEGIN
        })
        axios.post('addProduct', {
                "title": title,
                "description": description,
                "type": type,
                "category":category,
                "weightRangeGrams":{ "min": weightRangeGramsMin, "max": weightRangeGramsMax },
                "size":size
        }).then(res => {            
            if (res.data.status == 200) {
                // const fd = new FormData();
                // fd.append('photos',imagePath,imagePath.name);
                // axios.post('https://food91image.softlabsgroup.com/multiple-image', {
                //     "photos": imagePath,
                //     "name": res.data.product.title
                // },
                // {
                //     headers: {
                //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2F3YW50XzIyMjI2QHlhaG9vLmNvbSIsImlkIjoiNWY2ZGYzNWU1ZWQzMjQxOWMwMmU5ZmIwIiwicm9sZSI6InN1cGVyQWRtaW4iLCJpYXQiOjE2MDQzMTM3MzYsImV4cCI6MTYwNDQwMDEzNn0.xmDBU6bXAvIP3i5QwD8tDtviu3yjzq65YJqktsFRaOA'
                //     }
                // }).then(imageRes => {
                //  console.log(imageRes.data)
                // })
            
                dispatch({
                    type: ADD_PRODUCT_SUCCESS
                })
            } else if (res.data.message) {
                dispatch({
                    type: ADD_PRODUCT_FAIL,
                    payload: res.data.message
                })
            }
        })
        .catch(err => {
            dispatch({
                type: ADD_PRODUCT_FAIL
            })
        });
    };
};

export const resetError = { type: RESET_ERROR }