import axios from 'axios';
import {DetailURL} from '../api';


export const loadDetails = (pathId) => async (dispatch) => {
    const detailData = await axios.get(DetailURL(pathId))
    dispatch({
        type: "GET_DETAIL",
        payload:{
            service: detailData.data,
        }
    })
}
