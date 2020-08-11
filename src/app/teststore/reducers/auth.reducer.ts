import { authenticated, unauthenticated } from '../actions/auth.actions';
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    authenticated: boolean
}

const initialState: State = {
    authenticated: false
}



export const authReducer = createReducer(initialState,
    on(authenticated, state => ({ ...state, authenticated: true})),
    on(unauthenticated, state => ({ ...state, authenticated: false}))
);


export const GetAuthentication = (state: State) => state.authenticated;




