import { combineReducers } from 'redux';
import { locationReducer } from '../app/core/reduxServices/HeaderService';

/*
This code was also duplicated in fees-common-store. The sync reducer 'locationReducder' was 
added in the makeRootReducer function for two reasons. 
	1: Not having a valid reducer on intitail store creation causes redux to throw a wargning.
	2: The header service expects the key 'location' on the store at application load. You could simly
		inject the location reducer in AppModule but this is simpler and stops the warning. 

MakeRootReducer allows async reducers to be injected into the store by calling injectReducer. 
*/

export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		...asyncReducers,
	// ---------- Add Sync Reducers Here ---------- //
		location: locationReducer 
		//...
	})
}

/* 
Asyncronous reducer creation on passed key. Generally you'll want to pass
	ngRedux as the store.
*/
export default function injectReducer (store,  key, reducer ) {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}
