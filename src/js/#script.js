// MAIN SCRIPTS

class View {
	static show(wrapper) {
		const wrapperBlock = document.querySelector(wrapper);
		wrapperBlock.innerText = 'HI!';
	}
}

View.show('.wrapper');
