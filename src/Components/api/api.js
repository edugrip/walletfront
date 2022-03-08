//baced url -loader

// const api = axios.create({
//   baseURL: 'http://64.227.172.81:8000/', 
//   timeout: 30000, // 30 secs
//   headers: {
//     Accept: 'application/json', 'Content-Type': 'application/json'
//   }, withCredentials: true
// })

let apiUrl = `http://64.227.172.81:8000/`
// export const latestBlocksDetails = async () => {
//   await fetch(`${apiUrl}`,{
//     method: 'GET',
//    })
// }

module.exports = {apiUrl}
