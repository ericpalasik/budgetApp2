import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
  categories: string[];


  constructor() {
    console.log('Categories Service');
    this.categories = [
      'home',
      'car',
      'groceries',
      'fast food',
      'insurance'
    ];
  }

  getCategories() {
    return this.categories;
  }

  addCategories(category: string) {
    this.categories.push(category);
  }

}
