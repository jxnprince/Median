// functions here
const makeFetch = async (url) => {
    const response = await fetch(url);
    return response.json();
};


// main window listener here 'DOMContentLoaded
window.addEventListener("DOMContentLoaded", async(event) => {

    let user;
    let user_info;
    let users_stories;
    let bookmarks;
    // select to check if this is for a user that is not the currently logged in user
    const otherUser = document.getElementById("otherUser");


    if (otherUser === null) {
        user = await makeFetch(`/api/users/`);
        user_info = await makeFetch(`/api/users/${user.userId}`);
        users_stories = await makeFetch(`/api/users/${user.userId}/stories`);
        bookmarks = await makeFetch(`/api/users/${user.userId}/bookmarks`);

    } else if (otherUser.className === '0') {
        window.location.href = `/users`
    } else {
        user = otherUser.classList;
        user_info = await makeFetch(`/api/users/${user}`);
        users_stories = await makeFetch(`/api/users/${user}/stories`);
        bookmarks = await makeFetch(`/api/users/${user}/bookmarks`);

    }




    // html selectors here
    const leftContainer = document.getElementById('left-container');
    const profileImg = document.getElementById('profile-img');
    const followEditLinks = document.getElementById('follow-edit-links');
    const bookmarksContainer = document.getElementById('bookmarks-container');
    const userInfoContainer = document.getElementById('userinfo-container');
    const usersStories = document.getElementById('users-stories');
    const usersFollowees = document.getElementById('users-followees');




    profileImg.innerHTML = `
    <div class= 'profile-div'>
        <img src="${user_info.user.avatar}">
    </div>`;

    followEditLinks.innerHTML = `
    <div class= 'main-profile-info'>
        <a href=""> Follow </a>
        <a href=""> Edit Bio </a>
    </div>`;

    profileImg.appendChild(followEditLinks);


    bookmarks.their_bookmarks.Stories.forEach((eachBookmark) => {
        bookmarksContainer.innerHTML = `
        <div id="container" class="bookmark-container">
            <h3>Bookmarks </h3>
            <div class='bookmarks-content'>
                <a href="/stories/${eachBookmark.Bookmark.storyId}"> <img src="${eachBookmark.imgUrl}" class='bookmark-img'> <span class= 'bookmark-title'> ${eachBookmark.title} </span> </a>
            </div>
        </div>`;
    });

    userInfoContainer.innerHTML = `
    <div class='userinfo'>
        <ul>
            <li> ${user_info.user.firstName} ${user_info.user.lastName} </li>
            <li> ${user_info.user.email} </li>
            <li> ${user_info.user.gender} </li>
        </ul>
    </div>`;



    // GET THE NUMBER OF LIKES FOR EACH USERS STORY
    usersStories.innerHTML = `<h1> Your stories ${users_stories.their_stories.length} </h1>`;
    // loop through their_stories on users_stories
    const usersStoriesList = document.createElement('ul');
    users_stories.their_stories.forEach((eachStory) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = ` <a href="/stories/${eachStory.id}">
            <img class ='your-stories-img' src="${eachStory.imgUrl}">
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
            <img class= 'followers-img'src="${eachStory.imgUrl}">
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
