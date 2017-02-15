import { ActionReducer, Action } from '@ngrx/store';
import { Category } from '.';
import { CategoryActions } from '.'

export type CategoryListState = Category[];

const initialState: CategoryListState = [{id: 0, name: 'initialCategory'}];

export default function (state = initialState, action: Action): CategoryListState {
    switch(action.type) {
        case CategoryActions.LOAD_CATEGORIES_SUCCESS: {
            return action.payload;
        }
        case CategoryActions.ADD_CATEGORY_SUCCESS: {
            return [...state, action.payload];
        }
        case CategoryActions.DELETE_CATEGORY_SUCCESS: {
            return state.filter(category => {
                return category.id !== action.payload.id
            })
        }
        default: {
            return state;
        }
    }
}