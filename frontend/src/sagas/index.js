import {all} from 'redux-saga/effects';
import TrainersSaga from './TrainersSaga';
import CategoriesSaga from './CategoriesSaga';
import newTrainerSaga from './NewTrainerSaga';
import newUserSaga from './newUserSaga';
import UsersSaga from './UsersSaga';
import SessionsSaga from './SessionsSaga'
import newSessionSaga from './PostSessionSaga';


export default function* rootSaga(){
    yield all([
        TrainersSaga(),
        CategoriesSaga(),
        newTrainerSaga(),
        newUserSaga(),
        UsersSaga(),
        SessionsSaga(),
        newSessionSaga(),
    ])
}