import {SET_CURRENT_USER, GET_CURRENT_USER} from '../actions/Types';

const INITIAL_STATE = {
    user : false
}

const currentUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            state={
                user:action.payload
            }
            return state
        case GET_CURRENT_USER:
            return state;
        default:
            return state;
    }
}

export default currentUser;