// This reducer will unite all the reducers in the application

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuthReducer from './auth.reducer';

// Application wide state, put the reducers inside.
export interface State {
    authentication: fromAuthReducer.State
}

// map all the states in application
export const reducers: ActionReducerMap<State> = {
    authentication: fromAuthReducer.authReducer,
}


export const getAuthState = createFeatureSelector<fromAuthReducer.State>('authentication');
export const getIsAuthenticated = createSelector(getAuthState, fromAuthReducer.GetAuthentication);

