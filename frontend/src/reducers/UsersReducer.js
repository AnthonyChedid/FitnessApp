import * as type from '../actions/Types';

const initiateState={
    users:[],
    loading:false,
    error:null,
  }

  export default function users(state = initiateState,action){
  
    switch(action.type){
      case type.FETCH_USERS_REQUESTED:
        return {
          ...state,
          loading:true,
        }
        case type.FETCH_USERS_SUCCESS:
          return{
            ...state,
            loading:false,
            users:action.users,
          }
        case type.FETCH_USERS_FAILED:
          return{
            ...state,
            loading:false,
            error:action.message,
          }
        default:
          return state;
    }
  }