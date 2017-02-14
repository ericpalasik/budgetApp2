import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import categoryListReducer, * as fromCategoryList from '../categories/category-list.reducer';
import categoryReducer, * as fromCategory from '../categories/category.reducer';

export interface AppState {
    categories: fromCategoryList.CategoryListState;
    category: fromCategory.CategoryState;
}

export default compose(combineReducers)({
    categories: categoryListReducer,
    category: categoryReducer
})