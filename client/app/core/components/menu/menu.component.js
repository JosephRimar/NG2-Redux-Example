import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import template from './menu.template.html';


@Component({
  selector: 'top-menu',
  template: template,
  directives: [ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  Navlinks = [
    {name: 'About', url:'fpng/about'},
    {name: 'Shopping Cart', url: 'fpng/shoppingcart/example'}
  ];

  constructor(router: Router) {
    this._router = router;
  }
}
