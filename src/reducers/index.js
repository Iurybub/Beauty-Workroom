import {combineReducers} from 'redux'
import serviceReducer from './serviceReducer';
import detailReducer from './detailReducer';
import listsReducer from './listReducer';

const rootReducer = combineReducers({
    services: serviceReducer,
    detail: detailReducer,
    lists: listsReducer,
})

export default rootReducer;