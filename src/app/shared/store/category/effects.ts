import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { AppState } from '../index';
import { CategoryActions } from './actions';
import { CategoryService } from '../../services/category';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CategoryEffects {
    constructor (
        private update$: Actions,
        private categoryActions: CategoryActions,
        private categoryService: CategoryService
    ) {}

    @Effect() loadCategories$ = this.update$
        .ofType(CategoryActions.LOAD_CATEGORIES)
        .switchMap(() => this.categoryService.getCategories())
        .map(categories => this.categoryActions.loadCategoriesSuccess(categories));

    @Effect() addCategory$ = this.update$
        .ofType(CategoryActions.ADD_CATEGORY)
        .map(action => action.payload)
        .switchMap(category => this.categoryService.addCategory(category))
        .map(category => this.categoryActions.addCategorySuccess(category));

    @Effect() deleteCategory$ = this.update$
        .ofType(CategoryActions.DELETE_CATEGORY)
        .map(action => action.payload)
        .switchMap(category => this.categoryService.deleteCategory(category))
        .map(category => this.categoryActions.deleteCategorySuccess(category));
    

}