import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Action, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppComponent } from './components/app';
import { AppRoutingModule } from './app-routing.module';

import { AppState } from './shared/store';
import reducer from './shared/store';

import { CategoryActions } from './shared/store/category';
import { CategoryEffects } from './shared/store/category';
import { CategoryService } from './shared/services/category';

import { Category } from './pages/category';
import { CategoryForm } from './components';
import { CategoryList } from './components';

import { ExpenseActions } from './shared/store/expense';
import { ExpenseEffects } from './shared/store/expense';
import { ExpenseService } from './shared/services/expense';

import { Expense } from './pages/expense';


@NgModule({
  declarations: [
    AppComponent,
    Category,
    CategoryForm,
    CategoryList,
    Expense
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(ExpenseEffects),
    RouterStoreModule.connectRouter()
  ],
  providers: [ CategoryService, CategoryActions, ExpenseService, ExpenseActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
