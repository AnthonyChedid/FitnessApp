import * as type from './Types';

export function postTrainer(trainer){
   
  return{
    type: type.NEW_TRAINER_REQUESTED,
    trainer: trainer
  }
}