import axios from 'axios';
import {listURL} from '../api';


export const loadList = (type_of) => async (dispatch) =>{
    const listData = await axios.get(listURL(type_of))
    dispatch({
        type: "GET_LIST",
        payload:{
            lists: listData.data,
        }
    })
}