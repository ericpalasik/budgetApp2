import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../shared/store';
import { Observable } from 'rxjs/Observable';

import { go } from '@ngrx/router-store';

import { CategoryActions, Category } from '../../shared/store/category';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class Budget implements OnInit {
  categories: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private categoryActions: CategoryActions,
    private router: Router
  ) {
    this.categories = store.select('categories');
  }

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
  }

  save(category) {
    this.store.dispatch(this.categoryActions.addCategory(category));
  }

  delete(category) {
    this.store.dispatch(this.categoryActions.deleteCategory(category));
  }

  goToCategory() {
    this.store.dispatch(go(['/category']));
  }

  goToExpense() {
    this.store.dispatch(go(['/expense']));
  }

}