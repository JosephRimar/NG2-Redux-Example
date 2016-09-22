import { Component, Input, OnInit, OnDestroy} from '@angular/core';


import ProductsOnHandContainer from '../ProductsOnHandContainer/productsOnHandContainer.component';
import CartContainer from '../CartContainer';
import SmartContainer from '../../SmartContainer/SmartContainer'// <-- Extend this class



import template from './shoppingContainer.component.html';

@Component({
	selector: 'shopping-container',
	template: template,
	directives: [ProductsOnHandContainer, CartContainer]
})
export default class ShoppingContainer extends SmartContainer {

	/*constructor(args) { <-- constructor & super() not working with SmartContainer 
		super(args);
		console.log(this);
	} */

	ngOnInit() {
		this.onMount();
	}

	ngOnDestroy() {
		this.onUnMount();
	}

  checkState() {
  	console.log('Current State: ' ,this._ngRedux._store.getState());
  	console.log('Reducers: ', this._ngRedux._store)
  	console.log('Store: ', this._ngRedux)
  }
}

export const shoppingRoute = {path: 'fpng/:storefront/example', component: ShoppingContainer}






























/*
export default class ShoppingContainer {
	data = [];
	location$; //-- $ signifies async variable. Possible to use @select() decorator instead

	constructor(service:TestService, ngRedux:NgRedux, route:ActivatedRoute, router:Router) {
			this._service = service;
			this._ngRedux = ngRedux;
			this._route = route;
			this._router = router;
	 }

	ngOnInit() {
		this.sub = this._route.params.subscribe(params => {
				//Dispatch Header location Redux Action
				this._service.setLocation(params['storefront']);
		});

		this.location$ = this._ngRedux.select('location'); // - Could replace this method with @select() 

		/* -- This service will manually call the header location reducer on URL change but 
					is redundant. Use the params.subscribe() method instead and dispatch action inside.

		this._router.events.subscribe(event => {
			this._service.setLocation(this.storefront);
		})
		
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		this.resetState();
	}

	// --- Redux Service methods to call actions ---
	setLocation() {
		return this._service.setLocation(this.storefront);
	}

	resetState() {
		return this._service.reset();
	}

}
*/
	
