import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Category } from './category';

@Injectable()
export class CategoryActions {
    static LOAD_CATEGORIES = '[Category] Load Categories';
    loadCategories(): Action {
        return  {
            type: CategoryActions.LOAD_CATEGORIES
        };
    }
    static LOAD_CATEGORIES_SUCCESS = '[Category] Load Categories Success';
    loadCategoriesSuccess(categories): Action {
        return  {
            type: CategoryActions.LOAD_CATEGORIES_SUCCESS,
            payload: categories
        };
    }
    static ADD_CATEGORY = '[Category] Add Category';
    addCategory(category): Action {
        return  {
            type: CategoryActions.ADD_CATEGORY,
            payload: category
        };
    }
    static ADD_CATEGORY_SUCCESS = '[Category] Add Category Success';
    addCategorySuccess(category): Action {
        return {
            type: CategoryActions.ADD_CATEGORY_SUCCESS,
            payload: category
        };
    }
    static DELETE_CATEGORY = '[Category] Delete Category';
    deleteCategory(category): Action {
        return  {
            type: CategoryActions.DELETE_CATEGORY,
            payload: category
        };
    }
    static DELETE_CATEGORY_SUCCESS = '[Category] Delete Category Success';
    deleteCategorySuccess(category): Action {
        return {
            type: CategoryActions.DELETE_CATEGORY_SUCCESS,
            payload: category
        };
    }
}