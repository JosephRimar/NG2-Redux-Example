import { Component, Input } from '@angular/core';

import ProductItem from '../ProductItemContainer/productitem.component';
import template from './productList.component.html';

@Component({
	selector: 'product-list',
	template: template,
	directives: [ProductItem]
})
export default class ProductList {
	@Input() products = [];
}