import {call,put,takeEvery} from 'redux-saga/effects';
import {getCategoriesApi,getCategoriesByNameApi} from './apiCalls';

function* fetchCategories(action){
    try{
        let categories
        if(action.payload !==""){
            categories=yield call(getCategoriesByNameApi,action.payload);
        }
        else{
            categories=yield call(getCategoriesApi);
        }
        yield put({type: 'FETCH_CATEGORIES_SUCCESS',categories:categories});
    }catch(e){
        yield put({type: 'FETCH_CATEGORIES_FAILED',message:e.message });
    }
}

function* CategoriesSaga(){
    yield takeEvery('FETCH_CATEGORIES_REQUESTED', fetchCategories);
}

export default CategoriesSaga;