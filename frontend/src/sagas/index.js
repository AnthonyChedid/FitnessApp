import {all} from 'redux-saga/effects';
import TrainersSaga from './TrainersSaga';
import CategoriesSaga from './CategoriesSaga';
import newTrainerSaga from './NewTrainerSaga';
import newUserSaga from './newUserSaga';



export default function* rootSaga(){
    yield all([
        TrainersSaga(),
        CategoriesSaga(),
        newTrainerSaga(),
        newUserSaga(),
    ])
}