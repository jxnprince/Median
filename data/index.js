


const getRandomName = (gender) => {
        const male_names = [
            'James',
            'John',
            'Robert',
            'Michael',
            'William',
            'David',
            'Richard',
            'Joseph',
            'Thomas',
            'Charles',
            'Christopher',
            'Daniel',
            'Matthew',
            'Anthony',
            'Donald',
            'Mark',
            'Paul',
            'Steven',
            'Andrew',
            'Kenneth',
            'Joshua',
            'Kevin',
            'Brian',
            'George',
            'Edward',
            'Ronald',
            'Timothy',
            'Jason',
            'Jeffrey',
            'Ryan',
            'Jacob',
            'Gary',
            'Nicholas',
            'Eric',
            'Jonathan',
            'Stephen',
            'Larry',
            'Justin',
            'Scott',
            'Brandon',
            'Benjamin',
            'Samuel',
            'Frank',
            'Gregory',
            'Raymond',
            'Alexander',
            'Patrick',
            'Jack',
            'Dennis',
            'Jerry',
            'Tyler',
            'Aaron',
            'Jose',
            'Henry',
            'Adam',
            'Douglas',
            'Nathan',
            'Peter',
            'Zachary',
            'Kyle',
            'Walter',
            'Harold',
            'Jeremy',
            'Ethan',
            'Carl',
            'Keith',
            'Roger',
            'Gerald',
            'Christian',
            'Terry',
            'Sean',
            'Arthur',
            'Austin',
            'Noah',
            'Lawrence',
            'Jesse',
            'Joe',
            'Bryan',
            'Billy',
            'Jordan',
            'Albert',
            'Dylan',
            'Bruce',
            'Willie',
            'Gabriel',
            'Alan',
            'Juan',
            'Logan',
            'Wayne',
            'Ralph',
            'Roy',
            'Eugene',
            'Randy',
            'Vincent',
            'Russell',
            'Louis',
            'Philip',
            'Bobby',
            'Johnny',
            'Bradley'
        ];

        const female_names = [
            'Mary',
            'Patricia',
            'Jennifer',
            'Linda',
            'Elizabeth',
            'Barbara',
            'Susan',
            'Jessica',
            'Sarah',
            'Karen',
            'Nancy',
            'Lisa',
            'Margaret',
            'Betty',
            'Sandra',
            'Ashley',
            'Dorothy',
            'Kimberly',
            'Emily',
            'Donna',
            'Michelle',
            'Carol',
            'Amanda',
            'Melissa',
            'Deborah',
            'Stephanie',
            'Rebecca',
            'Laura',
            'Sharon',
            'Cynthia',
            'Kathleen',
            'Amy',
            'Shirley',
            'Angela',
            'Helen',
            'Anna',
            'Brenda',
            'Pamela',
            'Nicole',
            'Samantha',
            'Katherine',
            'Emma',
            'Ruth',
            'Christine',
            'Catherine',
            'Debra',
            'Rachel',
            'Carolyn',
            'Janet',
            'Virginia',
            'Maria',
            'Heather',
            'Diane',
            'Julie',
            'Joyce',
            'Victoria',
            'Kelly',
            'Christina',
            'Lauren',
            'Joan',
            'Evelyn',
            'Olivia',
            'Judith',
            'Megan',
            'Cheryl',
            'Martha',
            'Andrea',
            'Frances',
            'Hannah',
            'Jacqueline',
            'Ann',
            'Gloria',
            'Jean',
            'Kathryn',
            'Alice',
            'Teresa',
            'Sara',
            'Janice',
            'Doris',
            'Madison',
            'Julia',
            'Grace',
            'Judy',
            'Abigail',
            'Marie',
            'Denise',
            'Beverly',
            'Amber',
            'Theresa',
            'Marilyn',
            'Danielle',
            'Diana',
            'Brittany',
            'Natalie',
            'Sophia',
            'Rose',
            'Isabella',
            'Alexis',
            'Kayla',
            'Charlotte'
        ];

        let male_index = Math.floor(Math.random() * male_names.length);
        let female_index = Math.floor(Math.random() * female_names.length);

        let maleName = male_names[male_index];
        let femaleName = female_names[female_index];

    if (gender === 'm' || gender === 'M') return maleName;
    if (gender === 'f' || gender === 'F') return femaleName;

};








// change this so that the corresponding character name matches with the character photo
// make their name the key and the photo the value in an object ----

const getStarwarsNames = () => {

    const starwars_names = [
        'Oola',
        'Jango Fett',
        'Padmé Amidala',
        'Sebulba',
        'Admiral Motti',
        'Qira',
        'Uncle Owen',
        'Admiral Firmus Piett',
        'Wedge Antilles',
        'Admiral Holdo',
        'IG-88',
        'EV-9D9',
        'Mon Mothma',
        'Count Dooku',
        'Nien Nunb',
        'Lobot',
        'Ponda Baba',
        'Max Rebo',
        'Salacious B. Crumb',
        'Enfys Nest',
        'Figrin D’an and the Modal Nodes',
        'Wicket W. Warrick',
        'Poe Dameron',
        'General Grievous',
        'Qui-Gon Jinn',
        'Bib Fortuna',
        'Admiral Ackbar',
        'Finn',
        'Kylo Ren',
        'Chirrut Îmwe',
        'The Emperor',
        'Mace Windu',
        'Grand Moff Tarkin',
        'Chewbacca',
        'Jabba the Hut',
        'Greedo',
        'K-2SO',
        'Lando Calrissian',
        'C-3PO',
        'Darth Maul',
        'BB-8',
        'Obi-Wan Kenobi',
        'R2-D2',
        'Rey',
        'Luke Skywalker',
        'Princess Leia',
        'Yoda',
        'Boba Fett',
        'Darth Vader',
        'Han Solo'
    ];
    let starwars_characters = starwars_names[Math.floor(Math.random() * starwars_names.length)];
    return starwars_characters;
};



const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};


const randomYear = () => {
    const validYears = [
        "1900",
        "1910",
        "1920",
        "1930",
        "1940",
        "1950",
        "1960",
        "1970",
        "1980",
        "1990",
        "1901",
        "1902",
        "1903",
        "1904",
        "1905",
        "1906",
        "1907",
        "1908",
        "1909",
        "1910",
        "1911",
        "1912",
        "1913",
        "1914",
        "1915",
        "1916",
        "1917",
        "1918",
        "1919",
        "1920",
        "1921",
        "1922",
        "1923",
        "1924",
        "1925",
        "1926",
        "1927",
        "1928",
        "1929",
        "1930",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020"

    ];
    return validYears[Math.floor(Math.random() * validYears.length)]
};



const randomMonth = () => {
    const validMonth = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
    ];

    return validMonth[Math.floor(Math.random() * validMonth.length)]
};




const randomDay = () => {
    const validDay = [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27'
    ];
    return validDay[Math.floor(Math.random() * validDay.length)]
}



const getRandomMaleImg = () => {
    //https://www.gq-magazine.co.uk/gallery/35-men-under-38-and-a-half?image=5d13a04895d78b5054d7328b
    // above is the link to the site
    const images = [
        'https://media.gq-magazine.co.uk/photos/5d13a047533a2374b9c62d51/master/w_1280%2cc_limit/kanye-west-GQ-2March15-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a047976fa3850bf3a5cc/master/w_1280%2cc_limit/Chris-Pratt-GQ-2March15-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a048003d75c21cae6cb5/master/w_1280%2cc_limit/Adam-Driver-GQ-2March-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a0480c56cf91d31d3aa3/master/w_1280%2cc_limit/Kendrick-Lamar-GQ-2March15-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a0487fcc8e11548207fd/master/w_1280%2cc_limit/Ryan-Gosling-GQ-2March15-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a048e10a9e0aa38463ad/master/w_1280%2cc_limit/Prince-William-GQ-2March15-Rex_b.jpg',
        'https://media.gq-magazine.co.uk/photos/5d13a0480de8e6627d5cc6e2/master/w_1280%2cc_limit/Tom-Hardy-GQ-hp-2March15-getty_bt.jpg',
        'https://media.gq.com/photos/5eb5955221e631be7348bd84/master/w_1600%2Cc_limit/robert-pattinson-gq-cover-june-july-2020-01.jpg',
        'https://media.gq.com/photos/5e8ddc703eac2600085a7d1c/master/w_1600%2Cc_limit/kanye-west-gq-cover-may-2020-01.jpg',
        'https://media.gq.com/photos/5ec5411b7f77785a5117fb6c/master/w_1600%2Cc_limit/steve-buscemi-gq-june-july-2020-01.jpg',
        'https://media.gq.com/photos/5fb2f6b568ccb9832cf9ef7a/master/w_1600%2Cc_limit/george-clooney-moty-gq-cover-2020-02.jpg',
        'https://media.gq.com/photos/5fb4194f4d9ac6ca0bd64ff2/master/w_1600%2Cc_limit/trevor-noah-moty-gq-cover-2020-01.jpg',
        'https://media.gq.com/photos/5e7cdef9d73e2d00084f1983/master/w_1600%2Cc_limit/eliud-kipchoge-gq-april-2020-07.jpg',
        'https://media.gq.com/photos/600b46d3c843425cd6f14bf9/master/w_1600%2Cc_limit/1296786633',
        'https://media.gq.com/photos/600b456958da2d3336e1417f/master/w_1600%2Cc_limit/1230700231',
        'https://media.gq.com/photos/603c4079fa4169891572a0e2/master/w_1600%2Cc_limit/GettyImages-1304616711.jpg',
        'https://media.gq.com/photos/603c42b5fa4169891572a0e4/master/w_1600%2Cc_limit/GettyImages-1304620762.jpg',
        'https://media.gq.com/photos/603c4e17fa4169891572a0e6/master/w_1600%2Cc_limit/GettyImages-1304621467.jpg',
        'https://media.gq.com/photos/603c674943922941b4a9e47f/master/w_1600%2Cc_limit/Jared%2520Leto_Courtesy%2520of%2520Getty%2520Images.JPG',
        'https://media.gq.com/photos/603c5431d9a0945800067629/master/w_1600%2Cc_limit/GettyImages-1304628336.jpg'
    ];

    return images[Math.floor(Math.random() * images.length)]
}




