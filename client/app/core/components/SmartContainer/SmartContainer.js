
import { ActivatedRoute } from '@angular/router';

//Redux
import { HeaderService }from '../../ReduxServices';
import { NgRedux } from 'ng2-redux';


export default class SmartContainer {

	constructor(service:HeaderService, route:ActivatedRoute, ngRedux:NgRedux) {
		this._service = service;
		this._route = route;
		this._ngRedux = ngRedux;
	   
	 }

	onMount() {

		this.sub = this._route.params.subscribe(params => {
				//Dispatch Header location Redux Action
				this._service.setLocation(params['storefront']);
			});  

/* 
	this._router.events.subscribe(event => { 
		this._service.setLocation(this.storefront);
	})
	   -- This service requires the 'router' import and will manually call the header location reducer on URL change but 
	   is redundant. Use the params.subscribe() method instead and dispatch action inside.
	*/

	}

	onUnMount() {
		this.sub.unsubscribe();
		this.resetState();
	}

	resetState() {
		return this._service.reset();
	}
}