import {SET_CURRENT_USER, GET_CURRENT_USER} from './Types';

export const setCurrentUser = (user) => {
    return({
        type: SET_CURRENT_USER,
        payload: user
    })
}

export const getCurrentUser = () => {
    return({
        type: GET_CURRENT_USER,
        
    })
}