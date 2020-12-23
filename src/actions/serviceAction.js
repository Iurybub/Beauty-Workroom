import axios from 'axios';
import {CosmetologyListURL, CosmeticsListURL, MeditationListURL} from '../api';

//Action creator

export const loadCosmetology = () => async (dispatch) =>{
    //FETCH WITH AXIOS
    const dataList = await axios.get(CosmetologyListURL());
    dispatch({
        type: 'FETCH_COSMETOLOGY',
        payload: {
            cosmetology: dataList.data,
        }
    })
}

export const loadCosmetics = () => async (dispatch) =>{
    //FETCH WITH AXIOS
    const dataList = await axios.get(CosmeticsListURL());
    dispatch({
        type: 'FETCH_COSMETICS',
        payload: {
            cosmetics: dataList.data,
        }
    })
}

export const loadMeditation = () => async (dispatch) =>{
    //FETCH WITH AXIOS
    const dataList = await axios.get(MeditationListURL());
    dispatch({
        type: 'FETCH_MEDITATION',
        payload: {
            meditation: dataList.data,
        }
    })
}