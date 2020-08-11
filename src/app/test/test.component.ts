import { Component, OnInit } from '@angular/core';
// import { Store} from '@ngrx/store';
// import { increment, decrement, reset } from '../store/actions/counter.actions';

// import { selectFeatureCount } from '../store/reducers/counter.reducer';
// import * as rootReducer from '../store/reducers/app.reducer';
// import * as authActions from '../store/actions/auth.actions';

// import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {


//   // count$ = this.store.select('count');
//   authenticated$: Observable<boolean>;

  ngOnInit(): void {
//     this.store.subscribe(data => console.log(data));
  }

  constructor() {
  }  

//   increment() {
//     this.store.dispatch(increment());
//     this.authenticated$ = this.store.select(rootReducer.getIsAuthenticated);
//     console.log(this.authenticated$);
//     this.store.dispatch(authActions.authenticated());
//   }

//   decrement() {
//     this.store.dispatch(decrement());
//     this.store.dispatch(authActions.unauthenticated());

//   }

//   reset() {
//     this.store.dispatch(reset());
//   }
}
