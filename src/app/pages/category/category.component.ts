import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../shared/store';
import { CategoryActions } from '../../shared/store/category';
import { Observable } from 'rxjs/Observable';
import { CategoryForm } from '../../components/category-form';

import { go } from '@ngrx/router-store';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class Category implements OnInit {
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

  goToExpenses() {
    this.store.dispatch(go(['/expense']));
  }

}