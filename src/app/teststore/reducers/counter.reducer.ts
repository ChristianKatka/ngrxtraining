import { createReducer, on, createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';



 
export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
}
 
export const counterReducer = createReducer(initialState,
  on(increment, state => ({ ...state, counter: state.counter + 1})),
  on(decrement, state => ({ ...state, counter: state.counter - 1})),
  on(reset, state => ({ ...state, counter: 0}))
);

export const selectFeature = (state: State) => state;
 
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: State) => state.counter
);



// export const getCounterFeatureState = createFeatureSelector('counter');
// export const getCounter = createFeatureSelector<State>('counter');

// const getValue = (state: State) => state.counter;

// export const getCounterState = createSelector(getCounterFeatureState, getValue);

