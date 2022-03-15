import axios from "axios";

export const getList = (name) => {
    return axios.get(`http://universities.hipolabs.com/search?name=${name}`)
}