import { createAction } from '@ngrx/store';


export const authenticated = createAction('[Auth] Authenticated');
export const unauthenticated = createAction('[Auth] Unauthenticated');

// export type AuthActions = authenticated | unauthenticated;

