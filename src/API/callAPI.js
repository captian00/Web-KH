import axios from 'axios'
export default function callAPI(enpoint,method= "GET",body){
    return axios({
        method: method,
        url : `https://5f462bf5e165a60016ba9549.mockapi.io/${enpoint}`,
        data : body,
    }).catch((err) =>{
        console.log(err);
    })
}