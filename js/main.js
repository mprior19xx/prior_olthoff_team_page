(() => {
	// Variable and constant declarations
	let pics 		= document.querySelectorAll("img"),
		nameArea	= document.querySelector("h2"),
		textArea 	= document.querySelector("p");

	const names 		= ["Scott Olthoff", "Michael Prior"],
		  information 	= ["Scott information", "DESIGNER / DEVELOPER <br>-Age: 27 <br>-Location: London Ontario"]
	// Sets default team member to Scott
	function setDefault() {
		// Colours image
		pics[0].classList.add("colourImage");

		// Sets name and information
		nameArea.innerHTML = names[0];
		textArea.innerHTML = information[0];
	}

	// Changes team member when clicked
	function changeMember() {
		// Removes colour from other picture
		if (this.dataset.index == 0) {pics[1].classList.remove("colourImage");}
		if (this.dataset.index == 1) {pics[0].classList.remove("colourImage");}

		// Adds colour to clicked picture
		this.classList.add("colourImage");

		// Sets name and information
		nameArea.innerHTML = names[this.dataset.index];
		textArea.innerHTML = information[this.dataset.index];
	}

	// Call functions
	setDefault();
	pics.forEach(pic => pic.addEventListener("click", changeMember))
})();