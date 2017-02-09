import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'expenses/add',
        component: ExpensesComponent
    },
    {
        path: 'categories/add',
        component: CategoriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})


export class AppRoutingModule {}