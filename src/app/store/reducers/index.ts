
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from '../reducers/pizzas.reducer';


export interface productState {
    pizzas: fromPizzas.PizzaState
}

export const rootReducers: ActionReducerMap<productState> = {
    pizzas: fromPizzas.reducer
};

// refers to app.module for root store
export const getProductsState = createFeatureSelector<productState>('products'); 

export const getPizzaState = createSelector(getProductsState, (state: productState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);

