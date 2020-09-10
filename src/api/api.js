import axios from 'axios'
const config = {

}

const API = axios.create({
    baseURL: 'http://localhost:5000/api/v1'
    // headers: 'Bearer 564652adskab'
});

export default API;