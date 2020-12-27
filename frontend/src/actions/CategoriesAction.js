import * as type from './Types';

export function getCategories(categories){
  return{
    type: type.FETCH_CATEGORIES_REQUESTED,
    payload: categories,
  }
}