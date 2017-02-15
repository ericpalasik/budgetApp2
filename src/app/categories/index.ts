import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Categories } from './categories.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Categories],
    exports: [Categories],
    providers: []
})
export class CategoriesModule {}