import axios from 'axios'

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    timeout: 12000,
    headers:{
        'X-Api-Key':'7700edb7c410475c92d75989a5794cf5',
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'  
    }
})