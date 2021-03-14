// functions here
const makeFetch = async (url) => {
    const response = await fetch(url);
    return response.json();
};




// main window listener here 'DOMContentLoaded
window.addEventListener("DOMContentLoaded", async (event) => {

    // HTML selectors here
    const api_info = document.getElementById('api-div').classList[0];
    const title = document.getElementById('edit-story-title');
    const storyImg = document.getElementById('edit-story-img');
    const storyPost = document.getElementById('edit-story-post');
    const editButton = document.getElementById('edit-story-button');



    // below gets the info for the fetch by splitting the classList
    const api_info_array = api_info.split("-");
    const storyId = api_info_array[0];
    const userId = api_info_array[1];


    // fetches here:
    const prefillData = await makeFetch(`/api/stories/${storyId}/users/${userId}`);

    // prefill the form so that updating a story is easier
    title.value = `${prefillData.the_story.title}`;
    storyImg.value = `${prefillData.the_story.imgUrl}`;
    storyPost.value = `${prefillData.the_story.postBody}`;


    // add an event listener to the editButton
    editButton.addEventListener('click', async (event)=> {
        event.preventDefault();

        // get the values from the form
        const the_title = title.value;
        const the_story_img = storyImg.value;
        const the_story_post = storyPost.value;



        // make fetch to the route -- use put
        const result = await fetch(`/api/stories/${storyId}/users/${userId}`, {
            method: 'PUT',
            mode: 'same-origin',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ the_title, the_story_post, the_story_img })
        });

        console.log(result);

    });


});
