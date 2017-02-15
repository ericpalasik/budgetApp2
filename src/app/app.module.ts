import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Action, StoreModule } from '@ngrx/store';
import { AppState } from './store';
import reducer from './store';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './store/categories/effects';

import { AppComponent } from './app.component';
import { CategoriesModule } from './categories';
import { CategoryService } from './categories/category.service';
import { CategoryActions } from './store/categories/actions';

import { AppRoutingModule } from './app-routing.module';

import { RouterStoreModule } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CategoryEffects),
    RouterStoreModule.connectRouter(),
    CategoriesModule
  ],
  providers: [ CategoryService, CategoryActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
