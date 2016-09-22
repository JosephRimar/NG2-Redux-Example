import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';


@Injectable()
export class HeaderService {

	constructor(ngRedux: NgRedux) {
		this._ngRedux = ngRedux;
	}

	select(item) {
		return this._ngRedux.select(item);
	}

	setLocation(location) {
		this._ngRedux.dispatch({type: 'SET_LOCATION', location });
	}

	reset() {
		this._ngRedux.dispatch({type: 'RESET'})
	}
}


// ================== Reducers ==================
 // This reducer has been moved to the fees-common-store module
 // and is called on store initialization for the auto-populated header
 const initialState = {
	location: 'Home'
}
export const locationReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_LOCATION': 
			return Object.assign({}, state, {
				location: action.location
			});
			case 'RESET':
				return Object.assign({}, state, initialState);
		default :
			return state;
	}
}


// Example Async Reducer used to test the injectReducer service
export const AsyncReducer = (state = { asyncReducerTest: 'Reducer Injected in App Module On Initial Load'}, action) => {
	switch(action.type) {
		default:
			return state;
	}
}

