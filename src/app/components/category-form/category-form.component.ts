import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../shared/store/category';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
})
export class CategoryForm {
    category: Category = {id: 0, name: ''};;

    @Output() save = new EventEmitter();
}