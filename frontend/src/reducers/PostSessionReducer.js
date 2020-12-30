import * as type from '../actions/Types';


export default function newSession(state =[],action){
  switch(action.type){
    case type.NEW_SESSION_REQUESTED:
        return [!state];
    
    default:
        return state;
  }
}