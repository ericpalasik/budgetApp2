import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Categories } from './categories.component';
import { CategoryForm } from './category-form.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Categories, CategoryForm],
    exports: [Categories],
    providers: []
})
export class CategoriesModule {}