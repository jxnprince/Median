// functions here
const makeFetch = async (url) => {
    const response = await fetch(url);
    return response.json();
};



// main window listener here 'DOMContentLoaded
window.addEventListener("DOMContentLoaded", async(event) => {
    // all of the fetches for needed data
    // get the currently logged in users id for use later
    const user = await makeFetch(`/api/users/`);
    // get the current users info from the API's
    const user_info = await makeFetch(`/api/users/${user.userId}`);
    const users_stories = await makeFetch(`/api/users/${user.userId}/stories`);
    const bookmarks = await makeFetch(`/api/users/${user.userId}/bookmarks`);

    // html selectors here
    const leftContainer = document.getElementById('left-container');
    const profileImg = document.getElementById('profile-img');
    const followEditLinks = document.getElementById('follow-edit-links');
    const bookmarksContainer = document.getElementById('bookmarks-container');
    const userInfoContainer = document.getElementById('userinfo-container');
    const usersStories = document.getElementById('users-stories');
    const usersFollowees = document.getElementById('users-followees');



    profileImg.innerHTML = `<img src="${user_info.avatar}">`;
    followEditLinks.innerHTML = `<a href=""> Follow </a>
        <a href=""> Edit Bio </a>`;

    profileImg.appendChild(followEditLinks);


    bookmarks.their_bookmarks.Stories.forEach((eachBookmark) => {
        bookmarksContainer.innerHTML = `<div id="container" class="container">
            <a href=""> <img src="${eachBookmark.imgUrl}"> <span> ${eachBookmark.title} </span> </a>
        </div>`;
    });

    userInfoContainer.innerHTML = `<ul>
        <li> ${user_info.user.firstName} ${user_info.user.lastName} </li>
        <li> ${user_info.user.email} </li>
        <li> ${user_info.user.gender} </li>
    </ul>`;



    // GET THE NUMBER OF LIKES FOR EACH USERS STORY
    usersStories.innerHTML = `<h1> Your stories ${users_stories.their_stories.length} </h1>`;
    // loop through their_stories on users_stories
    const usersStoriesList = document.createElement('ul');
    users_stories.their_stories.forEach((eachStory) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` <a href="/stories/${eachStory.id}">
            <img src="${eachStory.imgUrl}">
            <span> ${eachStory.title} </span>
        </a> `;

        usersStoriesList.appendChild(listItem);
    });
    usersStories.appendChild(usersStoriesList);



    // GET THE NUMBER OF LIKES FOR EACH FOLLOWEES STORY
    usersFollowees.innerHTML = `<h1> Your Followers  ${user_info.followeesUserInfo.length} </h1>`;
    // loop through followeeStories on user_info
    const followeeStoriesList = document.createElement('ul');
    user_info.followeeStories.forEach((eachStory) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="/stories/${eachStory.id}">
            <img src="${eachStory.imgUrl}">
            <span> ${eachStory.title} </span>
        </a>`;

        followeeStoriesList.appendChild(listItem);


        // loop through followeesUserInfo on user_info
        user_info.followeesUserInfo.forEach((eachUser) => {
            const author_info = document.createElement('li');
            author_info.innerHTML = `<a href="/users/profile/${eachUser.id}">
                <img src="${eachUser.avatar}">
                <span> ${eachUser.firstName} ${eachUser.lastName} </span>
            </a> `;

            followeeStoriesList.appendChild(author_info);
        });

    });

    usersFollowees.appendChild(followeeStoriesList);



});
