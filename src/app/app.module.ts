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


@NgModule({
  declarations: [
    AppComponent,
    Category,
    CategoryForm,
    CategoryList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CategoryEffects),
    RouterStoreModule.connectRouter()
  ],
  providers: [ CategoryService, CategoryActions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
