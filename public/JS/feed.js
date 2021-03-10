// functions here:
const getStories = async (url) => {
    const data = await fetch(url);
    return data.json();
};


const getAuthors = async (url) => {
    const data = await fetch(url);
    return data.json();
};



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

        const unorderedList = document.createElement("ul");

        // loop through the stories in the API
        data.the_stories.forEach((story) => {
            const eachItem = document.createElement("li");


            const authors_array = data.authors.map( async (eachAuthor) => {
                return await getAuthors(`/api/users/${eachAuthor}`);
            });


            eachItem.innerHTML = `<a href="/stories/${story.id}">
                    <img src="${story.imgUrl}">
                    ${ authors_array.forEach(async (author) => {
                        const result = await author;
                        `<p> ${result} </p>`
                        })
                    }

                    <h1> ${story.title} </h1>
                    <p> ${story.postBody} </p>

                </a>`;

            unorderedList.appendChild(eachItem);
        });


        mainDiv.appendChild(storyDiv);
        storyDiv.appendChild(unorderedList);


    } else {
        const errorMessage = document.createElement("h3");
        errorMessage.innerText = "Failed to fetch Story data. Please try again.";
        mainDiv.appendChild(errorMessage);
    }


});
