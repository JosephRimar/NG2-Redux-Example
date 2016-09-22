import { Component, Input } from '@angular/core';

import template from './product.component.html';

@Component({
	selector: 'product',
	template: template
})
export default class Product {
	@Input() price;
	@Input() title ;
	@Input() quantity;
}