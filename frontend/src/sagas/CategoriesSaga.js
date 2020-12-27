import {call,put,takeEvery} from 'redux-saga/effects';
import {getCategoriesApi} from './apiCalls';

function* fetchCategories(action){
    console.log("saga sahh");
    try{
        const categories=yield call(getCategoriesApi);
        yield put({type: 'FETCH_CATEGORIES_SUCCESS',categories:categories});
    }catch(e){
        yield put({type: 'FETCH_CATEGORIES_FAILED',message:e.message });
    }
}

function* CategoriesSaga(){
    yield takeEvery('FETCH_CATEGORIES_REQUESTED', fetchCategories);
}

export default CategoriesSaga;