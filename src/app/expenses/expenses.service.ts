import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {
  expenses: expense[];

  constructor() {
    this.expenses = [
      {
        description: 'Chipotle',
        amount: 10,
        category: 'fast food'
      },
      {
        description: 'Giant',
        amount: 100,
        category: 'groceries'
      },
      {
        description: 'Geico',
        amount: 120,
        category: 'insurance'
      }
    ]
  }

  getExpenses(): Promise<expense[]> {
    return Promise.resolve(this.expenses);
  }

  addExpense(expense: expense) {
    this.expenses.push(expense);
  }

  getTotalExpenses(): Promise<number> {
    let total = 0;
    for (let expense of this.expenses) {
      total += expense.amount;
    }
    return Promise.resolve(total);
  }

}

interface expense {
  description: string;
  amount: number;
  category: string;
}
