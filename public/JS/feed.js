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
    } else {
        const errorMessage = document.createElement("h3");

    }


});
