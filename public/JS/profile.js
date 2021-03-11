// functions here
const makeFetch = async (url) => {
    const response = await fetch(url);
    return response.json();
};



// main window listener here 'DOMContentLoaded
window.addEventListener("DOMContentLoaded", async(event) => {
    // html selectors here

    // get the currently logged in users id for use later
    const user = await makeFetch(`/api/users/`);
    // get the current users info from the API's
    const user_info = await makeFetch(`/api/users/${user.userId}`);
    const users_stories = await makeFetch(`/api/users/${user.userId}/stories`);
    const bookmarks = await makeFetch(`/api/users/${user.userId}/bookmarks`);



});
