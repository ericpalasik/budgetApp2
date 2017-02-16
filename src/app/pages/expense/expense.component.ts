import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../shared/store';
import { Observable } from 'rxjs/Observable';
import { ExpenseActions } from '../../shared/store/expense';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'app-expenses',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class Expense implements OnInit {
  expenses: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private expenseActions: ExpenseActions,
    private router: Router
  ) {
    this.expenses = store.select('expenses');
  }

  ngOnInit() {
    this.store.dispatch(this.expenseActions.loadExpenses());
  }

}