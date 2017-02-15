import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Categories } from './categories.component';
import { CategoryForm } from './category-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Categories, CategoryForm],
    exports: [Categories],
    providers: []
})
export class CategoriesModule {}