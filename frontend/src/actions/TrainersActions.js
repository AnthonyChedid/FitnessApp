import * as type from './Types';

export function getTrainers(trainers){
  return{
    type: type.FETCH_TRAINERS_REQUESTED,
    payload: trainers,
  }
}