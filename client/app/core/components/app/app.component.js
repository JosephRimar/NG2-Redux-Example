import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { ROUTER_DIRECTIVES } from '@angular/router';
import template from './app.template.html';

import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'uspto-app',
  directives: [ROUTER_DIRECTIVES, MenuComponent, HeaderComponent],
  template: template
})
export class AppComponent {

  constructor(@Inject('ENVIRONMENT') environment) {
    this.environment = environment;
	}
}
