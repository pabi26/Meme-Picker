function generateMeme() {
	const topText = document.getElementById("top-text").value;
	const bottomText = document.getElementById("bottom-text").value;
	const memeImg = document.getElementById("meme-img");
	const memeText = document.getElementById("meme-text");

	// Make a request to the API to get a random meme image
	axios.get("https://api.imgflip.com/get_memes")
		.then(response => {
			const memes = response.data.data.memes;
			const randomIndex = Math.floor(Math.random() * memes.length);
			const randomMeme = memes[randomIndex];
			const memeUrl = randomMeme.url;

			// Set the image source and alt text
			memeImg.setAttribute("src", memeUrl);
			memeImg.setAttribute("alt", randomMeme.name);

			// Set the top and bottom text of the meme
			memeText.innerHTML = `
				<div class="top-text">${topText}</div>
				<div class="bottom-text">${bottomText}</div>
			`;
		})
		.catch(error => {
			console.error(error);
		});
}
