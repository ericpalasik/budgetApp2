import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../categories/category.service';

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

  constructor(private categoriesService: CategoryService) { }


  ngOnInit(): void {
    // this.getExpenses();
    // this.getTotalExpenses();
  }

}

interface expense {
  description: string;
  amount: number;
  category: string;
}