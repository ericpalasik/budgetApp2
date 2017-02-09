import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {
  categories: string[];


  constructor() {
    this.categories = [
      'home',
      'car',
      'groceries',
      'fast food',
      'insurance'
    ];
  }

  getCategories(): Promise<string[]> {
    return Promise.resolve(this.categories);
  }

  addCategories(category: string): void {
    this.categories.push(category);
  }

}
