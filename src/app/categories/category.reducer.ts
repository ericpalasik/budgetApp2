import { ActionReducer, Action } from '@ngrx/store';
import { Category } from './category';
import { CategoryActions } from './category-actions'

export type CategoryState = Category;

const initialState: CategoryState = {
    id: 0,
    name: ''
};

export default function (state = initialState, action: Action): CategoryState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}