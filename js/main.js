(() => {
	// Variable and constant declarations
	let pics 		= document.querySelectorAll("img"),
		nameArea	= document.querySelector("h2"),
		textArea 	= document.querySelector("p");

	const names 		= ["Scott Olthoff", "Michael Prior"],
		  information 	= ["Hi! My name is Scott Olthoff and I am a 20 year old designer / developer from London, Ontario. I am currently taking the Interactive Media Design course at Fanshawe and hope to continue my studies in the Visual Effects and Editing for Contemporary Media course after graduating. Eventually I would like to become a video editor / special effects artist creating videos, commercials, and / or movies!", 
		  				   "Hi, my name is Michael and I am a 27 year old designer / developer from London, Ontario. <br>I think my first introduction to web design was back in 2005 when I made my first Myspace page. When you visited the page you were treated with ear piercing levels of angsty music and a terrible red and black layout. Since then, I'd like to believe that I've learned a thing or two, but only time will tell.  "]
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