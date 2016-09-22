import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { replaceReducer } from 'redux'
import { Resolve } from '@angular/router';

import { makeRootReducer } from '../../../ReduxStore/mainReducer';
import { newReducer } from './HeaderService';

@Injectable()
export class InjectReducerService {

	constructor(ngRedux: NgRedux) {
		this._ngRedux = ngRedux;
	}

	injectReducer(store,  key, reducer ) {
		store.asyncReducers[key] = reducer
  	store._store.replaceReducer(makeRootReducer(store.asyncReducers))
	}

	resolve() {
		this.injectReducer(this._ngRedux, 'two', newReducer)
	}
}