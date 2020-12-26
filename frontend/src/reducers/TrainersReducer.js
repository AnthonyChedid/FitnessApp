import * as type from '../actions/Types';

const initiateState={
    trainers:[],
    loading:false,
    error:null,
  }

  export default function trainers(state = initiateState,action){
  
    switch(action.type){
      case type.FETCH_TRAINERS_REQUESTED:
        return {
          ...state,
          loading:true,
        }
        case type.FETCH_TRAINERS_SUCCESS:
          return{
            ...state,
            loading:false,
            trainers:action.trainers,
          }
        case type.FETCH_TRAINERS_FAILED:
          return{
            ...state,
            loading:false,
            error:action.message,
          }
        default:
          return state;
    }
  }