const getRandomFemaleImg = () => {
    const images = [
        'https://netstorage-legit.akamaized.net/images/a1bb9cad190f3198.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/1932fa21a023d8e9.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/fcefa760202216a9.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/29e7796231161a4e.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/2ce47bad51d6c9fb.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/87fb76d98d606d8d.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/bf6c7ec2d81154ea.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/9f62f8e3edea4d84.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/470d6ffc0d59cfe1.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/c0b002d97a704dc4.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/ad33bf57d5d4fd7e.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/c75cedccdca42708.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/7e14943fe6417123.jpg',
        'https://netstorage-legit.akamaized.net/images/ce45ea96f77c851f.jpg?imwidth=900',
        'https://netstorage-legit.akamaized.net/images/vllkyt7v6vonektmk.jpg',
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/8ea/32f/0b3ab75d47a8dcd29132cc3f54.jpg',
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/038/76f/46f5735d67a84c32c65614287e.jpg',
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/41d/d0c/87d11f5b48969423f767485f17.jpg',
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/6ea/cce/780ab0537abf3132dfff53e638.jpg',
        'https://wl-brightside.cf.tsp.li/resize/728x/jpg/188/dc9/61aa585c899bed5eea75ce81f4.jpg'
    ];

    return images[Math.floor(Math.random() * images.length)]
};






const getRandomStoryImg = () => {
    const images = [
        'https://miro.medium.com/max/1458/1*WNBUtTzkDqn-uzP8vPcvpw.jpeg',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];



    return images[Math.floor(Math.random() * images.length)]
};








const randomStory = (data) => {
    // create a story object
    // return a function that returns the story object
    const the_story = {
        imgUrl: `${getRandomStoryImg()}`,
        postBody: `${data.the_body}`,
        title: `${data.the_title}`,
        userId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    };


    return () => the_story;
};


