// functions here:
const getStories = async (url) => {
    const data = await fetch(url);
    return data.json();
};

// function for formatting dates
const formatDate = (the_date) => {
    let result = the_date.split('T');
    return result[0];
};


// main DOMContentLoaded event here:
window.addEventListener("DOMContentLoaded", async (event) => {
    // html dom selections here:
    const body = document.getElementsByTagName("body");
    const mainDiv = document.getElementById('mainContent');
    const storyDiv = document.getElementById('story');
    const detailsDiv = document.getElementById('stats');

    const data = await getStories('/api/feed');
    // console.log(data);


    if(data.status === 200){
        // make / render the html containing the feed information -
        const welcomeMessage = document.createElement("h3");
        const firstName = data.current_user.firstName;
        const lastName = data.current_user.lastName;


        welcomeMessage.innerText = `Welcome ${firstName} ${lastName}`;
        mainDiv.appendChild(welcomeMessage);

        const unorderedList = document.createElement("ul");
        const commentsList = document.createElement("ul");

        // loop through the stories in the API
        // this is just the first result in the API -- do the rest below for different structure
        for (let i = 0; i === 0; i++){
            let story = data.the_stories[i];
            const eachItem = document.createElement("li");


            eachItem.innerHTML = `<a href="/stories/${story.id}">
                    <div id="story-img" class="story-img">
                        <img src="${story.imgUrl}">
                    </div>

                    <div id="story-heading" class="story-heading">
                        <h1> ${story.title} </h1>
                        <img src="${story.User.avatar}">
                        <span> ${story.User.firstName} ${story.User.lastName} </span>

                        <img src="likes/img">
                        <span> ${story.UserLikes.length} </span>
                    </div>

                    <div id="story-text" class="story-text">
                        <p> ${story.postBody} </p>
                    </div>

                </a>`;


            story.Comments.forEach(comment => {
                const commentItem = document.createElement("li");

                commentItem.innerHTML = `<div id="featured-comment" class"featured-comment">
                    <img src="${comment.User.avatar}">
                    <span> ${comment.User.firstName} ${comment.User.lastName} <br> </span>
                    Created on: <span> ${formatDate(comment.createdAt)} </span>
                        <p> ${comment.body} </p>
                </div> `;

                commentsList.appendChild(commentItem);
            });

            unorderedList.appendChild(eachItem);
            detailsDiv.appendChild(commentsList);
        }



        storyDiv.appendChild(unorderedList);
        mainDiv.appendChild(storyDiv);
        mainDiv.appendChild(detailsDiv);




    } else {
        const errorMessage = document.createElement("h3");
        errorMessage.innerText = "Failed to fetch Story data. Please try again.";
        mainDiv.appendChild(errorMessage);
    }


});
