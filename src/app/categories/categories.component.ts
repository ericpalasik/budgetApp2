import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../store';
import { CategoryActions } from '../store/categories/actions';
import { Observable } from 'rxjs/Observable';
import { CategoriesModule } from './';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class Categories implements OnInit {
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
    console.log(category.name);
    console.log(category.id);
    this.store.dispatch(this.categoryActions.addCategory(category));
  }

}