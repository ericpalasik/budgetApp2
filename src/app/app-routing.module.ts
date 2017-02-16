import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Category } from './pages';

const routes: Routes = [
    {
        path: '',
        component: Category
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})


export class AppRoutingModule {}