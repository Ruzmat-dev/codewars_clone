import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.codewars.com/api/v1',
    Headers: {
        "Content-Type": "application/json"
    }
})


export default instance