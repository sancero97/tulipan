import { GET_API_DATA } from "./types";
import axios from "axios";

const apiUrl = 'https://rickandmortyapi.com/api/character';

export const apiData = (data)=> {
    return{
        type: GET_API_DATA,
        data
    }
};
export const getApiData = () =>{
    return(dispatch) => {
        return axios.get(apiUrl)
        .then(res =>{
            dispatch(apiData(res.data.results))
        })
        .catch(error => {
            throw(error);
        }) 
           
    };
};