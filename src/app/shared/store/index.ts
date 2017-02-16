import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import categoryListReducer, * as fromCategoryList from './category/reducer';
import expenseListReducer, * as fromExpenseList from './expense/reducer'
import { routerReducer, RouterState } from '@ngrx/router-store';

export interface AppState {
    categories: fromCategoryList.CategoryListState;
    expenses: fromExpenseList.ExpenseListState;
    router: RouterState;
}

export default compose(combineReducers)({
    categories: categoryListReducer,
    expenses: expenseListReducer,
    router: routerReducer
})