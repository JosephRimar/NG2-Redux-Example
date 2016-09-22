import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import template from './home.component.html';




@Component({
	selector:'home',
	template: template,
	directives: [ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	constructor(router: Router) {
		this._router = router;
	}

}