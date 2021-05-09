// MAIN SCRIPTS

class View {
	show(wrapper) {
		const wrapperBlock = document.querySelector(wrapper);
		wrapperBlock.innerText = 'HI!';
	}
};

const view = new View();
view.show('.wrapper');
