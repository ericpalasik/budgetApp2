import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Expense } from '../../store/expense';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpenseService {
    constructor(private http: Http) {}

    getExpenses(): Observable<Expense[]> {
        return this.http.get('http://localhost:3000/posts')
        .map(res => res.json());
    }

    getExpense(id): Observable<Expense> {
        return this.http.get('http://localhost:3000/posts/' + id)
        .map(res => res.json());
    }

    addExpense(expense) {
        return this.http.get('http://localhost:3000/posts', expense)
        .map(res => res.json());
    }

    deleteExpense(expense) {
        return this.http.get('http://localhost:3000/posts/' + expense.id)
        .map(res => expense);
    }
}