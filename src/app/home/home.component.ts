import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
import { ExpensesService } from '../expenses/expenses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ CategoriesService, ExpensesService ]
})
export class HomeComponent implements OnInit {
  categories: string[];
  expenses: expense[];
  totalAmountSpent: number;

  constructor(private categoriesService: CategoriesService,
              private expensesService: ExpensesService) {
    this.categories = categoriesService.getCategories();
    this.expenses = expensesService.getExpenses();
    this.totalAmountSpent = expensesService.getTotalExpenses();
   }

  ngOnInit() {

  }

}

interface expense {
  description: string;
  amount: number;
  category: string;
}