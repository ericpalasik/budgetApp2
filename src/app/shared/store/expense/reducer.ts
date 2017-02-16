import { ActionReducer, Action } from '@ngrx/store';
import { Expense } from '.';
import { ExpenseActions } from '.';

export type ExpenseListState = Expense[];

const initalState: ExpenseListState = [{id: 0, description: "test", amount: 25, category: {id: 0, name: "insurance"}}];

export default function (state = initalState, action: Action): ExpenseListState {
    switch(action.type) {
        case ExpenseActions.LOAD_EXPENSES_SUCCESS: {
            return action.payload;
        }
        case ExpenseActions.ADD_EXPENSE_SUCCESS: {
            return [...state, action.payload];
        }
        case ExpenseActions.DELETE_EXPENSE_SUCCESS: {
            return state.filter(expense => {
                return expense.id !== action.payload.id;
            });
        }
    }
}