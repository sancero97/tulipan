import { GET_API_DATA } from "../actions/types";

export default function getApiReducer(state = [], action){
    switch (action.type){
        case GET_API_DATA:
            return action.data;
        default:
            return state;
    }
}