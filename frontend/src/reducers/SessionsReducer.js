import * as type from '../actions/Types';

const initiateState={
    sessions:[],
    loading:false,
    error:null,
  }

  export default function sessions(state = initiateState,action){
  
    switch(action.type){
      case type.FETCH_SESSIONS_REQUESTED:
        return {
          ...state,
          loading:true,
        }
        case type.FETCH_SESSIONS_SUCCESS:
          return{
            ...state,
            loading:false,
            sessions:action.sessions,
          }
        case type.FETCH_SESSIONS_FAILED:
          return{
            ...state,
            loading:false,
            error:action.message,
          }
        default:
          return state;
    }
  }