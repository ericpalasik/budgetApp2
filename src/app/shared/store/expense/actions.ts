import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class ExpenseActions {
    static LOAD_EXPENSES = '[Expense] Load Expenses';
    loadExpenses(): Action {
        return {
            type: ExpenseActions.LOAD_EXPENSES
        };
    }
    static LOAD_EXPENSES_SUCCESS = '[Expense] Load Expenses Success';
    loadExpensesSuccess(expenses): Action {
        return {
            type: ExpenseActions.LOAD_EXPENSES_SUCCESS,
            payload: expenses
        };
    }
    static ADD_EXPENSES = '[Expense] Add Expense';
    addExpense(expense): Action {
        return {
            type: ExpenseActions.ADD_EXPENSES,
            payload: expense
        };
    }
    static ADD_EXPENSE_SUCCESS = '[Expense] Add Expense Success';
    addExpenseSuccess(expense): Action {
        return {
            type: ExpenseActions.ADD_EXPENSE_SUCCESS,
            payload: expense
        };
    }
    static DELETE_EXPENSE = '[Expense] Delete Expense';
    deleteExpense(expense): Action {
        return {
            type: ExpenseActions.DELETE_EXPENSE,
            payload: expense
        };
    }
    static DELETE_EXPENSE_SUCCESS = '[Expense] Delete Expense Success';
    deleteExpenseSuccess(expense): Action {
        return {
            type: ExpenseActions.DELETE_EXPENSE_SUCCESS,
            payload: expense
        };
    }
}