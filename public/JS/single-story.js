const makeFetch = async (url) => {
	const res = await fetch(url)
	return res.json()
};





window.addEventListener("DOMContentLoaded", async (ev) => {
	//HTML selectors
	const mainContentDiv = document.getElementById('Main-Content');
	const storyObj = document.getElementById('current-story-api-number');
	const deleteStoryButton = document.getElementById(`delete-story-button`);

	//Fetches here:
	const data = await makeFetch(`/api/stories/${storyObj.className}`);
	const comments = await makeFetch(`/api/comments/${storyObj.className}`)
	const users = []
	//  = comments.map((comment)=> {
		// 	console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%', comment)
		// 	// const user = await makeFetch(`/api/users/${comment.userId}/`)
		// 	// return user;
		
		// })
		for (let i = 0; i < comments.length; i++){
		console.log('############################', comments[i])
		const user = await makeFetch(`/api/users/${comments[i].userId}/`)
		users.push(user);
	}
	console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', comments, users)
	const userObj = {}
	user.forEach(user =>{
		userObj[user.userId] = user
	})

	let commentsDiv = ''
	for (let i = 0; i < comments.length; i++){
		commentDiv += `<div class="comment"><p>${comment[i].body}</p><span>$${userObj[comment[i].userId]}</div>`
	}

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
				<div class='comments-container>

				</div>

	</div>`;


	deleteStoryButton.addEventListener("click", async (event) => {
		const response = await fetch(`/api/stories/${storyObj.className}`, {
			method: "DELETE",
			credentials: "include",
		});
	});




});
