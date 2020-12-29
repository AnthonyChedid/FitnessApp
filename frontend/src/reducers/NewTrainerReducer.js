import * as type from '../actions/Types';


export default function newTrainer(state =[],action){
  switch(action.type){
    case type.NEW_TRAINER_REQUESTED:
        return [!state];
    
    default:
        return state;
  }
}