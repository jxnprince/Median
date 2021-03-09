// functions here:
const getStories = async (url) => {
    const data = await fetch(url);
    return data.json();
}


// main DOMContentLoaded event here:
window.addEventListener("DOMContentLoaded", async (event) => {
    // html dom selections here:
    const body = document.getElementsByTagName("body");
    const mainDiv = document.getElementById('mainContent');
    const storyDiv = document.getElementById('story');
    const detailsDiv = document.getElementById('stats');

    const data = await getStories('/api/feed');
    console.log(data);


    if(data.status === 200){
        // make / render the html containing the feed information -
        const welcomeMessage = document.createElement("h3");
        const firstName = data.current_user.firstName;
        const lastName = data.current_user.lastName;


        welcomeMessage.innerText = `Welcome ${firstName} ${lastName}`;
        mainDiv.appendChild(welcomeMessage);

    } else {
        const errorMessage = document.createElement("h3");
        errorMessage.innerText = "Failed to fetch Story data. Please try again.";
        mainDiv.appendChild(errorMessage);

    }


});
