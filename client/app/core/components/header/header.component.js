import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';

//Redux
import {  NgRedux } from 'ng2-redux';

import template from './header.component.html';

@Component({
	selector: 'fpng-header',
	template: template,
	declerations: [MenuComponent]
})
export class HeaderComponent implements OnInit {
	storefront$ = '';

	constructor( ngRedux: NgRedux) {
		this._ngRedux = ngRedux;
	}

	ngOnInit() {
		this.storefront$ = this._ngRedux.select('location');
	}

}