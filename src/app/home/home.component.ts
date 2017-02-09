import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
import { ExpensesService } from '../expenses/expenses.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  categories: string[];
  expenses: expense[];
  totalAmountSpent: number;

  constructor(
    private categoriesService: CategoriesService,
    private expensesService: ExpensesService) { }

   getCategories(): void {
     this.categoriesService.getCategories().then(categories => this.categories = categories);
   }

   getExpenses(): void {
    this.expensesService.getExpenses().then(expenses => this.expenses = expenses);
   }

   getTotalExpenses(): void {
    this.expensesService.getTotalExpenses().then(total => this.totalAmountSpent = total);
   }

  ngOnInit(): void {
    this.getCategories();
    this.getExpenses();
    this.getTotalExpenses();
  }

}

interface expense {
  description: string;
  amount: number;
  category: string;
}