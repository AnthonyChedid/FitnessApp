import * as type from './Types';

export function getUsers(users){
  return{
    type: type.FETCH_USERS_REQUESTED,
    payload: users,
  }
}