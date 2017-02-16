import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppState } from '../index';
import { ExpenseActions } from './actions';
import { ExpenseService } from '../../services/expense/expense.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ExpenseEffects {
    constructor (
        private update$: Actions,
        private expenseActions: ExpenseActions,
        private expenseService: ExpenseService
    ) {}

    @Effect() loadExpenses$ = this.update$
        .ofType(ExpenseActions.LOAD_EXPENSES)
        .switchMap(() => this.expenseService.getExpenses())
        .map(expenses => this.expenseActions.loadExpensesSuccess(expenses));

    @Effect() addExpense$ = this.update$
        .ofType(ExpenseActions.ADD_EXPENSES)
        .map(action => action.payload)
        .switchMap(expense => this.expenseService.addExpense(expense))
        .map(expense => this.expenseActions.addExpenseSuccess(expense));

    @Effect() deleteExpense$ = this.update$
        .ofType(ExpenseActions.DELETE_EXPENSE)
        .map(action => action.payload)
        .switchMap(expense => this.expenseService.deleteExpense(expense))
        .map(expense => this.expenseActions.deleteExpenseSuccess(expense));
}