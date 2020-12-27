import * as type from '../actions/Types';

const initiateState={
    categories:[],
    loading:false,
    error:null,
  }

  export default function categories(state = initiateState,action){
  
    switch(action.type){
      case type.FETCH_CATEGORIES_REQUESTED:
        return {
          ...state,
          loading:true,
        }
        case type.FETCH_CATEGORIES_SUCCESS:
          return{
            ...state,
            loading:false,
            categories:action.categories,
          }
        case type.FETCH_CATEGORIES_FAILED:
          return{
            ...state,
            loading:false,
            error:action.message,
          }
        default:
          return state;
    }
  }