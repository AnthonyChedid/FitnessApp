import * as type from '../actions/Types';


export default function newUser(state =[],action){
  switch(action.type){
    case type.NEW_USER_REQUESTED:
        return [!state];
    
    default:
        return state;
  }
}