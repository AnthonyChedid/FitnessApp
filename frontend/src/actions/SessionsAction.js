import * as type from './Types';

export function getSessions(sessions){
  return{
    type: type.FETCH_SESSIONS_REQUESTED,
    payload: sessions,
  }
}