const stories_array = [
    {
        the_body: "I’ve compiled 19 skills and topics you might find valuable in 2019. Please don’t get overwhelmed — neither I nor most other developers are familiar with every single topic. These are just the exciting things on my radar, and the JavaScript horizon is never-ending. My name is Yoni Goldberg, an independent Node.JS consultant and the co- author of Node.js best practices.I work with customers at the USA, Europe and Israel on polishing their Node.js applications.Among my services are code, application and architecture review, testing & CI, advanced training sessions, and others which you may find here.Follow me on Twitter.",
        the_title: "19 ways to become a better Node.js developer in 2019",
    },

    {
        the_body: "As a front-end developer, you will find a lot of tools on the web to help you with your development process. There are a lot of tasks that you need to do on a daily basis, so it’s a good idea to use some tools that can speed up your development and make your life easier as a developer. The good thing is that you don’t have to pay anything, there are a lot of free tools out there. So in this article, we will give you a list of some useful front- end development apps that will help you on your next projects and make your life easier.Let’s get right into it.",
        the_title: "5 Amazing Front-End Development Apps You Probably Need to Use",
    },
    {
        the_body: "I work at Voodoo, a French company that creates mobile video games. We have a lot of challenges with performance, availability, and scalability because of the insane amount of traffic our infrastructure supports (billions of events/requests per day …… no joke!). In this setting, every metric is important and gives us a lot of information about the state of our system. When working with Node.js one of the most critical resources to monitor is the CPU.Most of the time, when working on a low traffic API or project we don’t realize how many simple lines of code can have a huge impact on CPU.On the other hand, when traffic increases, a simple mistake can cost dearly.",
        the_title: "Node.js and CPU profiling on production (in real-time without downtime)",
    },
    {
        the_body: "A while back, I solved a Leetcode problem with an absolutely horrendous run time, only beating roughly 9% of Javascript submissions. It was the containsDuplicate problem and it’s a fairly simple one: I initially solved it by creating an empty array for “storage”. For every number in the original array (nums), I checked if that number was contained in my storage array…and if it wasn’t, I would add it. Technically, my approach was “IF this storage array does NOT include this number, then add the number to the storage array”. My else statement would return true if that condition was not met, in other words if the storage array DID contain the number…which would mean that the number was present at least twice in the original array. If after iterating over all the numbers in the original nums array we never found a number that WAS already included in the storage array, we would return false…which would mean that all numbers had been unique in the original array. It certainly worked…but, as I mentioned above, it was a pretty terrible run time.I knew that there had to be a better way, so I set out to look for one.That’s when I came upon the Set object. According to MDN Web Docs: Set objects are collections of values.You can iterate through the elements of a set in insertion order.A value in the Set may only occur once; it is unique in the Set's collection. So right off the bat we see one big difference between a Set and an Array.All values in a Set are going to be unique, whereas an Array has no such constraint…if you choose, you can repeat a value in an Array as many times as you like. Another very important distinction between the two is that, while both Sets and Arrays are “collections”, a Set is considered a keyed collection, whereas an Array is considered an indexed collection.The former, as its name implies, is a collection that uses keys…and the elements are iterable in the order of insertion.Most people with even a little exposure to Javascript are pretty familiar with the indexed nature of an Array…data is ordered by an index value and you can reference elements via that index. Most sources consider a Set a complement to an Array…with Sets having simpler syntax than Arrays and being useful in situations where we only need to access basic operations.That being said, though, there is one case in which Sets have a distinct advantage over Arrays and it is this scenario that was useful in improving the run time of my Leetcode solution! This is the case where we are trying to verify whether an element exists in a collection. While I used includes() for my storage array, I can use has() for my storage set….and the has() method drastically boosts performance time! Look at that! I went from beating only 9% of Javascript submissions to beating almost 76% of submissions! This is because searching for elements in a Set tends to have an O(1) complexity, while searching operations in an array tend to have O(n) complexity. So my final solution, which incorporates Set, looks like this: One thing to keep in mind. Memory usage definitely increased with the Set…with me beating 75% of submissions using an array vs beating only 48% of submissions using a set. That being said, the gain in performance was significantly better than what was sacrificed in memory usage; the solution that works best for you is going to be specific to your unique constraints in solving the problem.",
        the_title: "Can I interest you in a Set? The set vs. the array in Javascript",
    },
    {
        the_body: "PrimeVue is a UI framework that’s compatible with Vue 3. In this article, we’ll look at how to get started with developing Vue 3 apps with PrimeVue. Getting Started We install the required packages by running: npm install primevue@^ 3.1.1 --save npm install primeicons--save This will install the library with all the components and the icons. Next, we add the PrimeVue plugin into our app: main.js import { createApp } from 'vue'; import App from './App.vue'; import PrimeVue from 'primevue/config'; import InputText from 'primevue/inputtext'; import 'primevue/resources/primevue.min.css' import 'primevue/resources/themes/bootstrap4-light-blue/theme.css' import 'primeicons/primeicons.css' const app = createApp(App); app.use(PrimeVue); app.component('InputText', InputText); app.mount('#app'); App.vue < template > <div> <InputText type='text' v-model='text' /> <p>{{ text }}</p> </div></template ><script>export default {name: 'App',data() {return {text: '',};},};</script> In main.js m we call app.use to add the plugin. Then we call app.component to register the InputText component. import ‘primevue / resources / primevue.min.css’ imports the core CSS. import ‘primevue / resources / themes / bootstrap4 - light - blue / theme.css’ is the CSS for the theme. import ‘primeicons / primeicons.css’ add the icons. We can also include the script tag for the individual components: <!DOCTYPE html><html lang='en'><head><meta charset='utf-8' /> <title>calendar demo</title> <link href='https://unpkg.com/primevue/resources/themes/saga-blue/theme.css 'rel='stylesheet'/><link href='https://unpkg.com/primevue/resources/primevue.min.css ' rel='stylesheet'/> <link href='https://unpkg.com/primeicons/primeicons.css ' rel='stylesheet'/> <script src='https://unpkg.com/vue@next'></script> <script src='https://unpkg.com/primevue@3.1.1/components/inputtext/inputtext.umd.min.js'></script> </head> <body> <div id='app'> <p-inputtext v-model='text'></p-inputtext> <p>{{ text }}</p> </div> <script> Vue.createApp({ data() { return { text: '' };}, components: { 'p-inputtext': inputtext } }).mount('#app');</script></body></html> We add the script tags for Vue 3 and PrimeVue’s inputtext component.Then we can use it in our code. PrimeFlex We can install the primeflex package to add CSS to let us create layouts easily without writing everything from scratch. To install it, we run:npm install primeflex --save Then we cal add the CSS by writing: main.js import { createApp } from 'vue'; import App from './App.vue'; import PrimeVue from 'primevue/config'; import InputText from 'primevue/inputtext'; import 'primeflex/primeflex.css'; const app = createApp(App); app.use(PrimeVue); app.component('InputText', InputText); app.mount('#app'); Now we can use the classes by writing: App.vue < template > <div class='card'> <InputText type='text' v-model='text' class='p-ml-2 p-d-inline' /> <p>{{ text }}</p> </div> </template > <script> export default { name: 'App', data() { return { text: '', };},};</script> p - ml - 2 adds some margin on the left side. p - d - inline makes the input display inline. We can add shadows with the p - shadow - { x } class, where x can be 1 to 24. p - d - flex lets us create a flex layout. p - d - inline - flex lets us create an inline flex layout. p - flex - { direction } lets us set the flex - direction.Where direction can be one of: row(default ) row - reverse column column - reverse The order of items inside a flex container can be changed with the p - order - { value } classes. We can also add layouts that change according to breakpoints: <template> <div class='p-d-flex'> <div class='p-mr-2 p-order-3 p-order-md-2'>Item 1</div> <div class='p-mr-2 p-order-1 p-order-md-3'>Item 2</div> <div class='p-mr-2 p-order-2 p-order-md-1'>Item 3</div> </div> </template> <script> export default { name: 'App', }; </script> We change the order depending on whether the breakpoint is md and up or otherwise. If it’s md or higher, then we get: Item 3 Item 1 Item 2 Otherwise, we get: Item 2 Item 3 Item 1 Conclusion PrimeVue is one of the earliest UI frameworks to be compatible with Vue 3. Enjoyed this article ? If so, get more similar content by subscribing to our YouTube channel!",
        the_title: "Getting Started with Vue 3 Development with the PrimeVue Framework",
    },
    {
        the_body: `Vue 3 is the latest version of
        the easy to use Vue JavaScript framework
         that lets us create front end apps. In this article, we’ll look at how to create a guess a number game with Vue 3 and JavaScript.Create the ProjectWe can create the Vue project with Vue CLI.To install it, we run:npm install - g @vue/cliwith NPM or:yarn global add @vue/cliwith Yarn.Then we run:vue create number - guessing - gameand select all the default options to create the project.Create the Guess a Number GameTo create the guess a number game, we write:<template><div v-if='started'><form @submit.prevent='submit'><div><label>answer</label><input v-model.number='answer' /></div><button type='submit'>check</button></form><p>{{ status }}</p></div><div v-else><button type='button' @click='start'>start</button><p>{{ status }}</p></div ></template ><script>export default {name: 'App',data() {return {rightAnswer: undefined,answer: 0,status: '',started: false,};},computed: {formValid() { return +this.answer >= 0; },},methods: {start() {this.rightAnswer = Math.ceil(Math.random() * 10);console.log(this.rightAnswer);this.started = true;},submit() {if (!this.formValid) {return;}const {answer, rightAnswer} = this;if (answer === rightAnswer) {this.status = 'you got it';this.started = false;} else if (answer < rightAnswer) {this.status = 'too low';} else {this.status = 'too high'; }},},}; </script> We start by adding the form div that’s shown when the game is started. It’s started when started is true. Inside it, we have a form element. We listen to the submit evbent with the @sumbit directive. The prevent modifier prevents server - side submission and let us do client - side form submission. We have an input to let the player enter the answer. We bind the inputted value to the answer reactive property with v - model. The number modifier automatically converts the entered value to a number. Then we add a button with type set to submit to let the player submit the form. We also display the status in the form. If the game isn’t started, we display the status and a button to let us start the game. Then we move on to adding the component options object. Inside it, we have the data method to return the reactive properties and their initial values. Next, we add the formValid to check the answer reactive property to see if it’s bigger than or equal to 0. The start method lets us start the game by generating the rightAnswer and set started to true to start the game. Next, we add the submit method to compareanswer with the rightAnswer. First, we check if the value is a valid number with formValid. If it’s not, then we stop running the function. And we display different messages depending on whether answer is equal, less than, or bigger than the rightAnswer. If the player got the right answer, then we set started to false to end the game. Conclusion We can create a guess the number game easily with Vue 3 and JavaScript. Enjoyed this article ? If so, get more similar content by subscribing to our YouTube channel!`,
        the_title: "Create a Guess a Number Game with Vue 3 and JavaScript",
    },
    {
        the_body: `Summary: in this tutorial, you will learn how to use the JavaScript arrow function to write more concise code for function expressions. Introduction to JavaScript arrow functions ES6 arrow functions provide you with an alternative way to write a shorter syntax compared to the function expression. The following example defines a function expression that adds two numbers:let add = function(x,y) { return x + y;}
            console.log(add(10,20)); // 30
            Code language: JavaScript (javascript)
            The following example uses an arrow function which is equivalent to the above add() function expression:
            let add = (x,y) => x + y;
            console.log(add(10,20)); // 30;
            Code language: JavaScript (javascript)
            In this example, the arrow function has one expression x + y so it returns the result of the expression.
            However, if you use the block syntax, you need to specify the return keyword:
            let add = (x, y) => { return x + y; };
            Code language: JavaScript (javascript)
            The  typeof operator returns function indicating the type of arrow function.
            console.log(typeof add); // function
            Code language: JavaScript (javascript)
            The arrow function is also an instance of the Function type as shown in the following example:
            console.log(add instanceof Function); // true
            Code language: JavaScript (javascript)
            JavaScript arrow functions with multiple parameters
            If an arrow function has two or more parameters, you use the following syntax:
            (p1, p2, ..., pn) => expression;
            Code language: PHP (php)
            The following expression:
            => expression
            Code language: PHP (php)
            is equivalent to the following expression:
            => { return expression; }
            Code language: PHP (php)
            For example, to sort an array of numbers in the descending order, you use the sort() method of the array object as follows:
            let numbers = [4,2,6];
            numbers.sort(function(a,b){
                return b - a;
            });
            console.log(numbers); // [6,4,2]
            Code language: JavaScript (javascript)
            The code is more concise with the arrow function syntax:
            let numbers = [4,2,6];
            numbers.sort((a,b) => b - a);
            console.log(numbers); // [6,4,2]
            Code language: JavaScript (javascript)
            JavaScript arrow functions with a single parameter
            If an arrow function takes a single parameter, you use the following syntax:
            (p1) => { statements }
            Code language: PHP (php)
            Note that you can omit the parentheses as follows:
            p => { statements }
            Code language: PHP (php)
            The following example uses an arrow function as an argument of the map() method that transforms an array of strings into an array of the string’s lengths.
            let names = ['John', 'Mac', 'Peter'];
            let lengths = names.map(name => name.length);
            console.log(lengths);
            Code language: JavaScript (javascript)
            JavaScript arrow functions with no parameter
            If the arrow function has no parameter, you must use the parentheses, like this:
            () => { statements }
            Code language: PHP (php)
            See the following example.
            let logDoc = () => console.log(window.document);
            logDoc();
            Code language: JavaScript (javascript)
            Line break between parameter definition and arrow
            JavaScript doesn’t allow you to use a line break between the parameter definition and the arrow ( =>) in an arrow function.
            For example, the following code causes a SyntaxError:
            let multiply = (x,y)
            => x * y;
            Code language: JavaScript (javascript)
            However, the following code works perfectly fine:
            let multiply = (x,y) =>
            x * y;
            Code language: JavaScript (javascript)
            JavaScript allows you to use the line break between parameters as shown in the following example:
            let multiply = (
              x,
              y
            ) =>
            x * y;
            Code language: JavaScript (javascript)
            Statements & expressions in the arrow function body
            In JavaScript, an expression evaluates to a value as shown in the following example.
            10 + 20;
            An expression also does a specific task such as:
            if (x === y) { console.log('x equals y'); }
            Code language: JavaScript (javascript)
            If you use an expression in the body of an arrow function, you don’t need to use the curly braces.
            let square = x => x * x;
            Code language: JavaScript (javascript)
            However, if you use a statement, you must wrap it inside a pair of curly braces as in the following example:
            let except = msg => { throw msg; };
            Code language: JavaScript (javascript)
            JavaScript arrow functions and object literal
            Consider the following example:
            let setColor = function (color) { return {value: color} };
            let backgroundColor = setColor('Red');
            console.log(backgroundColor.value); // "Red"
            Code language: JavaScript (javascript)
            The setColor() function expression returns an object that has the value property set to the color argument. If you try the following syntax to return an object literal from an arrow function, you will get an error.
            p => {object:literal}
            Code language: PHP (php)
            For example, the following code causes an error.
            let setColor = color => {value: color };
            Code language: JavaScript (javascript)
            Since both block and object literal use curly brackets, the JavasScript engine cannot distinguish between a block and an object.
            To fix this, you need to wrap the object literal in parentheses as follows:
            let setColor = color => ({value: color });
            Code language: JavaScript (javascript)
            Arrow function vs. regular function
            There are two main differences between an arrow function and a regular function.
            First, in the arrow function, the this, arguments, super, new.target are lexical. It means that the arrow function uses these variables (or constructs) from the enclosing lexical scope.
            Second, an arrow function cannot be used as a function constructor. If you use the new keyword to create a new object from an arrow function, you will get an error.
            JavaScript arrow functions and this value
            In JavaScript, a new function defines its own this value. However, it is not the case for the arrow function. See the following example:
            function Car() { this.speed = 0;
            this.speedUp = function (speed) {
            this.speed = speed;
            setTimeout(function () {
            console.log(this.speed); // undefined
            }, 1000);};}
            let car = new Car(); car.speedUp(50); Code language: JavaScript (javascript) Inside the anonymous function of the setTimeOut() function, the this.speed is undefined. The reason is that the this of the anonymous function shadows the this of the speedUp() method. To fix this, you often assign the this value to a variable that doesn’t shadow inside the anonymous function as follows: function Car() { this.speed = 0; this.speedUp = function (speed) { this.speed = speed; let self = this; setTimeout(function () { console.log(self.speed); }, 1000); }; } let car = new Car(); car.speedUp(50); // 50; Code language: JavaScript (javascript) Unlike an anonymous function, an arrow function captures the this value of the enclosing context instead of creating its own this context. The following code should work as expected: function Car() { this.speed = 0; this.speedUp = function (speed) { this.speed = speed; setTimeout( () => console.log(this.speed), 1000); }; } let car = new Car(); car.speedUp(50); // 50; Code language: JavaScript (javascript) JavaScript arrow functions and the arguments object An arrow function doesn’t have the arguments object. Therefore, the arguments is a reference of the name in the enclosing scope. For example: function show() { return x => x + arguments[0]; } let display = show(10, 20); let result = display(5); console.log(result); // 15 Code language: JavaScript (javascript) The arrow function inside the showMe() function references the arguments object. However, this arguments object belongs to the show() function, not the arrow function. JavaScript arrow functions and the prototype When you define a function using a function keyword, the function has a property called prototype: function dump( message ) { console.log(message); } console.log(dump.hasOwnProperty('prototype')); // true Code language: JavaScript (javascript) However, arrow functions don’t have the prototype property: let dump = message => console.log(message); console.log(dump.hasOwnProperty('prototype')); // false Code language: JavaScript (javascript)It is a good practice to use arrow functions for callbacks and closures because the syntax of arrow functions are cleaner.In this tutorial, you have learned about the JavaScript arrow function syntax and how to apply arrow functions to make the code cleaner.
            `,
        the_title: "JavaScript: Arrow Functions",
    },
    {
        the_body: `Putting together a technology stack for a project is a task in itself. Choosing the right languages, tools and platforms can determine a lot of aspects of the future app functioning – from the straightforwardness of development to the performance and efficiency. Thus, it is critical to make the right choice in the beginning.

If you have a web application project in mind, you are, most probably, evaluating the pros and cons of building your stack around JavaScript and the tools using it. Sooner or later, you will think of the backend development platform, and surely come across Node.js.
First, why did you ever think of Node.js? Most likely, because your development team said so. And why would your team recommend Node.js? Most likely, because they see the advantages of “JavaScript everywhere”. Yes, this is the most revolutionary thing about Node.js – it is the first-ever environment supporting JavaScript both client-side and server-side.

What does it mean from the practical point of view? The possibility to use JavaScript for writing both the frontend and the backend lies at the core of multiple Node.js advantages:

Easy learning curve. Knowing JavaScript gives a developer a good start with Node.js. Of course, you need to know the backend development principles, however, the knowledge of the programming language will simplify things a lot.
Large community. Node.js, being an open-source project, encourages support and contribution aimed at the improvement and adoption of the platform. This is the mission of its Foundation intended for continuous development and enhancement of Node.js. Therefore, you can be sure that, on one hand, Node.js is always getting better and, on the other hand, there is already a lot of reusable resources.
Robustness. Using Node.js allows organizing full-stack JavaScript development ensuring the speed and performance of the application.
Scalability. This is a true jewel of the Node.js development environment, as it allows building applications that can easily grow with your business. Node.js works great in systems using the microservices architecture or containerization where the scalability and flexibility can be achieved quickly and easily.
Great ecosystem. Browse npm (Node.js package manager) for 650,000 free code packages that you can reuse with Node.js.
These are just a few of the advantages of Node.js as a development environment. You can read more about the strong sides of Node.js in our blog.
Besides, the popularity of Node.js has prompted the creation of a whole line of Node.js frameworks intended to simplify web development using this environment.

At the same time, while we have mentioned the great things that Node.js brings to web development, for fairness sake, we should also touch upon the Node.js disadvantages, as nothing is perfect.

Single-threaded processes. By its nature, Node.js can process only one command at a time. However, the blocking of other processes is avoided by the implementation of the asynchronous mechanism allowing to perform several simple tasks simultaneously. However, a complex calculation requiring a lot of processing resources may block the flow and cause delays.
Poor quality of open-source tools. Yes, we mentioned npm as the advantage of Node.js, however, it has its flip side, too. While the number of modules and packages available in the registry is great and there is definitely a lot to choose from, some packages can be either low-quality or poorly documented. This has nothing to do with the quality of the core Node.js code, while the contributed tools can sometimes be substandard.
Since we have outlined the advantages and disadvantages of Node.js, let’s see how they translate into the practical aspects. We will try to determine when to use Node.js and what is Node.js used for in web development in order to achieve the best application performance.

Real-time applications. As we have found that Node.js can ensure great speed and performance, one of the textbook Node.js use cases is real-time messaging, or chatting. The environment can support intense traffic of multiple short messages, or chatrooms when messages are displayed to many users at the same time.
Collaborative tools. This Node.js use case example is also related to its ability to process real-time flows. You should have heard of Trello, a project management application that is rather popular with software development companies. Well, Trello was developed on the basis of Node.js and benefited from its event-driven, non-blocking model. Node.js is great for applications requiring immediate updates, such as various collaboration tools and online documentation suites.
Data streaming applications. The term “streaming” means exactly that – sending large amounts of data in smaller packages instead of a single batch. This ability is especially critical for audio or video streaming applications. Node.js is perfectly suited for this task with built-in modules supporting data streaming and allowing to create both readable and writable data streams. If we add that Netflix, a global media service provider, uses Node.js, you may get the idea of how powerful this environment is.
Applications relying on scalability. The superb scalability supported by Node.js answers the “why Node.js” question for apps required to withstand high peak loads. This is the reason why Uber chose Node.js to develop its app. The global taxi network is always growing and expanding its presence; at the same time, the nature of the taxi business causes high demand peaks during holidays. Node.js handles these challenges quite well.
Visit our blog for the detailed research on the companies that have chosen Node.js as the platform to develop their applications.
While there are quite a number of use cases that Node.js fits perfectly, there are situations when you should look for other platforms, as Node.js will not provide the best performance.Applications with heavy computing server-side. Since Node.js uses only one CPU core, heavy computations on the server will block all other requests. In this case, the event-driven non-blocking I/O model which is the strongest side of Node.js will become useless, and the application performance will suffer.
CRUD applications. In this case, using Node.js does not automatically mean poor performance. However, if you are building a simple CRUD app with data coming directly from the server and no API is needed, Node.js may be excessive, as its powerful features will be simply wasted.
Server-side web applications with relational databases. The reason for Node.js poor performance in this case is that its relational database tools are not as advanced as those created for other platforms. However, the recent news suggests that the latest version of Sequelize ORM may fill this gap and create the possibilities of using Node.js with relational databases.
Other considerations to remember when choosing Node.js
As you see, there are quite a lot of cases where the use of Node.js is going to add to your application performance and reliability. At the same time, when musing about why we use Node.js in web development, we should also mention other aspects that belong to the organizational rather than technical matters.

Of course, when selecting the technology stack for your project you should also think of engaging experienced professionals who know the tools and platforms that you choose and can use them to the maximum benefit of your app. If you already have a Node.js pro on board, you are all set. However, if the technology is right for your idea but you still need to find the people to work with it, we have some good news for you.

The Stack Overflow developer survey of 2018 showed that almost half of the respondents named Node.js the framework they use in their work.For startups, this means that there are quite a lot of Node.js professionals on the market, and it is not going to be a problem to find one for your team.

Besides, there is also another point that you should factor in while selecting the technologies and looking for developers to invite to your team – the rates of Node.js pros. There are several hiring models that you can use to put together your team.If you want to hire Node.js developers full-time, take into account that the average salary of such a professional is going to be about $95,000 in the US. At the same time, you can choose to engage freelance Node.js developers, thus saving the costs of their vacations, sick leaves, office administration, and employee benefits. In this case, a US-based Node.js freelancer will charge about $81-100 on the average. However, a more cost-effective solution may be outsourcing your development to Eastern Europe which has proved to provide the same high quality at somewhat lower rates. If we are talking about Node.js professionals, in Eastern Europe their average hourly rates are $61-80.

Summing up
As you see, Node.js is a powerful development framework showing excellent performance in many cases. The list of Node.js application examples is quite long, and your project may very well benefit from using this technology.

Moreover, the vast Node.js community is constantly working on making the platform better, and it may happen that even the cases where Node.js is not the best choice will become a thing of the past. If you want to follow the latest news from the JavaScript universe and, particularly, about the evolution of Node.js and other useful tools, subscribe to our blog.

If you are planning a web application project and thinking to hire a Node.js developer or hiring devOps engineer, contact us for a professional analysis and consultation. We will suggest the technology that will showcase your idea and ensure the most optimal performance.`,
        the_title: `When to use Node.js`,
    },
    {
        the_body: `In this article, I will arrange all the previous articles and videos in a way that can help people understand Micro-Frontends, gradually, and implement Hands-On projects to understand more about the concept:
Here is the YouTube Playlist: https://youtu.be/AZDDIgJSKU0
1 — Micro-Frontends’ Basics: What, Why, and How
This article can be a very good place to start. I explained what is Micro-Frontends, why we need to use them, and different ways to implement them in practice.2 — First NodeJs Micro-Frontends Hands-on Project
This article is the first hands-on project to help see things in action. Explanation of most of the items will follow in other articles. In this article, I created 2 micro-frontends components that exposed simple items and a container that renders them. To make it simple I just used NodeJs and JavaScript to explain the main concept. It is written in a way to help very new web developers to build and try the concepts, easily.3 — React Micro-Frontends
In this article, I started using React and adding babel-loader to the Webpack configuration files, which I explained in the articles that followed.4 — Explaining all Webpack configurations in the previous articles
In the following videos and articles, I explained in detail each line in the Webpack configurations.5 — Deploying to AWS S3
One of the biggest challenges with Micro-Frontends is deploying to production. There is not much articles or tutorials that will go that far. I wanted to give the end to end experience with zero costs if you used AWS free tier and S3 as a web server. The final product is actually online at http://mfe1.s3-website-us-east-1.amazonaws.com/
1 — Install and Configure AWS CLI
This will be needed to use AWS CLI to copy content to AWS S3`,
        the_title: `Micro-Frontends From Beginner to Expert`,
    },
    {
        the_body: `In my last article, I chose to dive in to the “Divide and Conquer” algorithmic paradigm, and what I found was quite interesting!
For one, I realized the importance of being able to sort arrays in programming. It is a common task you will find yourself attempting to complete. As I explained in my last article, there are built in functions for sorting in many programming languages, such as sort() in JavaScript, but as programmers we don’t always want to choose the easy way, we want to know how it’s done!
Another thing I realized when learning about Divide and Conquer algorithms is how incredibly genius the idea of it is! Let’s go over the steps of a Divide and Conquer algorithm once again.
Divide and Conquer
Divide and Conquer is a programming paradigm that Merge Sort and Quicksort algorithms use. It is an algorithm based on recursion, and it is broken down into 3 main steps:
Divide the problem into subproblems that are simply smaller instances of the original problem.
Conquer the subproblems by solving them recursively. If the problem is small enough, then that is the base problem.
Combine the solutions to the subproblems to the solution for the original problem
Here’s what it looks like:Pretty cool stuff! I applaud the mathematician that came up with this algorithm!
Now let’s take a deeper look at QuickSort and what it’s all about.
QuickSort
QuickSort is similar to Merge Sort, but there are a few differences. Merge Sort is broken down into 3 steps:
Divide
Conquer
Combine
The majority of the work in a Merge Sort is done in the Combine step. In a QuickSort, the work is done in the Divide step, and basically no work is done in the Combine step!
The QuickSort algorithm does the same thing as Merge Sort: Divide, Conquer, and Combine, but in my personal opinion, QuickSort is a little more confusing than Merge Sort, so I’m going to break down what happens in each step:
Select an element inside of the array, the element you select should be either the first or last element in the array. This element is commonly referred to as the pivot.
Rearrange the elements of the array so that all of the elements smaller than the pivot are to the left and all the elements greater than the pivot are to the right. This step is called partitioning. It is important to note that if an element is equal to the pivot it doesn’t matter which side of the array it is on.
Repeat steps 2 and 3 individually for the left and right sides of the pivot until the array is sorted.
Heres a visual:Now that we’ve got a decent understanding of what the QuickSort algorithm is all about, let’s take a look at how we can implement this using JavaScript!
Partition()
First off, we’re going to create a partition() function to take care of our partitioning step in the algorithm:In the function above, we are taking the last element as the pivot. We are using a variable pivotIndex to keep track of the “middle” position where all the elements to the left are less and all the elements to the right are more than the pivotIndex.
In the last step, we swap the pivot (which in our case is the last element) with the pivotIndex. In the end, our pivot element ends up in the “middle”, with elements less than the pivotIndex to the left and elements more than the pivotIndex to the right.
QuickSort()
Now that we’ve got our partition() function, we now have to apply it to our recursive algorithm so that we repeat the process until the array is sorted. Here I will write a quickSort() function to accomplish this task:Here, we start by partitioning the array. After that we continue to partition both the left and right subarrays. We repeat the process as long as the method doesn’t receive and empty array or an array that only has one element. This is because an array that is empty or an array that only has one element is considered sorted.
Now let’s test it out!After writing this out you should have a sorted array in your console that looks like this:Amazing!
Thanks for taking the time to read this article, and hopefully you learned something about the QuickSort algorithm and the Divide and Conquer paradigm. I will continue my programming journey by learning new paradigms and algorithms, and I hope you do too! Happy coding!`,
        the_title: `Divide and Conquer Algorithms — QuickSort`,
    },
    {
        the_body: `Ahhh, scope and closures: 2 favorite tech interview questions that trip up devs of all ages!
Let’s talk scope. What is it?
Scope is access. That’s the easiest way to think about it. It allows you, as a developer, to limit access to certain variables to specific contexts. It has two benefits:
security — variables that are not accessible from outside the specified scope won’t accidentally get changed later on
naming — allows you to use the same variable name in different scopes (you know this is helpful if you’ve used let i = 0 in separate for loops in the same function 🙋‍♀️)
Scope is often discussed in the context of functions, but I found it helpful to first think about it in the context of a nested object (functions are JS objects anyway…)
Here’s an example of an object with several layers:Here we have the wildly under-appreciated Baked Alaska, and it has several layers. If I wanted to know what ice cream is under the meringue, I couldn’t just write bakedAlaska.iceCream — I would get undefined. I would have to write bakedAlaska.innerLayer.iceCream to get to the array of ice creams. That’s because curly braces make their own scope. So the iceCream array is not defined in the direct scope of bakedAlaska. It’s defined inside the scope of innerLayer.
Types of Scope
Global Scope — this is outside of any functions or curly braces. If a variable is defined in the global scope, it can then be used anywhere in your code (including functions, objects, etc.) It’s not encouraged to declare variables in the global scope because of the reasons listed above.
Local Scope — when variables are only accessible within a specific context (like a function, or in curly braces)
Function Scope — a type of local scope. Variables declared inside of a function cannot be accessed outside of that function.
function sayMyName(){
   let myName = "Julia"
   console.log(myName) // "Julia"
}
console.log(myName) // undefined
Block Scope — a type of local scope, and a subset of function scope. Variables declared inside of curly braces are not accessible outside of those braces (just like in the function above.)
You promised to talk about closure…
So I did. Here’s MDN’s definition, and then we’ll unpack it:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
“In other words, a closure gives you access to an outer function’s scope from an inner function.” Let’s see this in action using a similar example to the one above:
As you can hopefully see, even though the outer function was invoked on line 14 and has essentially “come and gone,” the inner greet function still has access to the variable myName whenever it is later invoked. Let’s put this to work on a less contrived example.
Solving the “Calculating With Functions” problem using closure
I came across this question only a month or two into my journey as a programmer. My brain melted while trying to come up with a solution, and the question sat marinating in the back of my head for months. Recently, after re-visiting the subject of closure, I realized that was the piece I was missing.
The instructions are to create functions that when called in the example way below, will return the correct answer.
e.g. seven(plus(five())); // must return 12
four(times(nine())); // must return 36
Here are some additional stipulations:
There must be a function for each number from 0 (“zero”) to 9 (“nine”)
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
My first thought was that I’d have to work from inside out, since each function would have to wait for its received function to resolve before completing execution. (See my post on call stacks if that doesn’t make sense!)
With that in mind, I started by thinking about the number functions. My thought was that the number function could either be on the outside, taking in an operator function as an argument like this: seven(some operator function here), OR it could be on the inside, receiving nothing, but returning a number: the five() of seven(times(five())). So that’s exactly what I did:Each number function must be able to accept a function as an argument, since an operator function might be called inside, like in the example: seven(plus(five())). If you’re familiar with ternary expressions, you could also write the function out like this:
function seven(fn) {return fn ? fn(7) : 7}
I used similar logic for the operations functions. They would need to be able to accept just one number function as an argument plus(five()). The part where I was getting stumped previously was how those operations functions would get access to both the outer number and the inner number.
Here’s where the beauty of closures comes in.
I’m going to repeat the logic that’s written in the comments of the snippet above.
The first thing we do is accept an argument (x). In this example, that’s the return value of five(), i.e. 5.
Then we define an inner function that utilizes the value of x inside of it and accepts an argument of a number. Because the inner function has access to the outer function’s scope at the time of its definition, it will be able to use the value of x even after the outer function is long gone. Closure coming in clutch.
Then the outer function returns a reference to the inner function.
So now that we have all the pieces to the seven(plus(five())) expression, let’s walk through each step, replacing each function with the return values as they get resolved.
seven(plus(five())) gets called.
The innermost function, five()gets evaluated first. Based on our conditional statement from before, we see that this will just return the number 5.
Now we move out to plus(5). Based on our code snippet, we see that x is assigned the value of 5 that our inner function add will have access to, and return a reference to the add function.
Then we move out to seven(add). Based on the same function as before, we see that this time a function was, indeed passed in. Therefore, the return value is the function add invoked, with the number 7 passed in.
Finally, add executes using the remembered value of 5 from its outer scope, and the passed in value of 7, for a return value of 12. 🤯
One of my instructors mentioned that a good way to picture closure was to imagine that your inner function has access to some variables “inside a backpack,” which I thought was a really charming and helpful way to think about it. So we’ll close out with this (hopefully memorable) meme.`,
        the_title: `Scope and Closure in Javascript`,
    },
    {
        the_body: `Web scraping is a technique of using scripts to crawl web pages for you and return invaluable data. It’s a powerful way of obtaining large amounts of information that can be further processed to extract insights.
Before the web scraping era, people had to manually find and go through websites to copy-paste the information. It was hectic, time-consuming, and downright annoying.
Since we’re still in the Javascript world, countless different packages claim to be the ultimate web scraping solution. Because the options on the market are so diverse, I created a list of 7 tools that are worth discovering.
In the following article, you’ll find out which are the steps you have to go through to be able to explore each tool. Then, we’ll go over the 7 essential tools for web scraping in Node.js and their details. Along the way, you’ll get recommendations and suggestions on making the smart choice.
Let’s start!
Essential steps to follow to use one of the 7 web scraping tools
Best tool options for web scraping in Node.Js
∘ Axios
∘ JSDom
∘ Cheerio
∘ Puppeteer
∘ Playwright
∘ Nightmare
∘ X-RAY
∘ Osmosis
Suggestions and recommendations
Essential steps to follow to use one of the 7 web scraping tools
Step 1: Node.js and NPM installation
First, we will need a server-side language since we request and parse HTML programmatically. We will use Node.js for this.
Node.js is an open-source Javascript runtime engine that lets developers write command-line tools in JS. It is also used for server-side scripting, like producing dynamic web page content before the page is sent to the user’s web browser.
To use any of the 7 tools, make sure you have up-to-date versions of Node.js (at least 12.0.0) and npm (Node Package Manager) installed on your machine. If you already have it, you can still check the steps to see if you installed it correctly.
Navigate to the Node.js website and download the latest version (14.15.5 at the moment of writing this article). The installer also includes the npm package manager.
2. Once the download has finished, open your Downloads folder or browse the location where you saved the file and launch the installer.
3. After installing, you can check for the Node.js version by opening a terminal and typing the following command:
node -v
You can do the same for NPM:
npm -v
Once you have those installed, we can move to the next steps.
Step 2: Explore the target
We’ll explore the target website and find selectors that would allow us to extract items and find out how to scrape data.
First of all, let’s look at the example.com website to analyze the target. The website looks like this:As you can see, this is a straightforward website, and it does, however, contain a title, a description, and a link. We want to extract the items using the tools presented below and scrape the website.
Step 3: Decode the URLs
URL stands for Universal Resource Locator or Uniform Resource Locator and represents the web address that you use to navigate to a particular website on the internet. The URL can be more than just an address. It can also contain some parameters, passed to the database behind the website, that control the results returned.
While you navigate the website, you need to pay close attention to the site’s URLs as it changes. This is how you can learn more about the parameters passed to the database.
There are multiple ways to decode an URL like browser extensions, websites or simply using the JavaScript decodeURI() and encodeURI() methods as shown in the example below:
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}
If you know the parameters that the web servers are looking for, you don’t need to use the web page to submit requests to the web server. You can generate a URL and directly submit it to the server using the address bar of your browser or a script.
Step 4: Inspect using developer tools
Every website is different, and before writing code to parse the content you want, you need to take a look at the HTML of that page rendered by the browser.
Right-clicking the element you are interested in, you can inspect it using Developer Tools.Once you do that, you can see the HTML and CSS that stands behind that particular element. Hovering your mouse over the HTML of a specific element will highlight it. You can identify the corresponding visual element for that code, as you can see below.You will often need to filter the content. You can do this by using CSS selectors, or if you want to be more precise, you can write functions that filter through the content of elements. Regular expressions (Regex) are also handy in many situations.
Getting the right data out of the website requires a bit of creativity combined with some pattern recognition.
Best tool options for web scraping in Node.Js
Axios
Axios is a robust promise-based HTTP client for both the browser and NodeJS. It is a well-known package that is used in tons of projects. You can make HTTP requests from Node.js using promises. Moreover, you can download data from the internet fast and easily.
By using Axios we remove the need to pass the results of the HTTP request to the .json() method. Axios already does that for you and simply returns the data object in JSON format. Furthermore, any kind of error with an HTTP request will successfully trigger the .catch() block right out of the box.
We need to request the HTML of the page and Axios will help us out with that. To install it, in the root of your project folder, open the terminal and run the following command and you’re all set!
npm install axios
JSDom
JSDom, used with Node.js, is a pure-JavaScript implementation of several web standards. It’s super handy for web scraping and application testing.
const axios = require('axios');
const jsdom = require('jsdom');
const {JSDOM} = jsdom;

(async () => {
 const html = await axios.get('https://www.example.com');
 const dom = new JSDOM(html.data);

 const title = dom.window.document.querySelector('h1');

 if (title) {
   console.log(title.textContent)
 }
})();
JSDom is the closest thing to a headless browser, meaning that it gives a very accurate representation of what’s actually on the page while remaining lean and quick.
Its most powerful ability is that it can execute scripts inside the JSDom, meaning that these scripts can modify that page’s content.
const dom = new JSDOM('< body >
            <script>document.body.appendChild(document.createElement("hr"));</script>
</body >');
Other desirable features include setting timers, inject user actions, access logs from the console, and many more. It can perform the same operations as PhantomJS (a headless browser) in half the time.
Unfortunately, the JSDom does not have WebSockets support, so you can’t return content loaded through WebSockets.
Cheerio
Cheerio is similar to JSDom, but it was designed to be more lightweight. It is like a server-side version of jQuery, providing an API that many developers are familiar with.
const axios = require('axios');
const cheerio = require('axios');

(async () => {
   const html = await axios.get('https://www.example.com/');
   const $ = await cheerio.load(html.data);
   let data = []
$("body").each((i,elem) => {
       data.push({
           title: $(elem).find("h1").text(),
           paragraph: $(elem).find("p").text(),
           link: $(elem).find("a").attr('href')
       })
   })
   console.log(data)
})();
Parsing, manipulating, and rendering are incredibly efficient with Cheerio because it works with a simple, consistent DOM model. Cheerio can parse nearly any HTML or XML document.
Unlike JSDom, Cheerio doesn’t produce a visual rendering, apply CSS, load external resources, or execute JavaScript.
Puppeteer
Puppeteer provides a high-level API to control Chrome or Chromium. The tool was designed by Google, and it runs headless by default, but it can be configured to run full Chrome or Chromium.
Using Puppeteer, you can do most of the things you can manually with your browser. That includes generating screenshots, PDFs of pages, UI testing, automate form submission, web scraping, etc.
Example — navigating to example.com and saving a screenshot as example.png
const puppeteer = require('puppeteer');

(async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://example.com');
   await page.screenshot({ path: 'example.png' });

   await browser.close();
})();
People using other browser testing frameworks will find Puppeteer very familiar. You create an instance of a browser, open pages, and then manipulate them with Puppeteer’s API.
Playwright
Playwright is a Node.js library built to work with Chromium, Firefox, and Safari (WebKit) with a single API. Its design makes sure to enable cross-browser web automation.
While working with Playwright, you need to declare which browser you are using explicitly. The code below navigates to https://example.com in Firefox and executes a script in the page context.
const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com/');
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  });
  console.log(dimensions);

  await browser.close();
})();
Playwright is very similar to Puppeteer. In fact, it was written by the same team.
Nightmare
Nightmare is a high-level browser automation Node.js library that exposes basic techniques that imitate user behavior, for example — goto, type, click.
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'github nightmare')
  .click('#search_button_homepage')
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
It uses Electron, which is a faster and more modern alternative to PhantomJS.
Initially, Nightmare was created to automate tasks across sites that don’t have APIs. However, it is most often used for testing and web scraping.
X-RAY
X-ray provides a composable API, supporting pagination, concurrency, throttles, delays, pluggable drivers (currently supports HTTP and PhantomJS Driver), and many more, giving you great flexibility.
You can extract data in any way you choose since the schema is not tied to the scraped page’s structure.
Here are some examples:
Scrape a single tag
xray('http://google.com', 'title')(function(err, title) {
  console.log(title) // Google
})
Scrape an attribute
xray('http://techcrunch.com', 'img.logo@src')(fn)
Scrape innerHTML
xray('http://news.ycombinator.com', 'body@html')(fn)
The flow is predictable, following a breadth-first crawl through each of the pages.
Osmosis
Osmosis is a HTML/XML parser written in Node.js, packed with CSS3/Xpath selector and lightweight HTTP wrapper. If you’re familiar with jQuery, Osmosis will feel somehow similar.
Features like loading and searching AJAX content, embedded and remote scripts, redirects, cookies, form submission, single or multiple proxies, basic authentication, and many more are included in the Osmosis library.
const osmosis = require('osmosis');

osmosis
   .get('https://www.example.com/')
   .set({
       title: 'h1',
       description: 'p',
       link: 'a@href'
   })
   .data(item => console.log(item))
Osmosis is lightweight and easy to use. The main advantage is that it has no large dependencies like jQuery, Cheerio, or JSDom.
Suggestions and recommendations
Now that we’ve gone through all seven web scraping tools in Node.Js, let’s get back to the most significant curiosity: what would be the most suitable tool for you?
Let’s be honest. Only you can make that right decision. If you think you’ve got all the information you need so far, let me give you the following advice. If you need something lightweight, easy to use with some basic functionality, you could go for Cheerio, Osmosis, or X-RAY.
If you have something more complex in mind, you could go for JSDom, Puppeteer/Playwright or Nightmare, since they have more features and provide high-level API control. As mentioned above, JSDom is the closest to a headless browser.
It is also essential to know that there are always alternatives for what you are looking for. For example, if you don’t have the time to build a web scraper by yourself, and simply want to make your life easier, a great alternative could be a premade web scraping API. These are tools that carry out the heavy lifting for you and bring you closer to web data.
Let me give you the following example for a better understanding of this alternative — WebScrapingAPI.
WebScrapingAPI is a handy web scraping tool, and as the name suggests, an API that allows you to scrape any online source. You don’t have to download, install, or set it up, and it comes with lots of benefits: it is easy to use, reliable and you can customize it on request.
It uses 100M+ rotating proxies to increase reliability and avoid IP blocks. Thus, you won’t have to deal with CAPTCHAs, proxies, or IP rotations because WebScrapingAPI manages in the backend all the possible blockers. Other desirable features include Java rendering, mass crawling operations, unlimited bandwidth, global geotargeting, customization on request, speed obsessive architecture, and much more.
Moreover, the tool is part of the price category of Freemium products, so you can test it at any time benefiting from 1000 free API calls. If you are curious, you can always find out more here.Final thoughts
I hope the list of tools provided by this article was very helpful. Take advantage of this information for your own projects or business. If you are curious and want to learn more about web scraping, essential tools, and everything in between, here are some articles that I enjoyed reading:
Best 10 Free and Paid Web Scraping Tools
Top 5 Web Scraping APIs: An Ultimate Guide for Developers
Scraping Essential Tools: 10 Best Web Scraping APIs`,
        the_title: `Web Scraping in Node.Js: Top 7 Best Tools`,
    },
    {
        the_body: `I have frequently heard people new to programming express that they have difficulty understanding how to write recursive algorithms. Although they understand what recursion is, they find difficult to understand how to go about creating a recursive solution. In this article, my goal is not to discuss in detail what recursion is — instead, I would like to discuss how to do recursion — that is, how to think through the process of writing a recursive algorithm to solve a problem.
When talking about writing recursive functions, most people focus on the fact that any recursive function needs to have two parts:
A base case, in which the function can return the result immediately
A recursive case, in which the function must call itself to break the current problem down to a simpler level
This pattern can be seen very clearly in one of the most commonly cited
examples of a recursive function, the factorial function, shown here in JavaScript:

function factorial(n) {
  // Base case
  if (n === 0 || n === 1) return 1;
  // Recursive case
  return n * factorial(n — 1);
}
Most of the time, I have heard people teaching recursion focus far too much on the base case, and not enough on the recursive case. People usually don’t have much trouble realizing what the base case should be — the harder part is deciding how the recursive call should be structured in order to accomplish the computation you want. Unfortunately, it is difficult to find useful advice about how we should go about doing this. This is what I would like to talk about here — how we should think when writing a recursive algorithm.
When I sit down to write a recursive algorithm to solve a problem, I have found it to be helpful to go through the following thought process in order to decide how the recursive call should be structured:
Break the problem I am trying to solve down into a problem that is one step simpler
Assume that my function will work to solve the simpler problem — really believe it beyond any doubt
Ask myself: Since I know I can solve the simpler problem, how would I solve the more complex problem?
To illustrate this thought process, let’s look at an example. Suppose that we want to write a recursive function that will return a reversed copy of a given string:

function reverse(string) {
  // Recursive stuff here
}
I won’t be surprised if you’re wondering, “Why do we need a recursive function to reverse a string? Wouldn’t it be easier to write a loop?” I completely agree! However, it’s important for us to look at a straightforward example first, before we tackle any algorithms that really require recursion.
First, let’s get the base case out of the way: If the string is only one character (or, for that matter, if it is empty), then we don’t need to do anything to reverse the string, and we can simply return it:
function reverse(string) {
  // Base case
  if (string.length < 2) return string;
}
Now, for the more challenging part — figuring out how to write the recursive call to accomplish the rest of the task. Let’s go through the thought process that we outlined above:
I am trying to reverse a string. A problem one step simpler would be to reverse a string that is one letter shorter.
I will assume, and believe with every fiber of my being, that my function
can correctly reverse a string that is one letter shorter than the one I am
currently trying to reverse.
I ask myself: Since I know and believe that my function can correctly reverse a string that is one letter shorter than the one I am currently trying to reverse, how can I reverse the whole string? Well, I can take all of the characters except the first one, reverse those (which I know and believe that my function can do), and then tack the first character on to the end! In code, it would look like this:

function reverse(string) {
  // Base case
  if (string.length < 2) return string;
  // Recursive case
  return reverse(string.slice(1, string.length)) + string[0];
}
Think carefully and make sure that you understand steps 1–3 of the thought process above, and how those logical steps resulted in the code shown. If there is anything unclear about it, read it again and think about it some more. Or, leave a question below!
One common mistake that I see people make when trying to develop a recursive algorithm to solve a problem is that they try to think about how to break the problem down all the way to the base case. I would like to emphasize that in order to develop the function above, I did not think about how I could break the problem down all the way to the base case. That is the function’s job, not yours. Instead, I only thought about the problem that is one step simpler than the problem I am really trying to solve, and then I wrote my recursive algorithm to build up from there to solve the real problem.
When learning to work with recursion myself, I found it extremely helpful to try doing simple tasks with recursion that I would normally do with a loop. If you’re interested in practicing the skill of writing recursive algorithms, try applying the thought process above to a few of the following problems — no loops allowed!
Go through an array and print out all of the elements
Determine whether or not a string is a palindrome
Calculate a raised to the power of b
Extra credit: Try implementing the map function (the one that transforms arrays) without using loops
Although the concept of recursion is fairly straightforward to describe (a function that calls itself, how complicated can it be?), it is notoriously challenging to think about how we can use this technique in practice to solve problems. I have enjoyed the process of learning to use recursion in my own programming, and I hope that this article has helped to demystify it a little bit.
Stay tuned for part 2, where we’ll explore some more interesting examples of recursion in practice!
If you enjoyed this article, you might also enjoy learning about:
Dependency injection
Expressive code
Hacking your personal finances`,
        the_title: `Everything You Need To Know About Recursion`,
    },
    {
        the_body: `JavaScript tuning tools help to reduce the amount of time required to find leaks, tweak performance and monitor Java Virtual Machines. Developers who want to decrease their time troubleshooting can benefit from the advanced heuristics and simple graphical interfaces that display essential data. Tools greatly help to reduce the amount of time manually searching through code to find extra characters and inefficient coding.

1) Firebug

Firebug has several functions as well as JavaScript tuning and helps to completely optimize a website. Using a simple command line, you can visit a website and enter JavaScript into the command line. Run the command and it will run as if the script was part of the page. Firebug comes with inspection tools, auto-complete to make your job easier and a command line history.

2) Script#

Script# allows users to write in C# and increase productivity in JavaScript development. It works as an authoring tool that allows users to work successfully with the “.Net” framework. Script# makes it possible to program against JavaScript APIs. Scipts that are created with Script# are Javascript files that can be deployed into your applications.

3) Venkman JavaScript Debugger

Mozilla created this debugger that offers a full set of features for the JavaScript debugging environment. One of the major features involves code profiling that allows the user to inspect a script’s performance.

4) JSLint

JSLint provides users with the capability to check Javascript code for errors. There are several custom features that make it possible to use several different verification methods and authentication.

5) AttackAPI

AttackAPI makes it possible to run tests for potential security vulnerabilities, including JavaScript exploits. Creating secure code is greatly simplified with this effective tool.

6) Yslow

Yslow, released by Yahoo! provides a grade to websites based on several factors. Ultimately, the application determines how fast a page loads and what applications are causing the site to load slowly. The application provides tools to help troubleshoot and determine if a JavaScript should be placed as an external page or combined to make it more efficient. The tool also determines what information in the code can be removed for greater performance.

7) PerfAnal

PerfAnal helps to isolate sections of the JavaScript code that need tuning to increase application performance. The tool provides a graphical user interface (GUI) to make it easy to view and modify code.

8) JsPerf

JsPerf makes it easier to test various configurations of a JavaScript code snippets to find the best code for your purposes. These test cases can be created and shared to make it easier to find already completed tests and improve benchmarks. For users who don’t wish to add tests to the collection, the tool still works well solely for benchmarks.

9) JavaScript Editor

JavaScript Editor does it all. It checks syntax, debugs, edits and organizes all of your JavaScript code snippets. The application makes it possible to greatly improve a website users experience through various features that verify email, hide email from spammers, validate forms and other essential website functions.

10) Google PageSpeed

Google PageSpeed provides two options for using the application. Either access an online browser and enter in the website in question, or download a browser extension. PageSpeed helps website owners decide if there are errors in the code and the best placement for Java snippets.`,
        the_title: `Top 10 Javascript Productivity tools`,
    },
    {
        the_body: `Have you ever heard that your code is not readable or is not clear for others, and you could not guess why? If yes, so this article for you.One of the problems you will face while writing code in any programming language is writing readable code. That means you should write the code which you can understand in the future a year from now. Also, the code should be legible and understandable by other team members.
So What We Mean by a Clean Code :
When we write a clean code, we should take care of our indentation, commas, variables name, functions name, comments, and the whole look of our code. There is no unique rule to follow. Here are the most prevalent standards:
Google JavaScript style guide.
StandardJS.
Idiomatic style manifesto.
You can choose one of them while writing your code. As a team, you can agree on your standards of writing a code. Here we will describe the most general rules for writing a readable code.
Let’s Dig Deeper :
Variable Naming:
The name of the variables should describe what they represent. For example, do not use a variable name like A, B. Use meaningful variables names. Also, variables with multiple parts should follow the camelCase rule. And when we define a constant variable, we capitalize all letters of it.
here is an example of good naming:2. Spaces:
Spaces will affect the look of your code too much. That’s why you should always give them your attention. Here are some useful tips to follow:
2.1 Curly braces:
Curly braces opening bracket should be at the same line as the causing keywords like:if, for, while, etc.
Space should be between parentheses and the opening bracket.
The block code should be in the next line with a tab distance away from the keyword’s start.
Always put the closing bracket on a different line with an alignment to the beginning of the keyword.2.2 When defining a function: no space between the function name and parentheses.Also no space between the parentheses and the parameters. We only need spaces if we have multiple parameters, as shown below:2.3 Through your code, we need to add a space between the variable definition and the next logic. Always when switching between logics, we need a one-line space between them.2.4 In the conditional clause, we put the else word next to the closing bracket of the if condition, and we separate between them by a space:2.5 Spaces also favored between arguments and around operators.
3. Functions
When writing a function name, try to be a descriptive name. to know what the function does by its name. Another point, try to make each function does one job. All logic and variable inside the function should be indented with a tab (2 spaces) away from the beginning of the function, and the closing bracket should have the same indent of the function name.4. Line length
Resources suggested splitting a long horizontal. Usually, the length of the line is between 80 to 120 characters. As a team, you can agree on different considerations.
5. Comments
We use comments to explain how and why a code is working. Good comments will help to maintain the code easily.
Comments can be single-line: starting with // and multiline: /* … */.
In general, the excellent code will have fewer comments or not at all. And you can achieve that by writing a descriptive naming for functions and variables. Also, by splitting your codes into small blocks of code, each one does only one thing.
It is still good to comment :
The unclear piece of code.
If there are different solutions to a specific problem and choose one as the best, you should explain why you made that choice.
You need to comment on function usage. There is a special syntax JSDOC to document the functions.
If you find a solution to a part of your code online it will be helpful to add a URL to it in the comments.
Useful Extensions:
There are lots of extensions that do the above work for you and format your code automatically. I will mention some of them:
Es-lint.
Formatter Hero.
Prettier.
Wrap up. Those are some points to take care of when writing your code. So your code will be easier to read and understand.`,
        the_title: `JavaScript Guideline for Writing Clean Code`,
    },
    {
        the_body: `This article was originally posted on my personal blog.
You can check out part 1 here.
In the previous article, we learned how to create a simple Twitter bot with Node.js that fetches data from the Today In History API and tweets it in our account.
In this article, we will go over how to deploy the bot to a server and run the bot at a specific time in a day.
I have also created a new account for the History Bot rather than use my personal Twitter account. You can check it out in live-action @HistoryBot7
For the full code of this tutorial, you can check out the GitHub repository. If you haven’t checked out part 1 then I suggest you go over it a little.
Deploying The Bot
I will be deploying the bot that we created last time to alwaysdata. It’s free and provides a lot of options that we need like scheduled tasks. However, you’re free to deploy the bot to whatever server you want.
After creating an account if you don’t have one, go to Accounts in the sidebar in the “Customer Area” section. You’ll find a list of accounts if you have any or you can create a new one. These accounts are basically apps in your own main account. If you don’t have any, click on “Add account”You will then need to enter the account name which we will call “history-bot”. alwaysdata will also use this account name for the subdomain you will get for free. Then in the Product dropdown choose Free Public Cloud. Check the checkboxes at the bottom and once you’re done click “Submit”Once you click submit a new account will be created where you can add the bot to. Make sure that the account you created is selected in the sidebar menu in the dropdown field. If not, change to the account you created.Now go to Sites under Web in the sidebar, and you will find a newly created site. Click edit to configure the site.You can change the Name of the site and add any domain names if you own any. Then, go to the Configuration section and change the Type to “Node.js”. In the Command field, enter node ~/history-bot/index.js but make sure to replace history-bot with the name of the app you created. In the working directory enter /home/history-bot/history-bot the reason behind this is that I'm going to clone the history-bot repository into the history-bot app, so feel free to rename them based on what you have. The first one is the name of the app you created and the second one is the name of the repository.Once you are done click Submit. Then in the Sites listing, click on Restart to restart our site with the new configuration.After restarting the site, we need to deploy the bot we created to it. To do this, we will need access to it with SSH. In the sidebar, go to SSH under Remote Access. Then, click on Edit and in the edit screen check the “Enable Password login” checkbox.If you don’t enter a password in the Password field, you will use your alwaysdata account password for SSH. To use a different password, enter it in the Password field.
Once you’re done click Submit.
There are two ways to access your site with SSH. One is through a web interface alwaysdata have that you can see on the main page on the “SSH” sectionWhen you click on it it will ask you for you SSH name and password and if you enter them correctly, you can use the web terminal.
Another way to do this is by accessing from your terminal using ssh command:
ssh user@host
Where user can be found under Name in the table and host can be found in the yellow alert above the table. You will then be prompted to enter your password and when you do, you will be logged in.
Once you’re in, enter the following command to clone your repository:
git clone https://github.com/shahednasser/history-bot.git
If you don’t have a repository for your bot, you should create one.
Then, go to the directory of the cloned repository:
cd history-bot
and run:
npm install
Now, we will need to create a new .env file with our keys, so copy .env.sample:
cp .env.sample .env
and edit the new .env file:
nano .env
You will need to enter the keys you have, so make sure they’re already saved and ready for use.
Once you’re done, save the file.
To make sure that the bot is running correctly, run the following:
node index.js
And if everything is working correctly, a new tweet should be sent to the account the keys belong to:If any error occurs, make sure that the keys entered are correct. For more help, you can check part 1 to make sure everything is configured correctly.
Scheduling Tweets
So, this is great but a bot should run on its own, not be activated manually. So, we will need to schedule for the bot to run every day.
Go back to alwaysdata and click on Scheduled Tasks under “Advanced”. Then click on “Add a scheduled task”In the first section, choose “Execute the command” as a type of task, and in Value type node ~/history-bot/index.jsIn the Environment section, choose the SSH user you are using, and enter the Working directory we entered before.
Then in the Frequency section, choose Everyday and enter the time you want it to run at. Keep in mind that this time is relative to the timezone of the app you created, which by default is in Paris. To figure out what time it is in the app’s timezone, run the following in the SSH terminal:
date "+%H:%M:%S %d/%m/%y"
I suggest for testing it now, set the time a few minutes after when you are going through this tutorial so that you can check that it works
Once you’re done click Submit, and go back to the Sites section under Web and restart your app.
It should be noted that due to the simplicity we used to create the bot, we’re always sending the first event we are receiving from the API. So, if you ran the bot before creating this task and a tweet went out, the scheduled task will run but will receive an error from Twitter that the “Status is a duplicate”. To avoid this, make sure to remove the tweet you put out when testing the bot earlier.
Now, you have to wait until it’s the time you chose for the bot to run at. Once it’s time, give it a few seconds and check your account. If you find a new tweet then the bot is working!
If not, you can check the logs by going to ~/admin/logs/jobs/2021 in your app and check the logs there. Make sure that everything is configured correctly.
Now, everyday at the time you sent, a Today in History tweet will go out to the account you specified!`,
        the_title: `Simple Twitter Bot Tutorial With Node.js Part 2: Deploy to Server and Schedule Tweets`,
    },
    {
        the_body: `As a newcomer to the Javascript world, I didn’t know that you can do such cool things as destructuring. If you still don’t know how to use it and your code gets big, now time to learn this cool feature.
What exactly destructuring? To fully understand this concept, first, we should understand what issues it solves. When you starting working on real-life projects or any project which relies mostly on Javascript you find yourself using a lot of arrays and objects. Well, this is not a problem, but the bigger, deeper, and more complex these objects and arrays get, the harder it gets to access their data. And you find your self unpacking your arrays and objects in order to reduce repentance like this:
const arr = ["A", "B", "C"];
const obj = {name: "John", age: 40};
//...
const letterA = arr[0];
const letterB = arr[1];
const letterC = arr[2];
//...
const name = obj.name;
const age = obj.age;
Good for you, we have a better way of doing this.
Array
You can get the same result by doing this:
const arr = ["A", "B", "C"];
const [letterA, letterB, letterC] = arr;
console.log(letterB); //B
As you can see we are just creating constants but declaring them inside an array, and they get values from array items of the same index. You can name them however you want. Only the order(index) decides which values go to what. Also, you don’t have to declare them as a constant, you can declare them as variables too. But keep in mind that we are just taking the values of the array and assigning them to new variables, which means if you change values in the array those variables won’t be updated to new values. One more thing, you don’t have to unpack all values from the array you can do it like this.
const arr = ["A", "B", "C"];
const [letterA, letterB] = arr;
Object
With objects, it works almost the same:
const obj = {name: "John", age: 40};
const {name, age} = obj;
console.log(name); //John
The same concept here as well. In objects, newly declared constants should be the same name as the object field in order to get the value of them, which means order doesn’t matter here. You don’t have to unpack all fields, here as well.
Nesting
As you have already got by the mini title, we can also use destructuring inside destructured objects and arrays, making it possible to go as deep as we need.
const arr = ["a", ["b1", "b2"], ["c1", ["c21", "c22"]]];
const [a, [b1,b2], [c1, c2]] = arr;
console.log(c2); //["c21", "c22"]
In objects, it is a bit different:In order to go deeper, we have to write the field name that we are going to unpack. But, as you can see, we are not declaring a new constant on the way of going deeper which is nice. See the ‘address’ field which is undefined.
Common usage
Object destructuring is commonly used when passing object arguments to functions. Without destructuring:
const someFunc = (props) => {
doSomething(props.name);
const dummy = Math.floor(props.age);
}
With destructuring:
const someFunc = ({name, age}) => {
doSomething(name);
const dummy = Math.floor(age);
}
Or you can do the same thing with arrays.
Overall knowing how to use object destructuring is very useful to reduce code size and make it more readable. Also based on my knowledge, it comes very handful when you have to work with other’s codebase which most developers use object destructuring and you won’t spend time wondering what the heck did they do.
Well, thank you for reading my article, if it gave you some value I will be so happy. If there is any mistake, would love to hear it from you and correct it asap.`,
        the_title: `Javascript destructuring, or why your code gets big.`,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    },
    {
        the_body: ``,
        the_title: ``,
    }
];



// randomStory(stories_array[0])()










module.exports = {
    getRandomName,
    getStarwarsNames,
    randomNumber,
    randomYear,
    randomMonth,
    randomDay,
    getRandomMaleImg,
    getRandomFemaleImg,
    randomStory,
    stories_array
};
