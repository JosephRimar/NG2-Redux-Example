
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/Home/home.component';
import { shoppingRoute } from './components/ShoppingContainer';

import { InjectReducerService } from './ReduxServices/injectReducer'


export const routes = [
	{ path: '', redirectTo: '/fpng', pathMatch: 'full'},
	{ path: 'fpng', component: HomeComponent},
	{ path: 'fpng/:storefront', component: AboutComponent},
	shoppingRoute, // <-- Route defined in the shoppingContainer Component
	{ path: '**', redirectTo: '/fpng'}
];
