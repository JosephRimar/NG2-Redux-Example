import './shim';
import 'rxjs/add/operator/map';
//import 'rxjs'; <-- Could import entire library but is TERRIBLE for performance
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { routes } from './app/core/app.routes';
import { CORE_DECLARATIONS, AppComponent } from './app/core';


if (ENVIRONMENT === 'production') {
  enableProdMode();
}

// Redux Store Imports ...............................
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, InjectReducer } from 'fees-common-store';
//.....................................................

// Import Defined Services ............................
import  {HeaderService, AsyncReducer, InjectReducerService } from './app/core/ReduxServices';
import { HttpServices } from './app/core/CoreServices';
//.....................................................

@NgModule({
  declarations: [CORE_DECLARATIONS],
  imports: [
    HttpModule, BrowserModule, FormsModule, ReactiveFormsModule, NgReduxModule, // <-- Add NgReduxModule Here
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  providers: [
    { provide: 'ENVIRONMENT', useValue: ENVIRONMENT },
    /* ========== Include globally scoped services here ========= */
    HeaderService,
    InjectReducer,
    InjectReducerService,
    HttpServices
    //...
  ],
  bootstrap: [AppComponent]
})
class AppModule {
   /*  Inject NgRedux in main AppModule and call provideStore(store)
       to create the Redux store on the root of the application */
  constructor(ngRedux:NgRedux, inject:InjectReducer) {
    this._ngRedux = ngRedux;
    this._ngRedux.provideStore(store);
    this._injectReducer = inject.injectReducer;
    this._injectReducer(this._ngRedux, 'async', AsyncReducer)
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);