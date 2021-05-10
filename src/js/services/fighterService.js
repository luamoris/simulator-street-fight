// ~~~~~~~~~~~~~~~~~~~~~~~~~~

import { callApi } from '../helpers/apiHelper';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIGHTER SERVICE

class FighterService {
	// ~~~~~~~~~~~~~~~~~~~~~~

	async getFighters() {
		try {
			const endpoint = 'repos/sahanr/street-fighter/contents/fighters.json';
			const apiResult = await callApi(endpoint);
			return JSON.parse(atob(apiResult.content));
		} catch (error) {
			throw error;
		}
	}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
export const fighterService = new FighterService();
