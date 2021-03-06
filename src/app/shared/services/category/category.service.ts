import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Category } from '../../store/category';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
    constructor(private http: Http) {}

    getCategories(): Observable<Category[]> {
        return this.http.get('http://localhost:4000/posts')
        .map(res => res.json());
    }

    getCategory(id): Observable<Category> {
        return this.http.get('http://localhost:4000/posts/' + id)
        .map(res => res.json());
    }

    addCategory(category) {
        return this.http.post('http://localhost:4000/posts', category)
        .map(res => res.json());
    }

    deleteCategory(category) {
        return this.http.delete('http://localhost:4000/posts/' + category.id)
        .map(res => category);
    }
}