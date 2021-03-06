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


    const featuredDiv = document.getElementById('featured');
    const featuredContainer = document.getElementById('featured-container');
    const featuredComments = document.getElementById('featured-comments');

    const feedItems = document.getElementById('feed-items');
    const feedContainer = document.getElementById('feed-container');
    const feedComments = document.getElementById('feed-comments');


    const data = await getStories('/api/feed');
    // console.log(data);


    if(data.status === 200){
        // const firstName = data.current_user.firstName;
        // const lastName = data.current_user.lastName;

        const unorderedList = document.createElement("ul");
        const commentsList = document.createElement("ul");
        const feedCommentsList = document.createElement("ul");
        unorderedList.setAttribute('class','story-feed-ul')

        // loop through the stories in the API
        // this is just the first result in the API -- do the rest below for different structure
        for (let i = 0; i === 0; i++){
            let story = data.the_stories[i];
            const eachItem = document.createElement("li");

            if(story.imgUrl === '') story.imgUrl = `https://miro.medium.com/max/1050/1*z2O2W5vrJBDXlcZ7rzPyxQ.jpeg`
            if (story.User.avatar === null) story.User.avatar = 'https://i.imgur.com/zB0xU1K.png?1'


            eachItem.innerHTML = `<a href="/stories/${story.id}">
                        <div id="story-img" class="featured-story-img">
                            <img src="${story.imgUrl}">
                        </div>

                        <div id="story-heading" class="featured-story-heading">
                            <h1> ${story.title} </h1>
                        </div>

                        <div id="story-text" class="featured-story-text">
                            <p> ${story.postBody} </p>
                        </div>
                    </a>


                    <div class='story-information'>
                        <a href="/users/profile/${story.userId}">
                            <div "user-information">
                                <img class="avatar" src="${story.User.avatar}">
                                <span> ${story.User.firstName} ${story.User.lastName} </span>
                            </div>
                        </a>

                        <div id='featured-like-link'>
                            <div id='featured-like-link-storyId' class='${story.id}'></div>
                            <div id='featured-likediv' class='likediv'>
                                <img src="https://i.imgur.com/uW1Ryn2.png?1" class='thumbsup'>
                                <span class= 'likeScore'> ${story.UserLikes.length} </span>
                            </div>
                        </div>
                    </div>
                `;


            story.Comments.forEach(comment => {
                const commentItem = document.createElement("li");

                commentItem.innerHTML = `<div id="featured-comment" class="featured-comment">
                <img src="${comment.User.avatar}" class="featured-comment-avatar">
                <span class= "featured-comment-userName"> ${comment.User.firstName[0]}. ${comment.User.lastName}: <br> </span>
                <p class= "featured-comment-body"> ${comment.body} </p>
                <span class= "featured-comment-date"> ${formatDate(comment.createdAt)} </span>
                </div> `;

                commentsList.appendChild(commentItem);
            });

            unorderedList.appendChild(eachItem);
            featuredComments.appendChild(commentsList);
        }


// html for the rest of the results from the API
        const feedList = document.createElement("ul");
        feedList.setAttribute('class','story-feed-ul')

        for (let i = 1; i < data.the_stories.length; i++) {
            let story = data.the_stories[i];
            const eachItem = document.createElement("li");
            //
            // REPLACE DEFAULT IMAGES
            //
            if(story.imgUrl === '') story.imgUrl = `https://miro.medium.com/max/1050/1*z2O2W5vrJBDXlcZ7rzPyxQ.jpeg`
            if(story.User.avatar === null) story.User.avatar = 'https://i.imgur.com/zB0xU1K.png?1'

            eachItem.innerHTML = `
            <div id="shortened-story" class="shortened-story">
                <a href="/stories/${story.id}">
                    <div id="shortened-story-heading" class="shortened-story-heading">
                        <div id="shortened-story-img" class="shortened-story-img-div">
                            <img src="${story.imgUrl}" class="shortened-story-img">
                        </div>
                        <div class="shortened-story-stack">
                            <h2 class="shortened-story-title"> ${story.title} </h2>
                            <div class="shortened-story-author">
                                <img src="${story.User.avatar}" class="shortened-story-avatar">
                                <span class="shortened-story-name"> ${story.User.firstName} ${story.User.lastName} </span>
                            </div>
                        </div>
                        <div class= 'shortened-likediv'>
                            <img src="https://i.imgur.com/uW1Ryn2.png?1" class="shortened-story-thumbsup">
                            <span class="shortened-story-likes-amount"> ${story.UserLikes.length} </span>
                        </div>
                    </div>
                </a>

                <div>
                    <a href="/users/profile/${story.userId}">
                        <div>
                            <img src="${story.User.avatar}" class="shortened-story-avatar">
                                <span class="shortened-story-name"> ${story.User.firstName} ${story.User.lastName} </span>
                        </div>
                    </a>
                </div>
            </div>`;


            feedList.appendChild(eachItem);
            feedComments.appendChild(feedCommentsList);
        }

        featuredContainer.appendChild(unorderedList);
        featuredContainer.appendChild(featuredComments);
        featuredDiv.appendChild(featuredContainer);

        feedContainer.appendChild(feedList);
        feedContainer.appendChild(feedComments);
        feedItems.appendChild(feedContainer);


        mainDiv.appendChild(featuredContainer);
        mainDiv.appendChild(feedItems);


        const likeOrUnlikeFeatured = document.getElementById('featured-like-link');
        const featuredStoryId = document.getElementById('featured-like-link-storyId');


        likeOrUnlikeFeatured.addEventListener('click', async (event) => {
            event.preventDefault();
            const storyId = featuredStoryId.className;
            const userId = data.current_user.id;
            const featuredLikeDiv = document.getElementById('featured-likediv');

            const response = await fetch(`/api/likes/${storyId}/${userId}`, { method: 'POST' });
            if (response.status === 200) {
                const data = await getStories('/api/feed');
                if (data.status === 200) {
                    featuredLikeDiv.innerHTML = '';

                    for (let i = 0; i === 0; i++) {
                        let story = data.the_stories[i];
                        featuredLikeDiv.innerHTML = `
                                <img src="https://i.imgur.com/uW1Ryn2.png?1" class='thumbsup'>
                                <span class= 'likeScore'> ${story.UserLikes.length} </span>`;
                    }
                } else {
                    const errorMessage = document.createElement("h3");
                    errorMessage.innerText = "Failed to fetch Story data. Please try again.";
                    mainDiv.appendChild(errorMessage);
                }
            }
        });

    } else {
        const errorMessage = document.createElement("h3");
        errorMessage.innerText = "Failed to fetch Story data. Please try again.";
        mainDiv.appendChild(errorMessage);
    }



});
