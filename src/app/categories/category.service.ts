import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from './category';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    constructor(private http: Http) {}

    getCategories(): Observable<Category[]> {
        return this.http.get('/api/categories')
        .map(res => res.json());
    }

    getCategory(id): Observable<Category> {
        return this.http.get('api/categories' + id)
        .map(res => res.json());
    }

    addCategory(category) {
        return this.http.post('api/categories', category.id)
        .map(res => res.json());
    }

    deleteCategory(category) {
        return this.http.delete('/api/categories' + category.id)
        .map(res => category);
    }
}