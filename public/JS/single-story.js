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
	const comments = await makeFetch(`/api/comments/${storyObj.className}`);
	const current_user = await makeFetch('/api/users/');
	const users = [];
	if (data.imgUrl === '') data.imgUrl = `https://miro.medium.com/max/1050/1*z2O2W5vrJBDXlcZ7rzPyxQ.jpeg`


		for (let i = 0; i < comments.length; i++){
			const user = await makeFetch(`/api/users/${comments[i].userId}/`)
			users.push(user);
		}

		const userObj = {}
		users.forEach(user =>{
			userObj[user.user.id] = user.user
		})

		const commentsDiv = document.createElement("div");
		const commentsList = document.createElement("ul");

		for (let i = 0; i < comments.length; i++){
			const eachItem = document.createElement("li");

			eachItem.innerHTML = `<div class="comment">
					<p>${comments[i].body}</p>
					<span>-${userObj[comments[i].userId].firstName}
				</div>`;


			if (comments[i].userId === current_user.userId) {
				const deleteButton = document.createElement('button');
				deleteButton.innerText = 'X';
				deleteButton.addEventListener('click', async (event) => {
					const response = await fetch(`/api/comments/${comments[i].id}`, {
						method: 'DELETE',
						credentials: "include",
					});

					if(response.status === 200){
						window.location.reload();
					} else {
						console.log(response.message);
					}
				});

				eachItem.appendChild(deleteButton);
			}

			commentsList.appendChild(eachItem);
		}

	commentsDiv.appendChild(commentsList);


	mainContentDiv.innerHTML = `
	<div class= 'Container'>
		<div class='featured-story-img'>
			<img src="${data.imgUrl}">
		</div>
		
		<div class= 'Story-title'>
		<div id='single-story-heading'>
			<h1>${data.title}</h1>
			<div id='likediv' class='likediv'>
			<img src="https://i.imgur.com/uW1Ryn2.png?1" class='thumbsup'>
			<span class= 'likeScore'> ${data.UserLikes.length} </span>
			</div>
		</div>
			<div class= 'Story-body'>
				<p>${data.postBody}</p>
			</div>
			<div id='comments-container' class='comments-container'> 
				<h3>Comments:</h3>
			</div>
		</div>
	</div>`;

	const commentContainer = document.getElementById('comments-container');
	commentContainer.appendChild(commentsDiv);

	const likeDiv = document.getElementById('likediv');
	likeDiv.addEventListener('click', async (event) => {
		event.preventDefault();
		const storyId = data.id;
		const userId = current_user.userId;
		const response = await fetch(`/api/likes/${storyId}/${userId}`, { method: 'POST' });
		if (response.status === 200) {
			const data = await makeFetch(`/api/stories/${storyObj.className}`);
			likeDiv.innerHTML = '';
			likeDiv.innerHTML = `
					<img src="https://i.imgur.com/uW1Ryn2.png?1" class='thumbsup'>
					<span class= 'likeScore'> ${data.UserLikes.length} </span> `;
		}
	});

	if (deleteStoryButton !== null) {
		deleteStoryButton.addEventListener("click", async (event) => {
			const response = await fetch(`/api/stories/${storyObj.className}`, {
				method: "DELETE",
				credentials: "include",
			});
			window.location.reload()
			// response.method = "GET"
			// response.redirect("/users/profile")
		});
	}
});