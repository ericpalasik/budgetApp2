import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoriesComponent } from './categories/categories.component';

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);