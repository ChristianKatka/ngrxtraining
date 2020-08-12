import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Pizza } from '../models/pizza.model';
import * as fromStore from '../store/';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<fromStore.productState>) {}

  ngOnInit() { 
     this.pizzas$ = this.store.select(fromStore.getAllPizzas);

     this.store.select(fromStore.getAllPizzas).subscribe(state => {
       console.log('Just testing', state)
      });
  }
}
