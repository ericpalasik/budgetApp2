import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import categoryListReducer, * as fromCategoryList from './category/reducer';
import { routerReducer, RouterState } from '@ngrx/router-store';

export interface AppState {
    categories: fromCategoryList.CategoryListState;
    router: RouterState;
}

export default compose(combineReducers)({
    categories: categoryListReducer,
    router: routerReducer
})