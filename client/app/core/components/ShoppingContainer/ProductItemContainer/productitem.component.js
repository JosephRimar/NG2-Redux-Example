import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import Product from '../Product/product.component';

import { addToCart } from '../../../ReduxServices/shoppingService'

import { NgRedux } from 'ng2-redux';
import { bindActionCreators } from 'redux';

import template from './productitem.component.html';

@Component({
	selector: 'product-item',
	template: template,
	directives: [Product]
})
export default class ProductItem {
	@Input() item;

	constructor(ngRedux:NgRedux) {
		this._ngRedux = ngRedux;
	}

	ngOnInit() {
		this._ngRedux.connect(null, this.mapDispatchToThis)(this)
	}

	ngOnDestroy() {
  	//his.disconnect();
  }
	mapDispatchToThis(dispatch) {
		return {addToCart: bindActionCreators(addToCart, dispatch)}
	}

	onAddClick(item) {
		this.addToCart(item);

	}
}