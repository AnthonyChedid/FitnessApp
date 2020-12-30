import * as type from './Types';

export function postSession(session){
   
  return{
    type: type.NEW_SESSION_REQUESTED,
    session: session
  }
}