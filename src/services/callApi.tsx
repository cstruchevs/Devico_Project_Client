import axios from "axios"

const callApi = () => {
    const callApi = axios.create({
        baseURL: "http://localhost:5000"
    })

}

export default callApi;