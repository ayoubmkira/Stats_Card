

const ELEMENT_MODE_BTN = document.getElementById('mode');


function changeMode() {

	const body = document.body;

	if(body.dataset.theme === "dark") {
		body.removeAttribute('data-theme');
	} else {
		body.setAttribute("data-theme", "dark");
	}

}

ELEMENT_MODE_BTN.addEventListener('click', changeMode);