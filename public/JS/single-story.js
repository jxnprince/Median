const makeFetch = async (url) => {
	const res = await fetch(url)
	return res.json()
};





window.addEventListener("DOMContentLoaded", async (ev) => {
	//HTML selectors
	const mainContentDiv = document.getElementById('Main-Content');
	const storyObj = document.getElementById('current-story-api-number');

	//Fetches here:
	const data = await makeFetch(`/api/stories/${storyObj.className}`);


	mainContentDiv.innerHTML = `
	<div class= 'Container'>
		<div class='featured-story-img'>
			<img src="${data.imgUrl}">
		</div>
				<div class= 'Story-title'>
					<h1>${data.title}</h1>
					<div class= 'Story-body'>
						<p>${data.postBody}</p>
					</div>
				</div>

	</div>`;




});
