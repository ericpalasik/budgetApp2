import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../reducers/index';
import { CategoryActions } from './category-actions';
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private categoryActions: CategoryActions,
    private router: Router
  ) {
    this.categories = store.select('categories');
  }

  ngOnInit() {
    
  }

}