import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../../shared/store/category';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryList {
    @Input()
    categories: Category[];

    @Output()
    delete = new EventEmitter();
}