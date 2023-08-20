import axios from "axios";
import config from "./config";


export const fetchData = async <T>(path:string):Promise<T> =>{
    try {
        const resp = await axios.get(config.base_url + path)
        console.log(resp.data)
     const data = resp.data
     return data
    } catch (error) {
        throw console.log(error)
    }
}

