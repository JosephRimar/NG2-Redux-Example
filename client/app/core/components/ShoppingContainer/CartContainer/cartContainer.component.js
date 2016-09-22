import { Component, Input, OnInit } from '@angular/core';

import { HttpServices } from '../../../CoreServices';
import { InjectReducer  }from 'fees-common-store';
import { CartReducer, clearCart, checkOut, removeFromCart } from '../../../ReduxServices/shoppingService';

import { NgRedux } from 'ng2-redux';
import { bindActionCreators } from 'redux';

import Cart from '../Cart';
import template from './cartContainer.component.html';

@Component({
	selector: 'cart-container',
	template: template,
	directives: [Cart]
})
export default class CartContainer {
	cartItems = []
	total = 0;
	state;

	constructor(http:HttpServices, ngRedux:NgRedux, inject:InjectReducer) {
		this._http = http;
		this._ngRedux = ngRedux;
		this._injectReducer = inject.injectReducer;
	 }

	ngOnInit() {
		this._injectReducer(this._ngRedux, 'cart', CartReducer)
		this._ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
	}

	
	mapStateToTarget(state) {
		return {
			cartItems: state.cart,
			state: JSON.stringify(state.cart),
			total: state.cart.cartItems.map(a => a.price * a.quantity).reduce((a,b) => a+b,0)
		}
	}

	mapDispatchToThis(dispatch) {
		return {
				clearCart: bindActionCreators(clearCart, dispatch),
				removeFromCart: bindActionCreators(removeFromCart, dispatch),
				checkOut: bindActionCreators(checkOut, dispatch)
			}
	}

	onRemoveClick(item) {
		this.removeFromCart(item);
	}
}