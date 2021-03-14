const makeFetch = async (url) => {
	const res = await fetch(url)
	return res.json()
}

document.addEventListener("DOMContentLoaded", async (ev) => {
	//HTML selectors
	const mainContentDiv = document.getElementById('Main-Content')
	const storyObj = document.getElementById('current-story-api-number')
	document.getElementById('delete-story-button').addEventListener('click', () => {
		fetch(`/api/stories/${storyObj.className}`, {
			method: 'DELETE'
		})
	})
	//Fetches here:
	const data = await makeFetch(`/api/stories/${storyObj.className}`)
	mainContentDiv.innerHTML = `
	<div class= 'Container'>
		<div class= 'Story-Img'>
			<img src="${data.imgUrl}">
				<div class= 'Story-title'>
					<h1>${data.title}</h1>
					<div class= 'Story-body'>
						<p>${data.postBody}</p>
					</div>
				</div>
		</div>
	</div>`
})
