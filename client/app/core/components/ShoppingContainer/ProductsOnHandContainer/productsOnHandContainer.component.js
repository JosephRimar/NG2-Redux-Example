import { Component, OnInit, Input } from '@angular/core';

import { HttpServices } from '../../../CoreServices';
import { InjectReducer  } from 'fees-common-store';
import { InventoryReducer, hydrateProducts, addToCart } from '../../../ReduxServices/shoppingService';

import { NgRedux } from 'ng2-redux';
import { bindActionCreators } from 'redux';




import ProductList from '../ProductList/productList.component';
import template from './productsOnHandContainer.component.html';
 
 @Component({
 		selector: 'products-container',
 		template: template,
 		directives: [ProductList]
 })
 export default class productsOnHandContainer {
 		products;
 		state;

 		constructor(http:HttpServices, ngRedux:NgRedux, inject:InjectReducer) {
 			this._http = http;
 			this._ngRedux = ngRedux;
 			this._injectReducer = inject.injectReducer;
		}

		ngOnInit() {
			this._injectReducer(this._ngRedux, 'inventory', InventoryReducer)
			this._http.getData('fees-angular/api/hydrate')
				.then(data => {
					this.hydrateProducts(data);
			})
			this._ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
		}

		mapStateToTarget(state) {
			return {products: state.inventory, state: JSON.stringify(state.inventory)}
		}

		mapDispatchToThis(dispatch) {
			return {
					hydrateProducts: bindActionCreators(hydrateProducts, dispatch),
					addToCart: bindActionCreators(addToCart, dispatch)
				}
		}
}
