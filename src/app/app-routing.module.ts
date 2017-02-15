import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Categories } from './categories/categories.component';

const routes: Routes = [
    {
        path: '',
        component: Categories
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})


export class AppRoutingModule {}