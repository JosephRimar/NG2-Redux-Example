import {Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

//Redux
import { HeaderService } from '../../ReduxServices';
import { RouteContainer } from 'fees-common-store';

import { NgRedux } from 'ng2-redux';
import template from './about.template.html';

@Component({
  selector: 'about',
  template: template,
  styleUrls: ['fees-angular/css/home.css']
})
export class AboutComponent  {


	constructor(headerService:HeaderService, ngRedux:NgRedux, route:ActivatedRoute) {
		this._headerService = headerService;
		this._ngRedux = ngRedux;
		this._route = route;
	}

	ngOnInit() {
		this.sub = this._route.params.subscribe(params => {
			this._headerService.setLocation(params['storefront']);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
		this._headerService.reset();
	}
}

