import { Injectable } from '@angular/core';

import { NgRedux } from 'ng2-redux';

import { HttpServices } from '../CoreServices/httpServices';

// ======================== Service ========================
/*This service is another way to control data and user input in the shopping
container. I chose to define the methods in the other classes themselves to 
keep it simpler but this is probably more reusable and better practice.

@Injectable()
export class ShoppingCartService {

	constructor(ngRedux: NgRedux, http: HttpServices) {
		this._ngRedux = ngRedux;
		this._http = http;
	}	

	hydrateProductsContainer(url) {
		this._http.getData(url)
		.then(data => {
			//console.log(data);
			this._ngRedux.dispatch(hydrateProducts(data))
		})
	}

	getCartItems(url) {
		this._http.getData(url)
		.then(data => {
			data.forEach(item => {
				this._ngRedux.dispatch(addToCart(item))
			})
		})
	}
} 
*/


// ======================== Actions ========================
export function addToCart(product) {
	const { id, price, title } = product;
	return {
		type: 'ADD_TO_CART',
		id,
		price,
		title
	}
}

export function hydrateProducts(data) {
	return {
		type: 	"HYDRATE_INVENTORY",
		data
	}
}

export function clearCart(data) {
	return {
		type: 'CLEAR_CART',
		data
	}
}

export function checkOut() {
	return {
		type: 'CHECKOUT'
	}
}

export function removeFromCart(item) {
	return {
		type: 'REMOVE_FROM_CART',
		id: item.id,
		quantity: item.quantity
	}
}

// ======================== Reducers ========================

// ------ Inventory Reducer -------
const initialInventoryState = {
	currentInventory: []
}

export const InventoryReducer = (state = initialInventoryState, action) => {
	switch(action.type) {
		case 'ADD_TO_CART':
		console.log('fired')
			return Object.assign({}, state, {currentInventory: reduceInventory(state.currentInventory, action)});	
		case 'REMOVE_FROM_CART':
			return Object.assign({}, state, {currentInventory: returnToInventory(state.currentInventory, action)});	
		case 'CLEAR_CART':
		case 'HYDRATE_INVENTORY':
			return Object.assign({}, state, {currentInventory: action.data})
		default:
			return state;
	}
}

function reduceInventory(state, action) {
	 return state.map(product => {
	 	const { id, price, title, inventory } = product;
	 	return id !== action.id ? product : {
	 			id,
	 			title,
	 			price,
	 			inventory: inventory -1
	 		}
	 });
}

function returnToInventory(state, action, quantity) {
	return state.map(product => {
	 	const { id, price, title, inventory } = product;
	 	return id !== action.id ? product : {
	 			id,
	 			title,
	 			price,
	 			inventory: (inventory + action.quantity)
	 		}
	 });
}



// ------ Cart Reducer -------
const initialCartState = {
	cartItems: []
}

export const CartReducer = (state = initialCartState, action) => {
	switch(action.type) {
		case 'ADD_TO_CART':
			return Object.assign({}, state, {cartItems: addItemToCart(state.cartItems, action)});
		case 'REMOVE_FROM_CART':
			return Object.assign({}, state, {cartItems: removeItem(state.cartItems,action)});
		case 'CLEAR_CART':
		case 'CHECKOUT':
			return Object.assign({}, state, initialCartState);
		default:
			return state;
	}
}

function removeItem(state = [], action) {
	const index = state.findIndex(item => {
		return item.id === action.id
	})

	return index < 0 ? state : [...state.slice(0,index), ...state.slice(index+1)];
}

function addItemToCart(state = [], action) {
	const { id, price, title } = action, 
				newItemToCart = {
					id, title, price,
					quantity: (state.quanitity || 0) + 1
				};

	return (!state.length || !state.find(item => item.id === action.id)) ? 
		[...state, newItemToCart] : 
		state.map(item => {
			const { id, price, title, quantity } = item;
			return id !== action.id ? item : {
				id, title, price, 
				quantity: (quantity || 0) + 1
			};
		});

}











