import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { MatButtonModule } from '@angular/material/button';
import { PizzasComponent } from './pizzas/pizzas.component';

import { rootReducers }  from './store';


@NgModule({
  declarations: [AppComponent, TestComponent, PizzasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot(rootReducers),
    // tarvii tämän jotta toimii. SELVITÄ MIKS. products viittaa index.ts export const getProductsState = createFeatureSelector<productState>('products'); 
    StoreModule.forFeature('products', rootReducers),
    //StoreModule.forFeature(scoreboardFeatureKey, reducer),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
