import axios from "axios";
import { base_url } from "../../utils/base_url";
// import { config } from "../../utils/config";


// console.log(config)

// const register = async (candidateData)=>{
//     const response = await axios.post(`${base_url}candidate/register`,candidateData)
//     if(response.data){
//         localStorage.setItem('candidate',JSON.stringify(response.data))
//         localStorage.setItem('token',JSON.stringify(response.data.token))
//     }
//     return response.data
// }

// const login = async (candidateData)=>{
//     const response = await axios.post(`${base_url}candidate/login`,candidateData)
//     if(response.data){
//         localStorage.setItem('token',JSON.stringify(response.data.token))
//     }
//     return response.data
// }

const candidateProfile = async ()=>{
    const response = await axios.get(`${base_url}candidate/profile`,config)
    return response.data
}


const candidateService = {candidateProfile}

export default candidateService
