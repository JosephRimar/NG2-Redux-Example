import { Component, Input, Output, EventEmitter } from '@angular/core';

import Product from '../Product/product.component';
import template from './cart.component.html'


@Component({
	selector: 'cart',
	template: template,
	directives: [Product],
	styleUrls: ['/cart.css']
})
export default class Cart {
	@Input() items = [];
	@Input() total = 0;

	@Output() removeItemFromCart = new EventEmitter();

	onRemoveClick(item) {
		this.removeItemFromCart.emit(item);
	}


}
