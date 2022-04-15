const getApi = async (url, obj) =>{
    let params = new URLSearchParams(obj).toString();
    url = `https://backend.trodex.io/${url}?`+params; 
    try{
        let response = await  fetch(url)
        let result = await response.json();
        console.log("json respons in helper", await result)
        return  result
        
     }
     catch{
        return {error:"some error occured in connecting with server."}
     }

}
const postApi = async (url, obj) =>{
     url = `https://backend.trodex.io/${url}/?`+obj; 
     try{
        let response = await  fetch(url, obj)  // set type to post.. whatever
       return await response.json();
    
     }
     catch (err) {
        return {error:"some error occured in connecting with server.", err}
     }
}
const   getCurrentChainId = async ()=>{
      // let a=await localStorage.getItem('currentChainId');
      // console.log('chainId in localstorage',a)
      return  await localStorage.getItem('currentChainId');
}

const setLocalObj = (name , array) =>{
    localStorage.setItem(name, JSON.stringify(array));
    var storedNames = JSON.parse(localStorage.getItem("names"));
}
const getLocalObj = (name) =>{
   console.log(localStorage.getItem(name))
   return  JSON.parse(localStorage.getItem(name));
}

module.exports = {getApi, postApi, getCurrentChainId, setLocalObj, getLocalObj}

