// ~~~~~~~~~~~~~~~~~~~~~~~~~~

import View from './view';
import FighterView from './fighterView';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~ FIGHTERS VIEW

class FightersView extends View {
	// ~~~~~~~~~~~~~~~~~~~~~~

	constructor(fighters) {
		super();
		this.createFighters(fighters);
	}

	// ~~~~~~~~~~~~~~~~~~~~~~

	static fightersDetailsMap = new Map();

	// ~~~~~~~~~~~~~~~~~~~~~~

	createFighters(fighters) {
		const fighterElements = fighters.map((fighter) => {
			const fighterView = new FighterView(fighter, this.handleFighterClick);
			return fighterView.element;
		});
		this.element = this.createElement({ tagName: 'div', className: 'fighters' });
		this.element.append(...fighterElements);
	}

	handleFighterClick(event, fighter) {
		FightersView.fightersDetailsMap.set(fighter._id, fighter);
		console.log('clicked');
		// get from map or load info and add to fightersMap
		// show modal with fighter info
		// allow to edit health and power in this modal
	}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
export default FightersView;
