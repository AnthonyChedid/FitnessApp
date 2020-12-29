import * as type from './Types';

export function postUser(user){
   
  return{
    type: type.NEW_USER_REQUESTED,
    user: user
  }
}