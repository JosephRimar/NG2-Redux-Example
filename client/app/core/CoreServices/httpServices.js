import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable() 
export class HttpServices {
	constructor(http:Http) {
		// or just pass "private http:Http" in TypeScript
		this._http = http;
	}

	getData(url) {
		return this._http.get(url).map(this.extractData)
			.toPromise() // Convert to promise to be handled later
			.catch(this.handleError);
	}

	extractData(res) {
		let body = res.json();
		return body || {};
	}

	handleError(error) {
		console.error("There was an error ", error);
		return new Error(error);
	}
}