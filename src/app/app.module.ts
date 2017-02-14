import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Action, StoreModule } from '@ngrx/store';
import { AppState } from './reducers/index';
import reducer from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './categories/category.effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './categories/category.service';
import { ExpensesService } from './expenses/expenses.service';
import { CategoryActions } from './categories/category-actions';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpensesComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CategoryEffects)
  ],
  providers: [ CategoryService, ExpensesService, CategoryActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
