const faker = require('faker');
// console.log(faker.name.firstName());


const emailAddress = faker.internet.email();
const toggle = true;





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





// https://medium.com/topic/javascript
// go to link above to get url for images
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
    return {
        imgUrl: `${getRandomStoryImg()}`,
        postBody: `${data.the_body}`,
        title: `${data.the_title}`,
        userId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    };
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
        the_body: `In this piece, I am going to be sharing five ways that you can make money as a developer without a job. Now, this is important because I know a lot of developers out there are not able to get a job right now. That doesn’t mean you shouldn’t be able to use your programming ability to make money on the side.

The five methods I am going to address are the same ones I have tried before. You can try these different ways alongside your day job. Sometimes they may end up making you more money than your actual job.

1. Freelancing
Freelancing is such a great opportunity to take whatever skill set that you have and be able to get paid to use those skills. It does not matter what you are good at. If you are good at one specific thing, there is probably someone willing to pay for it.

When I first decided to go the freelancing route, I opened different accounts from different platforms. I thought that the more account I have, the better my chance of getting projects will increase. So, I applied to Upwork, Fiverr, Freelancer, Toptal engineering, PPH, guru, you name it.

I was not successful for a while until I got a client from Upwork from which all my other clients came. I came to notice that it does not matter how good you are to freelance. You do not have to be a pro at the different web development stacks or even at mobile development.

All you have to do is to learn how better market yourself.

If you are beginning and have low rates, you might even get more clients because people want the lower price for what you can do. I am not asking you to sell yourself short.

Do not be afraid to start small. You can build a website for $20k for a company, or you can make a little program for $20. It does not matter what skill you have.

As long as you can market that skill correctly, you will be able to get clients and be able to make money. With online platforms like Upwork, you need to gauge yourself and your prices so that you will be able to land clients.

2. Tutoring
Tutoring is popular for most developers. Some may choose to do this through instructional videos on YouTube or creating courses online for websites like Udemy, Udacity and Skillshare.

If you are a developer who enjoys interacting with people, you may do well in personal or online tutoring. The best part about this is that you can charge different rates depending on the clients.

If you are a teenager in school, you can start offering classes to your classmates. Age is not a limiting factor.

You can also sign up on websites like Coursera and Chegg where you can help people with their homework while also tutoring them.

If you get better at it and have a good enough online presence, it can be a great way of earning a living. You can even change your rates as you grow.

I would highly recommend you at least consider because it is a great one way to use and still improve your programming skills. I tried this before and made some cash then I stopped because I did not have enough time to handle Upwork projects at the same time.

3. Sharing knowledge online
Sharing knowledge is one thing anyone can do in any capacity. It could be through a YouTube video, an article, a tweet, anything.

There are a lot of opportunities out there for such. I have not tried this yet, but I have written a lot of programming articles other the years under a friend who had hired me as one of his writers. You can even decide to create a blogging site and work your way up.

I am not saying that you’re going to make a lot of money by hosting ads on your blog or hosting ads on your YouTube channel because it takes a lot of time to get people to follow you.

It is a slower route to take, but the money accumulates over time. When you share online, there is a high chance of being discovered by a potential client, a recruiter or a prospective student.

4. Start a business
Starting a business is by far the most difficult to do. Tech stories about the likes of Mark Zuckerberg and Sergey Brin have given rise to a lot of startups in silicon valley and also worldwide.

It may sound like a cliché, but you can do the same. I know building a product, or a service that you can sell is not an easy thing to do, but it is worth the time and effort.

Most of the companies in tech started because one person or a small group of people decided to build something that would sell. Look at a lot of the apps you use today. A good number started because someone wanted to create something better and more efficient.

The great thing with programming is that, once you start, you are automatically an entrepreneur. You can build whatever you want and go ahead and sell it.

You can make a simple app on the app store, and make good money from it. Now, is that going to happen? Probably not, but if you have a good idea or you have something that you want to build, go ahead and build it. You already have the time. You have nothing to lose.

5. Provide tech solutions to local businesses
This involves going to some local business, and try to pitch your tech ideas to them. They probably don’t know how to set up a website, or they probably wouldn’t even go out and seek that assistance.

The trick is to identify a problem, pitch a solution, then charge something that makes sense.

Make them see that they will make their money back from the solution that you’re pitching to them, or save money. I have had friends with small businesses. I noticed that most of them did not have websites, so I pitched the idea to them. I can attest to this because most of them are still my clients today.

After all, I maintain their websites for a fee.

These methods are not for everybody. Maybe none of these will work for you, and maybe one or two will work for someone else. I believe that taking that step to find out which works for you is worth it. Building a freelance empire has never been easy. It commands a lot of sweat.`,
        the_title: `5 Ways to Earn Money as a Developer`,
    },
    {
        the_body: `Forms are an essential part of any website or application. You will see them used everywhere from login/signup screens to adding and updating data.
When using React, typically we would want to create a controlled component when dealing with inputs.
For example, we will need to create a state variable and set this as the value of the input. Then we will need to add an onChange event listener to the input. Now, whenever the input is updated, we have a controlled state within our application.import React, { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <form className="App">
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default App;As you can see from above, there is a few extra lines of code needed to pull this off. Imagine if we have a form with multiple inputs? We will need to create a separate state for each input and add the value and onChange listener for each one. Also, every time we change the value of the input, it will cause a rerender of the component.
To make things a lot simpler, welcome the React Hook Form library. It is described as,
“Performant, flexible and extensible forms with easy-to-use validation.”
Sounds good, doesn’t it? In this article, we will take a look at the React Hook Form library. We will start off with learning how to implement it in our app, then take a look at how to handle validation.
Getting Started
To show off this library, we will build a simple form. First off, let’s create a form in our React project like below. It is a simple form with three input fields and a submit button.
const App = () => {
  return (
    <form className="App">
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="submit" />
    </form>
  );
};
I added a few basic stylings too, just to make it look a little nicer. Now if we open up our application it will look something like this.Using React Hook Form
To use the React Hook Form library, let’s first install it into our project. You can find the npm package here.
We will import the useForm hook from the library.
import { useForm } from 'react-hook-form';
Then, call it inside of a function component. This hook will give us three variables when we call it, register handleSubmit and errors.
const { register, handleSubmit, errors } = useForm();
To track the changes to our inputs, we will pass register as a ref to each input that we want to track. Now each input will look like this.
<input
  type="text"
  placeholder="Username"
  name="username"
  ref={register}
/>
Next, let’s take care of the handle submit functionality of the form. We will create a onSubmit function, which will accept data. For now, we will just output it to the console.
const onSubmit = (data) => {
  console.log(data);
};
On the form, add the handleSubmit function as a prop and pass onSubmit as a callback function.
<form className="App" onSubmit={handleSubmit(onSubmit)}>
Now, when we add data to the form and submit it, we will see the output in our console. We now have a nice object with all of our form data.Don’t forget to add a name prop to the inputs. The name we pass to the inputs will be used as the key in our data object.
Adding Validation
To add validation rules to the form, we can pass an optional object as an argument to register.
For example, if we want to make an input required, we can simply add the following to any input.
<input
  type="text"
  placeholder="Username"
  name="username"
  ref={register({ required: true })}
/>
Now, if we try to submit the form without a username, it will not work.
We can display an error message by using the errors value from before. Any errors that occur will become a prop on the errors object and we can use this to display errors.
For example, if a user does not write in a username (which we made required), we can display an error like so.
{errors.username && <p>Username required</p>}The list of supported validation rules are:
required
min
max
minLength
maxLength
pattern
validate
If you were following along with the code, we should now have a form with the validation set up like below.import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        ref={register({ required: true })}
      />
      {errors.username && <p>Username required</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true })}
      />
      {errors.email && <p>Email required</p>}
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({ required: true })}
      />
      {errors.password && <p>Password required</p>}
      <input type="submit" />
    </form>
  );
};

export default App;Wrapping Up
Thanks for reading! I hope this article was helpful for you to get started working with the React Hook Form library.
It is easy to use, good for performance, and requires a lot less code. Give it a shot in your next application where a form is needed.
If you want to check out the full source code for the example we created, check out the GitHub repository here.
To learn about another useful React library, check out the article below where we look at the React Icons library.`,
        the_title: `The Easiest Way to Deal with Forms in React`,
    },
    {
        the_body: `Nowadays, CSS’s topic is more innovative and exciting than ever, even if it has been neglected for some time as the front-end developers have focused more on JavaScript. In the last few years, some CSS techniques and technologies have been developed to develop and design much better websites and apps.
I have put together the highlights of the CSS tutorials available on the web. These CSS tutorials are a treasure trove of important information. On the one hand, you will find information on the most important aspects of the latest CSS programming, such as CSS architecture, animation, and layout. On the other hand, you will learn some of the best websites and expert tips on web design and front end through this selection.
Enjoy learning and improving.
Web design basics
1. Over 50 interesting CSS properties and values
In this CSS Tricks article by Greg Hovanesyan, you will find many interesting CSS properties and their advantages. Also, application examples are used to explain how you can write simpler codes yourself.
2. The CSS Position Property Explained with Examples
This article explains the various values of CSS positioning and how they work. An in-depth tutorial was written by Sarah Chima Atuonwu.
CSS architecture tutorials
3. CSS architecture (for Drupal 8)
This tutorial is published on the Drupal website. The purpose of this tutorial is to apply the best practices for CSS to drupal.
4. CSS Architecture with ReactJS
The idea behind this documentation is to enable you to create better ReactJS projects by structuring and scaling your CSS architecture.
5. CSS Architecture for Modern JavaScript Applications
The purpose of this documentation is to modernize CSS architecture and apply it in the context of modern JavaScript applications.
6. Scalable and Modular Architecture for CSS
This documentation is your flexible guide to developing small or large websites.
7. CSS Architecture Style Guides For Frontend Developers
This documentation will give you different ideas that can help you create a stronger CSS architecture.
8. CSS architecture for design systems
Brad Frost explains how to build a design system with a robust CSS architecture for large organizations.
9. A guide to creating easy-care CSS
Adam Silver’s great comprehensive tutorial explains how you can write modular, scalable, and easy-to-maintain CSS without worrying about previous decisions or existing designs becoming a problem.
10. CSS architecture for UI (User Interface) developers
This tutorial of Matteo Pescarin gives you a perfect overview of different CSS architectures, such as BEM, SMACSS, ITCSS, and Atomic Design.
11. How to Write Loops with Preprocessors
Animations in precompilers such as Sass, Less, and Stylus help you keep CSS clear, clean, and easy to maintain. In this tutorial, Chris Coyier explains the functions and use of animation loops.
Design styles
12. The ultimate guide to asymmetric headers
In this impressive documentation, Erik Kennedy deals with asymmetrical headers such as diagonal headers. He examines different design approaches by comparing them for their simplicity and made a comparison of which one is the best.
13. Optimized link display with the CSS Text
Links are subject to strict design limitations, which can, however, also affect their readability. This short article, Bitdegree shows how to improve the style and usability of links using text-decoration-color.
CSS images
14. A guide for beginners on the subject of the CSS image display
Michael Mangialardi, the founder of Daily CSS Images, wrote a detailed guide on creating pure CSS images.
15. Folded Paper Effect In Pure CSS
Joel Hawkins explains how you can use folded paper effect sections to create flyers posters on a page.
16. Stunning picture effects with the CSS backdrop filter
In this tutorial on SitePoint, Ashna Laxmi explains how to use the CSS backdrop filter introduced in the Filter Effects Level 2 Specifications module. The Laxmi tutorial is mainly about the following topics: syntax, browser support, and practical applications.
17. Image effects with CSS
Bennet Feely has put together a website with images in which various newer CSS properties have been used in image processing (CSS blending and filtering). There are surprisingly many ways to manipulate a single image. This tutorial will teach you how to use these effects right away.
CSS animation
18. CSS animation for beginners
A great introduction to CSS animation from product and front-end designer Rachel Cope.
19. How to create a series of micro-animations
Donovan Hutchinson explores how to create a series of small and simple animations for different situations.
20. Transition effects with CSS masks
The creative front-end programmer Robin Delaporte describes in this experimental tutorial how you can use steps () Timing for CSS masks to create spectacular slide transitions (like in PowerPoint).
21. Do magic with WebSockets and CSS3
In this tutorial, you’ll learn how to connect CSS animations to the web in real-time. Helio Dolores from OutSystems explains an app that he has developed for sales. With this app, customers in the store can see the desired item on a larger screen. This gives customers a better first visual impression.
22. Optimization of CSS animations
This documentation will show you how to run and animations more synchronously with the JavaScript library “Ensure Animation.” This library monitors animation events of selected elements and ensures that animations continue controlled or are specifically stopped.
23. Use CSS to design frames with rounded corners
Useful documentation from Chris Ruppel you can explore to create animation on your border design.
24. Animate different final stages with a set of CSS keyframes
Ana Tudor explains how with just 30 lines of SCSS, you can create, for example, explosions of rainbow particles at random in pure CSS.
25. How to Create CSS Horizontal Scrolling Website
A neat little trick we found on the CSS Tricks page. The author documented how a website can be scrolled horizontally with CSS.
CSS layouts
26. A Complete Guide to the CSS Grid Layout Module
This is a really comprehensive guide to Chris House’s much-discussed CSS Grid Layout module. In this guide, he presents the grid concepts as found in the latest version of the specification.
27. Guide to automatic element placement in the CSS grid
This tutorial explains the auto-placement algorithm steps when placing items on a web page.
28. CSS Grid Layout tutorial
This documentation will teach you everything you need to know about CSS grid layout.
29. A Responsive Comic Panel Layout with CSS Grid
CSS Grid Layout is great for creating online comics, especially when you want them to be flexible. This tutorial shows how you can create responsive online comics.
30. A Complete Guide to Flexbox
In this article by Chris Coyier, you will learn the basics of working well with CSS Flexbox.
31. Interesting CSS writing modes
Jen Simmons’ tutorial gives an excellent introduction to writing modes. It’s not just a very innovative technique for creating pages in Chinese, Japanese, or Korean. This method is also helpful to better understand Flexbox and Grid.
32. Art Direction For The Web Using CSS Shapes
In this article, you will learn how you can use the CSS Shapes module to layout content in the same way as it is for newspapers or magazines. You will also learn how to create a shape and adjust its size, position, and box model.
Responsive design
33. Responsive grids and how to actually use them
This documentation explains how easy it is to create a bespoke grid system. For me, this article is definitely required reading for web developers and web designers.
34. The correct way to do CSS breakpoints
A very well-thought-out text that focuses on the range of different end devices instead of just hard breakpoints. Because there will continue to be new end devices with different resolutions and pixel densities in the future.
35. Element Queries, And How You Can Use Them Today
Do the components used to build websites get better when you add CSS? Can more powerful websites be programmed with less external support and tools? Tommy Hodgins asked himself this question, and his solution is: “Element Queries.” This tutorial explains why.
36. Responsive images in CSS
This document explains how you can create responsive images in CSS with a helpful combination of media queries and background-image.
37. Scaling of responsive animations
In this tutorial, front-end programmer Zach Saucier shows various techniques in which animations you can scale differently.
38. Organizer with CSS and jQuery
Claudia Romano, the co-founder of CodyHouse and Nucleo, presents a simple and responsive template in his tutorial with which events can be displayed on a timeline and divided into groups.
39. Responsive 3D shapes
Another great article from Ana Tudor, a very active member of CodePen. This time she explains different approaches for responsive 3D shapes.
40. How to create responsive tables with pure CSS using Grid Layout Module
Shingo Nakayama shows a quick and easy way to optimize tables with pure CSS using a grid layout. This approach is suitable for tables with relatively simple content.
Email newsletters
41. Create interactive emails with CSS
In this excellent article with an additional screencast, Mark Robbins explains how JavaScript-like functions can create HTML email campaigns because programming email doesn’t have to be boring.
42. CSS hacks for responsive emails
Vitaly Friedman shows in a webinar for Shopify two incredible techniques that can be used to improve HTML emails by making them responsive — without using media queries. If you want to learn more “dirty” CSS tricks to improve design projects, you should watch the video.
43. The ultimate guide to using WebFonts in email
On the Litmus blog, Jaina Mistry wrote an extensive guide on how to use web-fonts in email. It explains the fonts’ use, where you can find them, and which email clients support the web fonts in the emails.
Website performance
44. Here’s why you should inline critical CSS to reduce load time
Nick Melville describes how website performance can be significantly improved by embedding critical CSS.
45. Performance optimization for websites with multiple background images
In this article, Harry Roberts explains how to improve a page’s perceived performance when large images fail to load properly, and users look at a large white hole. It shows a methodology in which the average color of your image is given as background-color.
46. High-performance parallaxing
It can be fun if you know how to use the parallax effect correctly. Because whether you like it or not, the parallax effect will not disappear from the scene for the time being. Paul Lewis discusses excellent solutions for the parallax effect that are high-performance and work across browsers.
47. 10 basic principles for smart web animations
Anand Sharma, the founder of the health app “ Gyroscope, “presents in his tutorial the 10 most important basic principles of how animations can be created with 60fps. This is required reading for anyone looking to improve their animation performance.
48. How to optimize web fonts
This tutorial explains how optimized fonts, combined with a well-thought-out strategy, can help you reduce your website’s overall size and improve rendering times.
CSS tools
49. PostCSS
If you want to get started with PostCSS, this guide by Nicolas J. Engler is for you. It gives you basic knowledge and explains the plug-in extension for PostCSS. You will also find information on how PostCSS can be integrated with other CSS processors, such as task runners and coordinators.
50. From sass to PostCSS in 10 minutes
This article explains how you can easily switch to Sass and shows you a new design in just 10 minutes.
51. How to Remove Unused CSS for Leaner CSS Files
This tutorial shows you how easy it is to create stylesheets with different tools. You can find out how you can install these stylesheets and use them for high-performance designs with and without Grunt.`,
        the_title: `51 CSS Tutorials That Will Help You Improve Your Web Design`,
    },
    {
        the_body: `CSS is a language that is used by nearly every developer at some point. While it's a language that we sometimes take for granted, it is powerful and has many nuances that can help (or hurt) our designs. Here are 30 of the best CSS practices that will keep you writing solid CSS and avoiding some costly mistakes.

1. Make It Readable
The readability of your CSS is incredibly important, though most people overlook why it's important. Great readability of your CSS makes it much easier to maintain in the future, as you'll be able to find elements quicker. Also, you'll never know who might need to look at your code later on.

2. Keep It Consistent
Along the lines of keeping your code readable is making sure that the CSS is consistent. You should start to develop your own "sub-language" of CSS that allows you to quickly name things. There are certain classes that I create in nearly every theme, and I use the same name each time. For example, I use .caption-right to float images which contain a caption to the right.

Think about things like whether or not you'll use underscores or dashes in your IDs and class names, and in what cases you'll use them. When you start creating your own standards for CSS, you'll become much more proficient.3. Start With a Framework
Some design purists scoff at the thought of using a CSS framework with each design, but I believe that if someone else has taken the time to maintain a tool that speeds up production, why reinvent the wheel? I know frameworks shouldn't be used in every instance, but most of the time they can help.

Many designers have their own framework that they have created over time, and that's a great idea too. It helps keep consistency within the projects.

At the same time, I would also like to say that you should use frameworks only if you already know a good deal of CSS. There will almost certainly come a time when you will have to create a certain aspect of some layout all by yourself, and your deep understanding of CSS will help you get things done.4. Use a Reset
Most CSS frameworks have a reset built in, but if you're not going to use one, then at least consider using a reset. Resets essentially eliminate browser inconsistencies such as heights, font sizes, margins, and headings. The reset allows your layout to look consistent in all browsers.

The MeyerWeb is a classic reset. Normalize.css is another very popular reset.

5. Organize the Stylesheet With a Top-Down Structure
It always makes sense to lay your stylesheet out in a way that allows you to quickly find parts of your code. I recommend a top-down format that tackles styles as they appear in the source code. So an example stylesheet might be ordered like this:

Generic classes (body, a, p, h1, etc.)
#header
#nav-menu
#main-content
It also helps if you keep track of different sections of the website in the stylesheet with comments.6. Combine Elements
Elements in a stylesheet sometimes share properties. Instead of rewriting previous code, why not just combine them? For example, your h1, h2, and h3 elements might all share the same font and color:We could add unique characteristics to each of these header styles if we wanted (i.e. h1 {size: 2.1em}) later in the stylesheet.

7. Create Your HTML First
Many designers create their CSS at the same time they create the HTML. It seems logical to create both at the same time, but actually you'll save even more time if you create the entire HTML mockup first. The reasoning behind this method is that you know all the elements of your site layout, but you don't know what CSS you'll need with your design. Creating the HTML layout first allows you to visualize the entire page as a whole, and allows you to think of your CSS in a more holistic, top-down manner.

8. Use Multiple Classes
Sometimes it's beneficial to add multiple classes to an element. Let's say that you have a div "box" that you want to float right, and you've already got a class .right in your CSS that floats everything to the right. You can simply add an extra class in the declaration, like so:You can add as many classes as you'd like (space separated) to any declaration.

This is one of those situations where you have to take individual cases into account. While it is helpful to create class names that provide some hint of how they affect the layout, you should also avoid using class names that require you to constantly switch between HTML and CSS.

Be very careful when using ids and class-names like "left" and "right." I will use them, but only for things such as examples in blog posts. How come? Let's imagine that, down the road, you decide that you'd rather see the box floated to the left. In this case, you'd have to return to your HTML and change the class name—all in order to adjust the presentation of the page. This is unsemantic. Remember: HTML is for markup and content. CSS is for presentation.

If you must return to your HTML to change the presentation (or styling) of the page, you're doing it wrong!

9. Use the Right Doctype
The doctype declaration greatly affects whether or not your markup and CSS will validate. In fact, the entire look and feel of your site can change greatly depending on the doctype that you declare.

Learn more about which doctype to use at A List Apart. You can simply start using <!DOCTYPE html> when creating pages based on HTML5.

10. Use Shorthand
You can shrink your code considerably by using shorthand when crafting your CSS. For elements like padding, margin, font, and some others, you can combine styles in one line. For example, a div might have these styles:11. Comment Your CSS
Just like any other language, it's a great idea to comment your code in sections. To add a comment, simply add /* behind the comment, and */ to close it, like so:12. Understand the Difference Between Block and Inline Elements
Block elements are elements that naturally clear each line after they're declared, spanning the whole width of the available space. Inline elements take only as much space as they need, and don't force a new line after they're used.

Here are the lists of elements that are typically inline:13. Alphabetize Your Properties
While this is more of a frivolous tip, it can come in handy for quick scanning.This is a bit controversial because you have to sacrifice speed for slightly improved readability. However, you should not hesitate in trying it out if you think it will help you.

14. Use CSS Compressors
CSS compressors help shrink CSS file size by removing line breaks, white spaces, and combining elements. This combination can greatly reduce the file size, which speeds up browser loading. CSS Minifier and HTML Compressor are two excellent online tools that can shrink CSS.

It should be noted that shrinking your CSS can provide gains in performance, but you lose some of the readability of your CSS.

15. Make Use of Generic Classes
You'll find that there are certain styles that you're applying over and over. Instead of adding that particular style to each ID, you can create generic classes and add them to the IDs or other CSS classes (using tip #8).

For example, I find myself using float:right and float:left over and over in my designs. So I simply add the classes .left and .right to my stylesheet, and reference it in the elements.This way, you don't have to constantly add float:left to all the elements that need to be floated.

16. Use margin: 0 auto to Center Layouts
Many beginners to CSS can't figure out why you can't simply use float: center to achieve that centered effect on block-level elements. If only it were that easy! Unfortunately, you'll need to use this method to center a div, paragraphs, or other elements in your layout:By declaring that both the left and the right margins of an element must be identical, the browsers have no choice but to center the element within its containing element.

17. Don't Just Wrap a div Around It
When starting out, there's a temptation to wrap a div with an ID or class around an element and create a style for it.Sometimes it might seem easier to just create unique element styles like the above example, but you'll start to clutter your stylesheet. This would have worked just fine:Then you can easily add a style to the h1 instead of a parent div.

18. Use Browser Developer Tools
Modern web browsers come bundled with some vital tools that are must-haves for any web developer. These developer tools are now part of all the major browsers, including Chrome, Firefox, Safari, and Edge. Among the many features that come bundled with the Chrome and Firefox developer tools (like debugging JavaScript, inspecting HTML, and viewing errors), you can also visually inspect, modify, and edit CSS in real time.

19. Hack Less
Avoid using browser-specific hacks if at all possible. There is a tremendous pressure to make sure that designs look consistent across all browsers, but using hacks only makes your designs harder to maintain in the future. Plus, using a reset file (see #4) can eliminate nearly all of the rendering irregularities between browsers.

20. Use Absolute Positioning Sparingly
Absolute positioning is a handy aspect of CSS that allows you to define where exactly an element should be positioned on a page to the exact pixel. However, because of absolute positioning's disregard for other elements on the page, the layouts can get quite hairy if there are multiple absolutely positioned elements running around the layout.

21. Use Text-transform
text-transform is a highly useful CSS property that allows you to "standardize" how text is formatted on your site. For example, say you want to create some headers that only have lowercase letters. Just add the text-transform property to the header style like so:Now all of the letters in the header will be lowercase by default. text-transform allows you to modify your text (first letter capitalized, all letters capitalized, or all lowercase) with a simple property.

22. Don't Use Negative Margins to Hide Your h1
Often, people will use an image for their header text and then either use display:none or a negative margin to float the h1 off the page. Matt Cutts, then head of Google's Webspam team, has officially said that this is a bad idea, as Google might think it's spam.

As Cutts explicitly says, avoid hiding your logo's text with CSS. Just use the alt tag. While many claim that you can still use CSS to hide a h1 tag as long as the h1 is the same as the logo text, I prefer to err on the safe side.

23. Validate Your CSS and XHTML
Validating your CSS and XHTML does more than give a sense of pride: it helps you quickly spot errors in your code. If you're working on a design and for some reason things just aren't looking right, try running the markup and CSS validator and see what errors pop up. Usually you'll find that you forgot to close a div somewhere or missed a semi-colon in a CSS property.

24. Rems and Ems vs. Pixels
There's always been a strong debate as to whether it's better to use pixels (px) or ems and rems when defining font sizes. Pixels are a more static way to define font sizes, and ems are more scalable with different browser sizes and mobile devices. With the advent of many different types of web browsing (laptop, mobile, etc.), ems and rems are increasingly becoming the default for font size measurements as they allow the greatest form of flexibility.

25. Don't Underestimate the List
Lists are a great way to present data in a structured format whos style is easy to modify. Thanks to the display property, you don't have to just use the list as a text attribute. Lists are also great for creating navigation menus and things of the sort.

Many beginners use divs to make each element in the list because they don't understand how to properly use lists. It's well worth the effort to use brush up on learning list elements to structure data in the future.

26. Avoid Extra Selectors
It's easy to unknowingly add extra selectors to our CSS that clutters the stylesheet. One common example of adding extra selectors is with lists.Adding extra selectors won't bring Armageddon or anything of the sort, but they do keep your CSS from being as simple and clean as possible.

27. Add Margins and Padding to All Elements
Modern browsers are fairly uniform in the way they render elements, but legacy browsers tend to render elements differently. For example, Internet Explorer renders certain elements differently than Firefox or Chrome, and different versions of Internet Explorer render differently from one another.

One of the main differences between versions of older browsers is how padding and margins are rendered. If you're not already using a reset, you might want to define the margin and padding for all elements on the page, to be on the safe side. You can do this quickly with a global reset, like so:Now all elements have a padding and margin of 0, unless defined by another style in the stylesheet.

28. Use Multiple Stylesheets
Depending on the complexity of the design and the size of the site, it's sometimes easier to make smaller, multiple stylesheets instead of one giant stylesheet. Aside from being easier for the designer to manage, multiple stylesheets allow you to leave out CSS on certain pages that don't need them.

For example, I might having a polling program that would have a unique set of styles. Instead of including the poll styles to the main stylesheet, I could just create a poll.css and the stylesheet only to the pages that show the poll.

However, be sure to consider the number of HTTP requests that are being made. Many designers prefer to develop with multiple stylesheets, and then combine them into one file. This reduces the number of HTTP requests to one. Also, the entire file will be cached on the user's computer.

29. Check for Closed Elements First When Debugging
If you're noticing that your design looks a tad wonky, there's a good chance it's because you've left off a closing </div>. You can use the XHTML validator to help sniff out all sorts of errors like this.

30. Try to Use Flexbox and Grid Layout Instead of Floats
In the past, it was very common and necessary to use floats to create any kind of layout. Unfortunately, floats come with a lot of problems. You can instead start using the much more powerful layout modules called flexbox and grid layout. Flexbox will help you create one-dimensional layouts, and grid will help you with two-dimensional layouts.`,
        the_title: `30 CSS Best Practices for Beginners`,
    },
    {
        the_body: `JavaScript’s another beautiful part which make us love with language.
When it come to hoisting it make us confused most of the time. This is the one of the favourite question of interviewer. So today we’ll try to understand hoisting in simple layman language.
Let’s start with some JS code to understand the hoisting.
// JS Hoisting
var m = 10;
function miniScript() {
  console.log(“miniScript is exploring JS”);
}
// Let's invoke the functions and variables
miniScript();
console.log(m);
It’s simple JS code in which we’ve declared simple variable and function. Output of this as expectedSo this is all we know but the big question what is hoisting?
To understand this let’s modify the piece of code which we wrote above to this.
//Call the function and variables even before we declaring them.
console.log(m);
miniScript();
function miniScript() {
  console.log(“miniScript is exploring JS”);
}
var m = 10;
what should you think the output of this?
Most of the programming language will throw the error here because we’r trying to run the functions which is not even exist by then.
But this is the beauty of JavaScript which make us to love this more as we exploring this in deep.
This is the output of above piece of code.The output is var m = undefined and we get the correct value for miniScript() function. This is all because of Hoisting. In layman language definition of Hoisting would be —
Hoisting in JavaScript is accessing the variables and functions even before declaring or initialising them without any error.
So the big question how JavaScript engine do this?
Let’s put the debugger on the first line of code and stop the browser to execute the code and deep dive into it.
I am attaching the screen recording of putting debugger into the first line of codeSo as you can see in the Global scope if we scroll down a bit we can found our variables and function.
Variable was undefined which means JavaScript engine assigned a memory to this variable and give it a placeholder undefined.
Now if we console.log our complete function then you’ll see something interested will happen.
// Let's see how our function will look in Global scope before executing.
console.log(miniScript);
function miniScript() {
   console.log("miniScript is exploring JS");
}
JavaScript will assign memory to functions and variables even before start executing the code. This is called Hoisting.
Now let’s see if we use arrow functions and then what will happen in global stack. This will not behave as traditional functions.
// Arrow function behave like variables.
console.log(miniScript);
var miniScript = () => {
   console.log("miniScript is exploring JS");
}
You can see arrow function just behaves like variables as it’s value is undefined. What this means is function assigned memory in execution context and undefined is placeholder for this.
Hoisting is a concept of JavaScript in which JS host all function expression and variables at top of the environment and because of that we can use a variable or function before declaring it.
This all is happening because of Hoisting.
Next time if someone asks you hoisting — Hoisting is assigning the memory to variables and functions even before initialising them.
Let’s deep more dive and see what happen in the case of let and const ?
// Use case for let or Const - I am using const
console.log(m);
const m = 'miniScript';
What do you think the output will be? will they behave same as var or functions?
let’s see ….The answer is bit more complex. You can see we got the error “Uncaught ReferenceError: Cannot access ‘m’ before initialization”. This means we can’t access the variable before initialization but as you can see the Scopes we have another local scope called Script in which our variable ‘m’ and it’s value is undefined. So what does this mean?
This means let and const are not belongs to Global scopes. They create their own local scope on the top of Global scope.
This is called Temporal Dead Zone. If you try to access these variables from dead zone you’ll get reference error. But in terms of Hoisting the const and let have the memory and placeholder Undefined. which means they are also hoisted.
So this is all about JavaScript Hoisting. I tried to keep it simple and try to explain what’s going on under the hood. How JavaScript engine assign memory and hoisted the variables.
If you like this post please give me a Thumbs up 👍 . It will motivate me to write another post in simple layman language.`,
        the_title: `Hoisting in JavaScript.`,
    },
    {
        the_body: `For programmers — especially self-taught programmers — our first introduction to the world of ‘recursion’ is often in the form of something math-related. It’s not uncommon for programmers to intrinsically call upon some of our favourite F words when we think of recursion — no not that F word, these ones:
Fibonacci
function fibonacci(position) {
  if (position < 3) return 1;
  return fibonacci(position - 1) + fibonacci(position - 2);
}
Factorial
function factorial(num) {
  if (num === 1) return num;
  return num * factorial(num - 1);
}
Recursive versions of the fibonacci and factorial functions are some of the more beautiful pieces of code you can expect to see. These concise slices of code rely on little more than themselves to get the job done. They embody the very definition of recursion — a function that calls itself (the calling of itself is the part that is recursive). It’s really no wonder that just like when a tutorial incorporates a new topic by demonstrating how it interacts with something trivial, like a counter or a ‘to do’ list, fibonacci and factorial functions encapsulate the topic of recursion with little to zero interference from the external complexities you might find as soon as you start introducing other bits of code to interact with. Just like the counter and the ‘to do’ list, fibonacci and factorial are trivial.
You may have heard a saying that “all iterative algorithms can be expressed recursively”. In other words, a function that uses a loop can be rewritten to use itself. Now if any iterative algorithm can be written recursively, the same must be true for the inverse.
Note: An iterative algorithm, or function, is one that makes use of a loop to get the job done.
Let’s go back to our recursive Fibonacci function and write it as an iterative Fibonacci function instead:
function fibonacci(index = 1) {
  let sequence = [0, 1, 1];
  if (index < 3) return 1;
  for (let i = 2; i < index; i++) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence[index];
}
Let’s also take our recursive Factorial function and write that as an iterative Factorial function:
function factorial(num) {
  if (num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
Both of our recursive and iterative approaches reach the same conclusion. If you give them the same input, they will produce the same output. Even the path the take is, arguably, the same. The only difference is the metaphorical mode of transportation used on the path to reach said output.
So if we’re able to write recursive functions iteratively, why do we even need to bother learning about recursion in the first place, and what use does it have in programming?
The main reason we use recursion is to simplify an algorithm into terms easily understood by most people. It’s important to note here that the purpose of recursion (or rather, its benefit of recursion) is to make our code easier to read, and easier to reason with. However, it is important to be aware that recursion is not a mechanism we can use to optimize our code for performance — if anything, it can have an adverse effect on performance compared to an equivalent function written iteratively.
If you want a short soundbite to remember, I’d say this: Recursive functions optimise legibility for developers. Iterative functions optimise performance for computers.
The frustrating thing about a lot of articles and tutorials on recursion I’ve read before is that they veer on the side of caution and fixate themselves on only talking about functions such as a recursive fibonacci or factorial. There’s no real advantage a developer can gain from these being written recursively. This is like giving someone the punchline to a joke, without any of the steps leading up to it.
In the case of recursive fibonacci and factorial functions, we saw earlier that if we convert them into iterative functions the code itself isn’t actually that bad. It’s arguably just as easy to read and legible as the recursive equivalents. Sure, it might not have the same level of elegance, but if it’s still readable, I’m going to go ahead and favour optimising for performance.
It therefore seems plausible that a lot of people learning about recursion for the first time may struggle to see any real use from using it. Maybe they just see it as some sort of over-engineering abstraction. So how is recursion useful? Or better yet, how can we make the study of recursion useful?
Useful recursion can be found when we actually try to write code that resembles a real life scenario.
I can probably take a punt and say that close to zero developers anywhere (outside of a whiteboard interview) have been expected to write a recursive fibonacci or factorial function for their job — and if they were, they could have just googled it because there’s a million articles that already explain it.
There aren’t, however, enough articles demonstrating how recursion can be used in real life scenarios. We need fewer ‘Introduction to Recursion’ articles, and more articles about how recursion can help you solve that coding problem you’re currently facing at work.
So now that we’re on the topic, let’s imagine the following scenario: your boss has given you a data structure full of departments that each contain the email addresses of everyone that works in that department. However, each department sometimes is made up varying levels of subdepartments, objects and arrays. Your boss wants you to write a function that can send an email to each of those email addresses.
Here’s the data structure:
const companyEmailAddresses = {
  finance: ["jill@companyx.com", "frank@companyx.com"],
  engineering: {
    qa: ["ahmed@companyx.com", "taylor@companyx.com"],
    development: ["cletus@companyx.com", "bojangles@companyx.com", "bibi@companyx.com"],
  },
  management: {
    directors: ["tanya@companyx.com", "odell@companyx.com", "amin@companyx.com"],
    projectLeaders: [
      "bobby@companyx.com",
      "jack@companyx.com",
      "harry@companyx.com",
      "oscar@companyx.com",
    ],
    hr: ["mo@companyx.com", "jag@companyx.com", "ilaria@companyx.com"],
  },
  sales: {
    business: {
      senior: ["larry@companyx.com", "sally@companyx.com"],
    },
    client: {
      senior: ["jola@companyx.com", "amit@companyx.com"],
      exec: ["asha@companyx.com", "megan@companyx.com"],
    },
  },
};
So, how do you tackle this?
Well, from what we can see, a subdepartment appears to take the form of an object, while arrays have been used to store email addresses. So I could try and write some sort of iterative function that loops through each department, and checks if it is a subdepartment (object) or a list of email addresses (array). If it’s an array, we can then loop through the array and send an email to each email address. If it’s an object, we could create another loop to tackle that subdepartment, using the same ‘check if it’s an object or an array’ tactic we used earlier. From what we can tell, our data structure doesn’t go any deeper than two sub levels. So one more iteration should satisfy all levels and do what we want it to.
Our final code might look something like this:
function sendEmail(emailAddress) {
  console.log('sending email to ${emailAddress}');
}
function gatherEmailAddresses(departments) {
  let departmentKeys = Object.keys(departments);
  for (let i = 0; i < departmentKeys.length; i++) {
    if (Array.isArray(departments[departmentKeys[i]])) {
      departments[departmentKeys[i]].forEach((email) => sendEmail(email));
    } else {
      for (let dept in departments[departmentKeys[i]]) {
        if (Array.isArray(departments[departmentKeys[i]][dept])) {
          departments[departmentKeys[i]][dept].forEach((email) => sendEmail(email));
        } else {
          for (let subDept in departments[departmentKeys[i]][dept])
            if (Array.isArray(departments[departmentKeys[i]][dept][subDept])) {
              departments[departmentKeys[i]][dept][subDept].forEach((email) => sendEmail(email));
            }
        }
      }
    }
  }
}
I’ve checked it out, maybe I’ve even written a little unit test for it. It looks like a mess, but it works. With the amount of nested loops here you could argue that it’s highly inefficient. Someone in the background hollers “Big O? More like Big OMG, am I right?”
Now of course, there are other ways we could have tackled this, but what we have at the moment works. Anyway, it’s just a little function and there’s not too many email addresses in there and we probably won’t use it often, so it doesn’t matter. Let’s get back to working on more important projects before the boss finds another side task for me to work on!
Five minutes later and your boss returns and mentions that they also want the function to still work even if new departments, subdepartments, and email addresses are added to this data structure at a later point. Okay, this changes things because now I need to factor in the possibility of subsubsubdepartments, subsubsubsubdepartments and so on.
Suddenly my iterative function no longer satisfies the criteria.
But lo and behold, a recursive solution enters!
function sendEmail(emailAddress) {
  console.log('sending email to ${emailAddress}');
}
function gatherEmailAddresses(departments) {
  let departmentKeys = Object.keys(departments);
  departmentKeys.forEach((dept) => {
    if (Array.isArray(departments[dept])) {
      return departments[dept].forEach((email) => sendEmail(email));
    }
    return gatherEmailAddresses(departments[dept]);
  });
}
Okay, we finally have a function that makes use of recursion in something more fitting of a real-life scenario. Let’s explain how it all works.
Our function loops through the keys from the companyEmailAddresses data structure, checks if the value of that key is an array, if it is, it sends an email to each value in that array. However, if the value of the aforementioned key is not an array, it'll call itself - gatherEmailAddresses again (it recurses). However, instead of passing in the entire companyEmailAddresses object like it did the first time, it will just pass in the object node for the subdirectory it was initially looping through.
This function provides us with two benefits on our previous iterative counterpart:
It caters to the additional criteria imposed by our boss. As long as it continues to follow the same pattern, the function can still handle any new objects or arrays added to it without the need to change a single line of code;
It is easier to read. We don’t have a bunch of nested loops that our brains have to try and keep track of.
You’ll also notice that our function actually contains iterative and recursive elements. There’s no reason why an algorithm has to be exclusively one or the other. It’s perfectly fine to have something iterative such as a forEach function that contains recursive calls to itself.
Let’s just pick up on my second point for a moment. It’s only easier to read if you understand how recursion works outside of the confines of fibonacci, factorial, and any other clinical coding trials you might find in a ‘How To Crack The Coding Interview’ book/course. So let’s spend some time explaining exactly what is happening inside of our recursive function.
Our function takes one value — an object — as its only parameter. The object we pass in is the entire companyEmailAddresses variable, which is this grotesque monster:
const companyEmailAddresses = {
  finance: ["jill@companyx.com", "frank@companyx.com"],
  engineering: {
    qa: ["ahmed@companyx.com", "taylor@companyx.com"],
    development: ["cletus@companyx.com", "bojangles@companyx.com", "bibi@companyx.com"],
  },
  management: {
    directors: ["tanya@companyx.com", "odell@companyx.com", "amin@companyx.com"],
    projectLeaders: [
      "bobby@companyx.com",
      "jack@companyx.com",
      "harry@companyx.com",
      "oscar@companyx.com",
    ],
    hr: ["mo@companyx.com", "jag@companyx.com", "ilaria@companyx.com"],
  },
  sales: {
    business: {
      senior: ["larry@companyx.com", "sally@companyx.com"],
    },
    client: {
      senior: ["jola@companyx.com", "amit@companyx.com"],
      exec: ["asha@companyx.com", "megan@companyx.com"],
    },
  },
};
The first thing we do is run Object.keys() on it which returns an array with each department. Something that would look like this: ["finance", "engineering", "management", "sales"]. We then proceed to forEach loop through our companyEmailAddresses, using our array of departments as a way to check each department for certain things. In our case, we use it to check if the structure of each node is an array or not, which we do with Array.isArray(departments[dept]. If it returns true, we just proceed to loop through that array, applying out sendEmail() function on each value. Simple enough, and so far we've not used any recursion. Maybe you didn't even need to read this paragraph, but at least this explanation was here if you did need it. Anyway, let's get to the good bit - the recursive bit.
If our Array.isArray(departments[dept] returns false, that means we have an object, which in our case means we have a subdepartment. In our iterative function, we simply repeated the process - ie, we made another loop - but did it for the subdepartment. But instead, for our recursive function we call the gatherEmailAddresses() function again, seemingly passing in the same companyEmailAddresses object as before. The key difference here is that instead of passing the object in from its root (the entire object), we pass it in from the position of the subdirectory - the subdirectory becomes the new root. We know that our companyEmailAddresses object is just made up of lots of objects that either contain another object or an array. Therefore, our function has been written in such a way that if it hits an array, it knows that it is the end of a node (a lead), so it will try and 'send emails'. But if it hits an object, it needs to continue to traverse deeper.
Make sense?
Here are some diagram-ish code blocks I cobbled together to try to help illustrate further.
Our entire object has four departments. The first department is an array. It requires no additional traversal as we have immediately hit the leaf node. This department would return true to Array.isArray().
  finance: [
            "jill@companyx.com",
            "frank@companyx.com"
           ],
The second department is an object. This department would return false to Array.isArray(). It requires additional traversal so we call gatherEmailAddresses() function, passing in department[dept], which is equivalent to companyEmailAddresses["engineering"] or the code you see below.
engineering: {
    qa: [
         "ahmed@companyx.com",
         "taylor@companyx.com"
        ],
    development: [
                  "cletus@companyx.com",
                  "bojangles@companyx.com",
                  "bibi@companyx.com"
                 ],
  },
As we have now recursively called our function again, we do not pass onto the third department yet as our recursive function needs to be handled first — ie, we are still handling the second department. The technical way to explain this is that our recursive call is added to our call stack.
If you recall, the first thing our function does is Object.keys() on the object passed in. This gives us ["qa", "development"]. We then loop through each department (or subdepartment in this case). We check if the "qa" department/subdepartment is an array with Array.isArray(). It is, so would return true, so we can then use the sendEmail() function. The same would also occur with "development", as that is also an array.
  engineering: {
    qa: [
         "ahmed@companyx.com",
         "taylor@companyx.com"
        ],
    development: [
                  "cletus@companyx.com",
                  "bojangles@companyx.com",
                  "bibi@companyx.com"
                 ],
  },
The third department (three subdepartments) has a similar structure to the second department (two subdepartments), while the fourth department has two subdepartments, but those two subdepartments also contain two subdepartments — so our recursive function takes place again inside of each. I’ve skipped showing code block breakdowns for these as you hopefully understand how the recursive part is working.
Conclusion
Okay so now we have seen a practical example of recursion in practice. Hopefully this has provided you with a deeper understanding of recursion, along with another way of being able to approach a problems that require some sort of loop.
However, I’d like to highlight again that performance may suffer if recursion is used when it shouldn’t be. Recursion shouldn’t all of a sudden become your go-to tool instead of iteration, the gains you make in readability may be lost in performance. Ultimately it depends on the scenario presented to you. You will face some problems in programming that may lend themselves well to recursion, while others may lend themselves better to iteration. In some cases, like with the problem we faced earlier, a little bit of both approaches might be best.`,
        the_title: `This is how Recursion should be taught to Software Developers`,
    },
    {
        the_body: `You are starting a new project? You want to use all the latest tech simultaneously to a production level standard. By the end of this article you will have a production ready react app, which uses redux, redux-saga and TypeScript.So what you want to do first is fire up a create-react-app with the typescript template. This will give you a really solid starting point. Though you might want to add better linter, for example one that enforces accessibility.
npx create-react-app my-app --template typescript
Okay now thats completed. CD into the directory.
cd my-app
Let’s install our dependencies
yarn add react-redux redux redux-saga reselect axios styled-components react-grid-system @fortawesome/react-fontawesom @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
*you can of course use another styling method and icon library. But for this example I’ll be using the above.
And then our dev dependencies.
yarn add redux-devtools-extension @types/react-redux @types/redux @types/redux-saga @types/reselect @types/axios @types/styled-components" --dev
So if you were to run a yarn start now the frontend will render in the browser. However we will need to add some magic here and there to connect all these technologies together.
Firstly, we want to create store.ts file in the ./src/ directory.
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";

import { AppState, rootReducer } from "modules";
import rootSaga from "sagas";

export default function store(initialState: AppState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
}

I’m using absolute paths imports see line 5 and 6. Add this to your tsconfig.ts to introduce absolute path imports.
"baseUrl": "./src",
But basically in this new store script we are connecting our reducer and saga middleware.
Essentially redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions, it has access to the full redux application state and it can dispatch redux actions as well.
So we have to stack all these technologies in our store.ts script and call the createStore function.
The function takes the following arguments createStore(reducer, [preloadedState], [enhancer]) Read more here.
So now we have a basic store in our app, Woo hoo! If you run the app now and have the Redux DevTools chrome extension installed, you should a simple, yet functioning store.
Okay lets have a look at the first argument of the createStore() function, our reducer.import { combineReducers } from "redux";
import { weatherReducer, WeatherState } from "modules/weather/weatherReducer";

export interface AppState {
  weather: WeatherState;
}

export const rootReducer = combineReducers({
  weather: weatherReducer,
});So pretty simple stuff. We have our combineReducers(reducers) combining all our reducers into one readable object for the createStore() function.
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore. Read more here.
We also see our AppState type which we import into our store.ts file. Essentially we are creating a typed contract for our reducer using the typescript Interface feature.
Okay now lets check out the weatherReducer :)import { WeatherActions } from "./weatherActions";
import { Forecast } from "./weatherTypes";

export interface WeatherState {
  forecast: Forecast | {};
  loading: {
    forecast: boolean;
  };
}

export const initialStateWeather: WeatherState = {
  forecast: {},
  loading: {
    forecast: false,
  },
};

export function weatherReducer(
  state = initialStateWeather,
  action: WeatherActions
) {
  switch (action.type) {
    case "WEATHER/GET_FORECAST_REQUEST": {
      return {
        ...state,
        loading: {
          forecast: true,
        },
      };
    }

    case "WEATHER/GET_FORECAST_SUCCESS": {
      const newState = {
        ...state,
        forecast: {
          ...action.forecast,
        },
        loading: {
          forecast: false,
        },
      };
      return newState;
    }

    case "WEATHER/GET_FORECAST_FAIL": {
      return {
        ...state,
        loading: {
          forecast: false,
        },
      };
    }

    default:
      return state;
  }
}

export default weatherReducer;It’s pretty standard stuff here, we are again using the interface concept to create a state contract.
And here we have our actions file.// remove any
import { Forecast } from "./weatherTypes";

export type WeatherActions =
  | {
      type: "WEATHER/GET_FORECAST_REQUEST";
      lat: string;
      lon: string;
    }
  | {
      type: "WEATHER/GET_FORECAST_SUCCESS";
      forecast: Forecast;
    }
  | { type: "WEATHER/GET_FORECAST_FAIL"; error: any };

export function getForecastRequest(lat: string, lon: string): WeatherActions {
  return {
    type: "WEATHER/GET_FORECAST_REQUEST",
    lat,
    lon,
  };
}

export function getForecastSuccess(forecast: Forecast): WeatherActions {
  return {
    type: "WEATHER/GET_FORECAST_SUCCESS",
    forecast,
  };
}

export function getForecastFail(error: any): WeatherActions {
  return { type: "WEATHER/GET_FORECAST_FAIL", error };
}A pretty simple set up here too, not relying on any dependencies. To me it seems very readable which can be an issue with TypeScript sometimes.
(I am using ananytype on this file, I would never recommended this is just as the type of the error object is unknown to me as it’s a third party API)
We are using a custom type Forecast :export interface Forecast {
  properties: {
    meta: {
      units: {
        [index: string]: string;
      };
      updated_at: string;
    };
    timeseries: [
      {
        data: {
          next_6_hours: {
            details: {
              [index: string]: number;
            };
            summary: {
              symbol_code: string;
            };
          };
          instant: {
            details: {
              [index: string]: number;
            };
          };
          next_12_hours: {
            summary: {
              symbol_code: string;
            };
            details: {
              [index: string]: number;
            };
          };
          next_1_hours: {
            details: {
              [index: string]: number;
            };
            summary: {
              symbol_code: string;
            };
          };
        };
        time: string;
      }
    ];
  };
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
  type: string;
}Okay so we have our types, actions, and reducer set up. Let’s call one of our actions and see what happens.import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getForecastRequest } from "modules/weather/weatherActions";
import { useSelectForecast } from "modules/weather/weatherSelectors";

import { WeatherReport } from "components/weather";
import { Container, Row, Col } from "react-grid-system";

function App() {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getForecastRequest("59.92609", "10.73436"));
  }, []);

  const forecast = useSelectForecast();

  return (
    <Container>
      <Row>
        <Col md={12}>
          {toggle && Object.keys(forecast).length > 0 && (
            <WeatherReport forecasts={[forecast]} />
          )}
        </Col>
        <Col md={12}>
          <button onClick={() => setToggle(!toggle)}>
            {${ toggle? "Hide": "Show" } weather forecast}
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;Okay so here is our App.tsx file. We are doing a simple dispatch of the action getForecastRequest(lat: string, lon: string) We will see no linting errors when calling this function, as we are using two strings as parameters.
We will manage the side effect of this action using redux-saga.import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../modules/weather/weatherActions";

import { getCompleteForecast } from "modules/weather/weatherService";

export function* workerGetForeCastRequest({
  lat,
  lon,
}: {
  type: "WEATHER/GET_FORECAST_REQUEST";
  lat: string;
  lon: string;
}) {
  try {
    const response = yield call(getCompleteForecast, lat, lon);

    yield put(actions.getForecastSuccess(response.data));
  } catch (error) {
    yield put(actions.getForecastFail({ error }));
  }
}

export default function* WatcherWeatherRequest() {
  yield takeLatest("WEATHER/GET_FORECAST_REQUEST", workerGetForeCastRequest);
}The only difference here to a vanilla JS redux-saga worker is the destructuring of the action object. Conventionally a worker has an action parameter which is an object supplied by the takeLatest or takeEvery function. We will destructure the parameter which allows us to assign the correct types.
As you can see clearly here I have decided against the convention that “define every action type as a string constant”, see below as example. Although feel free to mix these guidelines however suits you and/or your team.
const ADD_TODO = 'TODOS/ADD_TODO'
const REMOVE_TODO = 'TODOS/REMOVE_TODO'
const LOAD_ARTICLE = 'TODOS/LOAD_ARTICLE'
Okay so now we have nearly completed the flow of an asynchronous redux action. Lastly we need to select the data in our reducer using a selector. I will use the reselect library with a basic createSelector example to highlight how you can gain some performance improvements. Here is a short explanation of what reselect and the createSelector function is:
Selectors created using Reselect’s createSelector function are memoized. That’s a fancy word to mean that the function remembers the arguments passed-in the last time it was invoked and doesn’t recalculate if the arguments are the same. You can view it a little bit like caching.

import { createSelector } from "reselect";
import { useSelector } from "react-redux";

import { AppState } from "modules";
import { Forecast } from "./weatherTypes";

const forecastSelector = (state: AppState) => state.weather.forecast;

export const selectAllForecast = () => {
  return createSelector(
    [forecastSelector],
    (forecast: Forecast | {}) => forecast
  );
};

export function useSelectForecast() {
  return useSelector(selectAllForecast());
}So here we are selecting the forecast state from the app state slice, typing our app state slice with our AppState from our root reducer file. We then use that data as our first argument in the createSelector ensuring that our useSelectForecast function doesn’t recalculate if the forecast hasn’t changed. This becomes much more useful when you are doing a lot of computing logic in your selector function and/or have dynamic arguments being sent in by the user inputs.
Secondly in our createSelector function because the selected forecast data can be either a Forecast type or an empty object as described in our weatherReducer.ts we specify that typing in the createSelector function.
import { WeatherActions } from "./weatherActions";
import { Forecast } from "./weatherTypes";

export interface WeatherState {
  forecast: Forecast | {};
  loading: {
    forecast: boolean;
  };
}

export const initialStateWeather: WeatherState = {
  forecast: {},
  loading: {
    forecast: false,
  },
};Lastly just to finish some of the high level typescript react features, let’s take a quick look at typing a useState function.
const [toggle, setToggle] = useState<boolean>(true);
It’s a simple declaration in the <> brackets. Of course you could pass multiple types, and include globals types, like so.
const [data, setData] = useState<Forecast | []>([]);
Conclusion
Using TypeScript doesn’t have to be so intimidating and can be fun. Have a play with these techniques. Please do reach out if you have any questions or further ideas.
`,
        the_title: `TypeScript + react, redux, redux-saga starter kit`,
    },
    {
        the_body: `Prerequisites
Please make sure that Node.js (>= 10.13.0) is installed on your operating system and docker.
Init project
We need to create our project, firstly create blog directory.
mkdir blog
Later, go to blog directory and init the project.
cd blog
npm init
The last command going to create a package.json file, its purpose is to handle the history of all dependencies installed in our project.

Install dependencies
To our API Rest, we need the next dependencies, express, pg, typeorm, typescript.
Install dependencies dev dependencies.
npm install typescript @types/express @types/node --save-dev
We will only use the last dependencies to develop our API.
Now, install the dependencies that we’ll use in the production environment.
npm install express pg typeorm
express: This is a web application framework for NodeJS.
pg: It is a collection of NodeJS modules for interfacing with your PostgreSQL database.
Typescript: It’s a language for application-scale JavaScript, this module helps us to add optional types to JavaScript that support tools for large-scale JavaScript applications for any browser.
typeorm: It’s an ORM that runs in Node JS that can use with TypeScript and JavaScript (ES5, ES6, ES7, ES8).
@types/express, @types/node: these packages help us with the type definitions for Express and NodeJS.

Configuring TypeScript
First, we need to add a command into the package.json file to execute commands of the typescript module. In the section of scripts add the next line.
“tsc”: “tsc “
Now, we going to configure TypeScript in our project, execute the command below:
npm run tsc -- --init
The last command generates tsctsconfig.json, this file indicates that we are going to working with TypeScript. This file contains the working setup for TypeScript transpillation.
In the file, we add the next lines, those lines help us with the configuration of the build and root directories.
“outDir”: “./build”,
“rootDirs”: [“./src”],
rootDirs: This configuration list who combined represent the project.
outDir: This line redirects the output of compiled files.
Configuring our server
We going to create the src directory and server.ts file.
mkdir src
cd src
touch server.ts
Once created our sever.ts file we going to create a class called Server and the constructor, configuration, routes, and start method.


Once created the class and methods execute the command below to convert our TypeScript code to JavaScript.
npm run tsc
Remember the tsctsconfig.json configurations, the JavaScript files will generate into the build directory.
Now, start the server with the next command.
node ./build/server.js
After that. try to go to the next link http://localhost:3000/.
Create controllers
In this example of API, we going to use controllers to handle the routes, we need to create the controller directory and the post.controller.ts file.
In this controller, we going to handle the methods to the CRUD.

Next, execute the command below:
npm run tsc
node ./build/server.js
And try to access the new routes of the post controller. http://localhost:3001/api/posts
If you want to prove all the methods of post controller use postman.
Create services
In some cases, we need to get data from different places thus database or another API, for this reason, we need to handle this operation in an exclusive file. In this practice, we’ll use services to handle these tasks.
Create a new directory called services and the file post.service.ts.

Now execute commands to tranpillate our code and start the server.
npm run tsc
node ./build/server.


In the next section we’ll configure the database and execute som queries.
Create the database
For this practice, we going to use Docker containers, you can get some information about how to install docker in the documentation.
Once Docker installed, run the next command:
docker run -d -p 5433:5432 — name blog -e POSTGRES_USER=blog -e POSTGRES_PASSWORD=blog — mount src=db-blog,dst=/var/lib/postgresql/data postgres
The flag -d indicates that the container going to execute in detach mode in the background.
The flag -p 5433:5432 specifies that the container will configure the port 5432 and we can access it with the 5444 from localhost.
— name blog specify the name of our container.
In the line -e POSTGRES_PASSWORD=password we specified an environment variable POSTGRES_PASSWORD.
You can validate if the container was launched correctly using PgAdmin.


Configure the database connection
In this section we goint to confiure the database connection with our API using typeorm.
Create the connection
In the server file, we import createConnection function form typeorm, i this section we use async functions, so if you want to learn more about this topic visit the documentation.

In the last pictures shows how to create a new connection, It needs type of data base, port, host, username, password, database name. The method createConnection was imported form typeorm module.
Our method database Configuration going to execute into routes method and wait until the connection finished. It’s important the connection before starting with routes configuration.
If you want to know more about the different ways to create a connection vist typeorm’s documetnation.
Create entities
Well, we have the database connection, so the next step is configure the entities of our application. According TypeOrm’s documentation a entity is a class tha maps to a database table, you can define a entity using the annotation @Entity().
If you remember, in the configuration of the database we have this line entities: [“build/database/entities/**/*.js”], so we need to create the directory src/database/entites, and this directory will contain our entitites.
Create a class called PostEntity and in this class we define our table posts.


@PrimaryGeneratedColumn() genrate a primary column which value will be automatically generated and @Column() define a column of our database.
Create custom repository
All the actions that we need to do, we’ll do in the repository file, in this file we connect to a specific table and execute some actions such as update, create, delete and other DML operations.
Create the src/repository directory and a file called post.repository.ts and create the class PostRepository like class bellow.

The class PostRepository extends from Repository class, this class lets us to work with our entity objects. Find entities, insert, update, delete, etc, and @EntityRepository() is used to declare a class as a custom repository.
Integrate services with the repositories
Now we have all necesary to finish our API, we have the controllers, services and the repositories, in this section we integrate all the compoenets.
First we’ll inport PostRepository into the class PostService, and initialize the reposritory with some commands form typeorm module. The methos that we’ll use are getConnection() this method help us to get a specific connection, for example our connection was called blog and getCustomRepository() get the custom repository for example PostRepository, once initializaed pir service we can execute some methods, for example find(), this method retrieves all registers into the table posts.


Now transpille the code and start the server.
npm run tsc
node ./build/server.js
Insert some data into posts table and you can access to the next url http://localhost:3000/api/posts and get data.

With this we finish the practice, but you can see the complete code on GitHub.
Conclusion
Let’s look at what we have learned.
How to create a single Rest API with express.
Configration of typescript.
Configration of typeorm.
How to configure controllers, services, and repositories.
How to configure PostgreSQL Docker container.
First of all, thanks for reading and I hope this little tutorial will help you.
Kindest Regards.
`,
        the_title: `Create a Rest API with Express, PostgreSQL, TypeOrm, and TypeScript`,
    },
    {
        the_body: `Following on from my post on using react-konva as part of reciprocal.dev to build a User Journey Map and then adding zoom and panning to said map I decided to add some enhancements to change properties of components rendered on the canvas from outside the canvas.
In order to implement this enhancement I needed to introduce an app-wide state so I could track both the interaction in the non-canvas UI and update the value in the canvas components.
To do this I started by building a context that I could then access, using the useContext hook in the components that needed to access the properties the context exposed to change the app’s state.
I added the context provider at the root component level so child components could access the context and while this worked well with the UI elements I had created to display the screen information, it didn’t work with the components in the canvas.
The components that were children of the Stage used to render canvas elements were unable to access these properties due to scoping issues.
Accessing the React Context within a react-konva Stage
The fix for getting around the scoping issue is relatively simple, it just requires setting up another context provider inside the Stage .
For the new provider to re-use the value from the original provider we need to wrap a consumer around the Stage and make sure that our context provider component can have it’s value set by a prop.
Once we have the provider inside the Stage we can the use the useContext hook within the components that will be rendered to the canvas.
The final structure looks like this:

import { useState, useContext } from 'react';
import { Stage, Rect } from 'react-konva';
import ColourContext, { ColourConsumer, ColourProvider } from './contexts/ColourContext';

function Screen() {
 const { colour } = useContext(ColourContext);
  return (
    <Rect
      x={0}
      y={0}
      width={200}
      height={200}
      fill={colour}
    />
  )
}

function Canvas() {
 return (
    <ColourConsumer>
   {(colourValue) => (
      <Stage>
        <ColourProvider value={colourValue}>
          <Screen />
        </ColourProvider>
      </Stage>
    )}
    </ColourConsumer>
 )
}

function App() {
 const [colour, setColour] = useState('#FF0000');
 return (
   <ColourProvider value={{ colour, setColour }}>
    <Canvas />
   </ColourProvider>
 )
}



Using the React Context to update UI elements on state change
With the context accessible from inside the canvas we can use this context to update a shared state between UI elements outside of the canvas and those inside of it.
Firstly we need to have some means of getting and setting a value that will be updated via the non-canvas UI. To do this we use useState to track a value called colour and the getter and setter of this value to the provider via it’s value prop.
This colour value is changed inside of the non-canvas UI we call setColour whenever the user selects a value from the colour select element.
Within the canvas components we take the colour value from the context and use it to set the colour used in the component.


function Screen() {
 const { colour } = useContext(ColourContext);
  return (
    <Rect
      x={0}
      y={0}
      width={200}
      height={200}
      fill={colour}
    />
  )
}

// This requires the context to be relayed within the Konva Stage
function Canvas() {
 return (
    <ColourConsumer>
   {(colourValue) => (
      <Stage>
        <ColourProvider value={colourValue}>
          <Screen />
        </ColourProvider>
      </Stage>
    )}
    </ColourConsumer>
 )
}

// No need to relay, can just use useContext
function ColourForm() {
  const {colour, setColour} = useContext(ColourContext);

  function handleChange(e) {
    setColour(e.target.value);
  }

  return (
    <select value={colour} onChange={handleChange}>
      <option value='#ff0000'>Red</option>
      <option value='#00ff00'>Green</option>
      <option value='#0000ff'>Blue</option>
    </select>
   )
}

function App() {
 const [colour, setColour] = useState('#ff0000');
 return (
   <ColourProvider value={{ colour, setColour }}>
    <Canvas />
    <ColourForm />
   </ColourProvider>
 )
}


Once we’ve got the colour value being read by the canvas component and set by the non-canvas component we can now set the colour of the Rect using the select box.
Summary
While this post covers a very simple use case there’s no reason why you couldn’t use a React Context to track the state of a number of values and build an advanced UI that allows the user to update objects within the canvas from outside of it.
You can find a demo of the shared state in the example User Journey Map I’ve built as part of reciprocal.dev, as this uses the approach mentioned in this post to track the app state between the non-canvas UI and the main canvas.
`,
        the_title: `Using a React Context with react-konva`,
    },
    {
        the_body: `Modules are the building blocks of an application. Modules are isolated pieces of code that when put together construct the larger functioning application. Node.js accomplishes this abstraction through the CommonJS standard or recently introduced ES module system.
The main idea of modules is to break down large pieces of code into smaller pieces. So by storing relevant code in individual files, code can be plugged into other portions of an application via importing. Importing a file means loading in code that is made available for use within the file.
A simple import statement with CommonJS would be something like the following.
const sample = require('./sample.js');
// if sample.js provided a function
sample();
// if sample.js provided a variable
console.log(sample);
// etc
In CommonJS, importing a file involves using the require() function, which takes in a module identifier, and loads in that module within the current module.
When importing the built-in or third-party modules, the process is the same, a single word module identifier is passed into require().
// built-in module used for creating HTTP servers
const http = require('http');
// third-party package used for making HTTP requests
const axios = require('axios');
The other side of this process is the exportation of code so that other modules can access it within their scope.
// sample.js
const sample = 'sample variable string';
const sample2 = 'sample2 variable string';
module.exports = sample;
// importing module
const sample = require('./sample.js');
console.log(sample);  // => sample variable string
console.log(sample2); // => Reference error
Expanding on the example above, here we see the structure within “sample.js” that allows other modules to import its API for use. Any code that is defined within a module is private to other modules unless it is explicitly exported. When I tried to log the “sample2” variable, a reference error was thrown because it was not explicitly exported via assignment to the “exports” property on the module object. This is how Node.js allows files access to encapsulated code. Node.js also provides the same exporting functionality via the shorthand “exports” object.
// sample.js
const sample = 'sample variable string';
exports.sample = sample;
As of Node.js version 14.x, the standard JavaScript module system, ES modules, has also been adopted and provides alternatives to utilizing modules along with some key differences. The ES module system utilizes the “import” statement to import modules and does so asynchronously as opposed to the synchronous require() function.
A simple import statement with CommonJS would be something like the following:
// importing with ES Modules
import sample from './sample.mjs';
Aside from the syntactical differences, CommonJS and ES modules provide other key differences. Like the “module” object which is injected by default into each CommonJS module by Node, other values are made available within the modules. The __filename and __dirname are variables that are made available within every CommonJS module, useful for various configurations.
// within a CommonJS module
// by default .js extensionconsole.log(__filename, __dirname); // double underscore
When working with ES modules, these variables are not available and need to be computed. This is carried out by the only value that is injected within ES modules, the “import.meta” property which helps identify the URL which maps to the current module.`,
        the_title: `Modules in Node.js`,
    },
    {
        the_body: `Being able to implement private variables and methods is very helpful for restricting access to code. By making a variable private it limits the amount of code that can mutate it. There are several ways to implement private variables and methods in JavaScript. One of such ways is by using closures.
What is a closure?
A closure is the combination of a function bundled with its surrounding state. This means that we can access the scope in which the function is defined, from inside that function. Let’s look at a simple example:Here we have an outer function add and an inner function addFive. Assigning add to a variable will return the inner function addFive.Invoking the variable and passing a number will execute addFive. At first, it seems accessing x should not be possible since x belongs to the scope of the outer function which has already finished executing. But, because the function addFive forms a closure, it also has access to the environment or scope in which it was declared (also known as the lexical environment).
If a function forms a closure, it can access variables and functions declared in the parent/outer function even after that parent/outer function finishes executing. This principle allows us to implement private variables.
Implementing private variables
In JavaScript, private variables are not natively available. But knowing how closures work, we can emulate them.
This example applies the concept we looked at in the previous section. An IIFE(Immediately Invoked Function Expression) is assigned to the constant Door. The IIFE executes immediately and returns an object with two methods. This returned object has a function and a variable in its lexical environment.
The IIFE finishes executing, so the variable and function are both inaccessible from the outside. Only the two methods inside the returned object can access them because they form closures.`,
        the_title: `How do closures make private variables possible in JavaScript?`,
    },
    {
        the_body: `There aren't really any development fields more challenging than operating system (OS) development. It is the "great pinnacle of programming."

Few programmers ever attempt to build an OS and many of those who do make the attempt never produce a functioning system.

However, if you do make it all the way to the finish line and produce a functional operating system, you will have joined an elite group of top-flight programmers.

What is an Operating System?
The earliest computers did not have operating systems.

Every program that ran on these early systems had to include all of the code necessary to run the computer, communicate with connected hardware, and perform the computation the program was actually intended to perform. This situation meant that even simple programs were complex.

As computer systems diversified and became more complex and powerful, it became increasingly impractical to write programs that functioned as both an operating system and a useful application.

In response, individual mainframe computer owners began to develop system software that made it easier to write and run programs and operating systems were born.

An operating system (OS) is software that manages computer hardware and system resources and provides the tools that applications need to operate. The birth of operating systems meant that programs no longer had to be written to control the entire scope of computer operation.

Instead, computer applications could be written to be run by the operating system while the operating system worried about computer resources and connected peripheral equipment such as printers and punched paper card readers.

A Brief History of Operating Systems
The first operating system was created by General Motors in 1956 to run a single IBM mainframe computer. Other IBM mainframe owners followed suit and created their own operating systems.

As you can imagine, the earliest operating systems varied wildly from one computer to the next, and while they did make it easier to write programs, they did not allow programs to be used on more than one mainframe without a complete rewrite.

In the 1960s, IBM was the first computer manufacturer to take on the task of operating system development and began distributing operating systems with their computers.

However, IBM wasn't the only vendor creating operating systems during this time. Control Data Corporation, Computer Sciences Corporation, Burroughs Corporation, GE, Digital Equipment Corporation, and Xerox all released mainframe operating systems in the 1960s as well.

In the late 1960s, the first version of the Unix operating system was developed. Written in C, and freely available during it's earliest years, Unix was easily ported to new systems and rapidly achieved broad acceptance.

Many modern operating systems, including Apple OS X and all Linux flavors, trace their roots back to Unix.

Microsoft Windows was developed in response to a request from IBM for an operating system to run its range of personal computers.

The first OS built by Microsoft wasn't called Windows, it was called MS-DOS and was built in 1981 by purchasing the 86-DOS operating system from Seattle Computer Products and modifying it to meet IBM's requirements.

The name Windows was first used in 1985 when a graphical user interface was created and paired with MS-DOS.

Apple OS X, Microsoft Windows, and the various forms of Linux (including Android) now command the vast majority of the modern operating system market.

The Parts of an Operating System
Operating systems are built out of two main parts:

The kernel;
System programs.
The kernel is the heart of the operating system. It is the first program loaded when the computer starts up, it manages computer resources, and it handles requests from system programs and applications.

System programs run on top of the kernel. They aren't used to perform useful work, instead, they are the programs necessary to connect the kernel to user applications and peripheral devices. Device drivers, file systems, networking programs, and system utilities like disk defragmeters are all examples of system programs.

Application programs aren't part of the operating system and are the programs used to perform useful work. Word processing applications, browsers, and media player are common types of application programs. Application programs are managed and enabled by the kernel, and use system programs to access computer periphery devices and hardware.

What You Need to Know
The list of things you need to know before you attempt to undertake operating system development is very long. The three most important things you need to master prior to jumping into OS development are:

Basic computer science knowledge;
Computer programming theory and best-practices;
Low-level and a high-level programming languages.
Learn Computer Science
OS development isn't like web development. It isn't something you can jump into and learn as you go. You need to develop a solid foundation in computer science before moving on to other topics.

Here are some resources to get you started:

Coursera: Computer Science 101 is the course you should take first if you are brand new to the field of computer programming and computer science.

If you have a little knowledge and experience under your belt, skip this course in favor of the Udacity of edX options. However, if you are brand new to the field, this course takes a no-prior-experience approach to introducing computer science and programming topics.

Udacity: Intro to Computer Science takes a web-development approach to teaching computer science. While not directly applicable to the prospect of building an operating system, this is a solid course that delivers useful information and provides a good overview of the basics of computer programming.

edX: Introduction to Computer Science is the most complete and in-depth computer science course in this list. This free, self-paced course was designed by Harvard University and mirrors the content presented in the course by the same name offered on the campus of Harvard University.

In this far-reaching course you will learn about algorithms, data structures, resource management, software engineering, and get a look at programming languages like C, PHP, and JavaScript.

Learn Computer Programming
With a solid grasp of computer science under your belt and some limited experience with programming languages, the next step is to learn how to tackle a large-scale programming project.

Udacity: Software Development Process is an excellent course everyone should take if they've never undertaken a large-scale, challenging programming project before. In this course you'll learn workflow and management tools and techniques such as Git and how to set up an integrated development environment.

Learn Programming Languages
In order to develop an operating system, you will need to master at least two programming languages:

Low-level assembly language;
A high-level programming language.
Assembly languages are used to communicate directly with a CPU. Each type of CPU speaks a machine language and there is just one corresponding assembly language for each type of CPU. The most common computer architecture is x86, it was originally developed by Intel and is now used by a wide range of computer chip manufacturers including AMD, VIA, and many others. In this guide we will point you in the direction of learning x86 assembly language.

High-level programming languages work with multiple computer architectures. C is the programming language most commonly used and recommended for writing operating systems. For this reason, we are going to recommend learning and using C for OS development. However, other languages such as C++ and Python can also be used.

x86 Assembly Language
The x86 Assembly Guide is a great place to start learning assembly language. This short document provides a brief overview of x86 assembly language and will set the stage for the more advanced resources you'll be moving on to next.

Programming from the Ground Up by Jonathan Bartlett is one of the defining books of the assembly language landscape. This book uses assembly language as the basis for learning computer science and programming. This resource is also available from the Internet Archive.

The Art of Assembly Language by Randy Hyde is another iconic text in the world of assembly language education. Originally written specifically for Hyde's programming courses at Cal Poly and UC Riverside, the text was released as an HTML ebook in the mid-1990s and is recognized as a defining work within the field. The text is also hosted as a series of PDF files by the Yale FLINT Group.

If you want to use a traditional textbook to learn about x86 assembly language two of the most commonly used and highly recommended texts are:

Assembly Language Step-by-Step: Programming with Linux by Jeff Duntemann;
Modern X86 Assembly Language Programming by Daniel Kusswurm.
C
There are many high-level programming languages you could learn and many different resources you could use to learn them. Our recommendation, and the recommendation most commonly echoed by the OS development community, is to learn C, and we've found several excellent resources that will turn you into a competent C programmer.

Get a quick overview of the C programming language by completing this C Tutorial. This resource won't turn you into an expert, but it will give you a good basic understanding of the language and prepare you to tackle more challenging topics and resources.

Learn C the Hard Way is a free HTML ebook that includes many practice exercises. This text walks you all the way through the C programming language, and if you put in the work, take your time, and complete all of the exercises, you'll be well on your way to being a competent C programmer by the time you complete this tutorial.

If a traditional textbook is something you're more likely to work your way through, these two texts are some of the most popular for mastering the C programming language.

The C Programming Language by Kernighan and Ritchie;
C Programming Absolute Beginner's Guide by Perry and Miller.
OS Development Tutorials
Once you have a strong grasp of the fundamental concepts of computer science and programming, and have mastered assembly language and C, the next step is to complete one or two OS development tutorials that walk through the entire process of developing a simple OS from scratch. We found three excellent resources that do just that.

Linux From Scratch will walk you through the process of building a complete Linux operating system. Completely this tutorial won't produce a full-fledged operating system, but it will give you a solid code base on which to build out a complete operating system. Tackle advanced tutorials such as Beyond Linux from Scratch, Automated Linux from Scratch, Cross Linux from Scratch, or Hardened Linux from Scratch to build your basic OS into a useful piece of software.

The little book about OS development by Erik Helin and Adam Renberg was developed as part of an advanced computer science course the authors completed while students as the Royal Institute of Technology in Stockholm. This course walks through the complete process of developing an x86 operating system by beginning with setting up a programming environment, culminating in programming for multitasking, and hitting topics such as managing system memory and developing file systems along the way.

Operating System Development Series from Broken Thorn Entertainment is a series of 25 tutorials that walk you through the process of creating an OS from the ground up. Beginners beware: this series assumes you already know your way around an IDE and are a competent C and assembly language programmer.

There are many texts you could use to learn about the discipline of OS development. Three of the most commonly recommended are:

Modern Operating Systems by Tanenbaum and Bos;
The Design of the UNIX Operating System by Maurice Bach;
Operating System Concepts by Silberschatz, Galvin, and Gagne.
OS Development Communities
As you embark on the journey of becoming an OS developer, there are a few places where you can find other OS developers to learn from and commiserate with:

OSDev.org is a wiki with a great deal of information about OS development as well as a forum where you can meet and get feedback from other like-minded programmers.
OS Development Channel on reddit is a great community where you can learn about OS development and enjoy a moment of levity when the task of OS development becomes a bit to arduous.
Computer Science, Programmers, and StackOverflow from StackExchange are places you can pose technical questions to other programmers when you come up against a problem you can't seem to figure out on your own.
Summary
Learning OS development is one of the most challenging programming tasks you can undertake. However, succeeding in your effort to build a working OS will mark you as a competent programmer and one who deeply understands how processors, hardware, and computer programs work together to create what the rest of the world takes for granted as a functioning computer.`,
        the_title: `How To Program Your Very Own Operating Systems (OS)`,
    },
    {
        the_body: `Django REST with React: what you will learn
In the following tutorial you'll learn:

how to build a simple Django REST API
how to structure a Django project with React
Django REST with React: requirements
To follow along with the tutorial you should have:

a basic understanding of Python and Django
a basic understanding of JavaScript (ECMAScript 2015) and React
a newer version of Node.js installed on your system
Ready? Let's get started!

Book in progress!
Please read
Django REST with React: what you will learn
Django REST with React: requirements
Setting up a Python virtual environment, and the project
Django REST with React: building a Django application
Django REST with React: creating a Django model
Django REST with React: a sprinkle of testing
Django REST serializers
Setting up the controll... ehm the views
Setting up the rout... ehm the urls
Django and React together
Setting up React and webpack
Django REST with React: preparing the frontend app
Django REST with React: the React frontend
Django REST with React: conclusions, where to go from here
Setting up a Python virtual environment, and the project
First things first make sure to have a Python virtual environment in place. Create a new folder and move into it:

mkdir django-react && cd $_
Once done create and activate the new Python environment:

python3 -m venv venv
source venv/bin/activate
NOTE: from now on make sure to be always in the django-react folder and to have the Python environment active.

Now let's pull in the dependencies:

pip install django djangorestframework
When the installation ends you're ready to create a new Django project:

django-admin startproject django_react .
Now we can start building our first Django app: a simple API for listing and storing contacts.

Django REST with React: building a Django application
A Django project can have many applications. Each application ideally should do one thing. Django applications are modular and reusable, if another project needs the same app over and over we can put that app in the Python package manager and install it from there.

To create a new application in Django you would run:

django-admin startapp app_name
In our case, still in the project folder run:

django-admin startapp leads
This will create our new leads app in the django-react folder. Your project structure now should be:

(venv) your@prompt:~/Code/django-react$ tree -d -L 1
.
├── django_react
├── leads
└── venv
Now let’s tell Django how to use the new app. Open up django_react/settings.py and add the app in INSTALLED_APPS:

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'leads.apps.LeadsConfig', # activate the new app
]
So far so good! In the next section we'll add our first model.

Django REST with React: creating a Django model
With the app in place it's time to create our first model. A model is an object representing your table's data. Almost every web framework has models and Django makes no exception.

A Django model may have one or more fields: each field is a column in your table. Before moving forward let's define our requirements for the lead application.

Since I'm collecting contacts I can think of a Lead model made of the following fields:

a name
an email
a message
(Feel free to add extra fields! Like phone for example). Let's not forget a timestamp field as well! Django does not add a created_at column by default.

Open up leads/models.py and create the Lead model:

from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
A quick note about models: take your time to check Django fields documentation. When planning a model try to choose the most appropriate fields for your use case. With the model in place let's create a migration by running:

python manage.py makemigrations leads
Finally migrate the database with:

python manage.py migrate
Great! In the next sections we'll talk about serializers and views. But first a note about testing.

Django REST with React: a sprinkle of testing
At this point you may wonder "Valentino, how about testing?" Rather than annoying you with a TDD tutorial I'll give you some tips instead.

I've seen a ton of Django tutorials starting like so:

class SomeModelModelTest(TestCase):
    def setUp(self):
        SomeModel.objects.create(
            name=fake.name(),
            email=fake.email(),
            phone=fake.phone_number(),
            message=fake.text(),
            source=fake.url()
        )
    def test_save_model(self):
        saved_models = SomeModel.objects.count()
        self.assertEqual(saved_models, 2)
Don't do that. There's no point in testing neither a vanilla Django model nor the Django ORM. Here's a good starting point for testing in Django:

do not test Django built-in code (models, views, etc)
do not test Python built-in functions
Do not test what is already tested! So what should I test? Have you added a custom method to a Django model? Test it! Do you have a custom view? Test it! But, how do I know what to test exactly?

Do yourself a favour. Install coverage:

pip install coverage
Then, every time you add some code to your application run coverage with:

coverage run --source='.' manage.py test
Then generate the report:

coverage html
You'll see exactly what to test. If you prefer seeing the report on the command line run:

coverage report
Wait, are you still there? I'm impressed! Hold tight, in the next section we'll take a look at serializers!

To learn more about testing in Django see Django Testing Cheat Sheet.

Django REST serializers
What is serialization? What is a Django REST serializer? Serialization is the act of transforming an object into another data format. After transforming an object we can save it to a file or send it through the network.

Why serialization is necessary? Think of a Django model: it's a Python class. How do you render a Python class to JSON in a browser? With a Django REST serializer!

A serializer works the other way around too: it converts JSON to objects. This way you can:

display Django models in a browser by converting them to JSON
make CRUD request with a JSON payload to the API
To recap: a Django REST serializer is mandatory for operating on models through the API. Create a new file named leads/serializers.py. The LeadSerializer takes our Lead model and some fields:

from rest_framework import serializers
from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ('id', 'name', 'email', 'message')
As you can see we're subclassing ModelSerializer. A ModelSerializer in Django REST is like a ModelForm. It is suitable whenever you want to closely map a Model to a serializer.

Save and close the file. In the next sections we'll take a look at views and urls.

Setting up the controll... ehm the views
Coming from other frameworks you may find surprising that Django has no controllers.

A controller encapsulates logic for processing requests and returning responses. In the traditional MVC architecture there is the Model, the View, and the Controller. Example of MVC frameworks are Rails, Phoenix, Laravel.

Django is a MVT framework. That is, Model – View – Template. There are many types of views in Django: function views, class based views, and generic views.

Some developers prefer function views in place of class based views. Personally I am a big fan of the latter. When I pick Django it's because I value development speed, DRY, less code.

I see no point in writing views by hand when there's already a set of sane defaults. Here's my rule of thumb:

Use function views only if the time spent customizing a generic view is more than the time spent writing the view by hand. As with plain Django, in Django REST framework there are many ways for writing views:

function based views
class based views
generic API views
For the scope of this tutorial I will use generic API views. Our simple app should:

list a collection of models
create new objects in the database
By taking a look at the generic API views documentation we can see that there's a view for listing and creating models: ListCreateAPIView, which takes a queryset, and a serializer_class.

Open up leads/views.py and create the view:

from .models import Lead
from .serializers import LeadSerializer
from rest_framework import generics

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
That is. With 3 lines of code we created a view for handling GET and POST requests. What's missing now? URL mapping! In other words we should map URLs to views.

How? Head over to the next section.

Setting up the rout... ehm the urls
Our goal is to wire up LeadListCreate to api/lead/. In other words we want to make GET and POST requests to api/lead/ for listing and creating models.

To configure the URL mapping include the app urls in django_react/urls.py:

from django.urls import path, include

urlpatterns = [
    path('', include('leads.urls')),
]
Next up create a new file named leads/urls.py. In this file we'll wire up LeadListCreate to api/lead/:

from django.urls import path
from . import views

urlpatterns = [
    path('api/lead/', views.LeadListCreate.as_view() ),
]
Finally let's enable rest_framework in INSTALLED_APPS. Open up django_react/settings.py and add the app there:

# Application definition

INSTALLED_APPS = [
    # omitted for brevity
    'leads.apps.LeadsConfig',
    'rest_framework'
]
Now you should be able to run a sanity check with:

python manage.py runserver
Head over http://127.0.0.1:8000/api/lead/ and you'll see the browsable API:

Django REST framework browseable API

NOTE: it is a good idea to disable the browseable API in production with this configuration:

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    )
}
While there create some contact in the builtin form. In the next section we'll get into React.

Django and React together
A lot of fellow Python developers struggle with a simple question. How to glue Django and $insert_frontend_library_here together?

Should React router take over the routing? Should React mount a component in each Django template? (If you want to lose sanity). I'd say "it depends". It depends on how much JavaScript do you need. But how much JavaScript is too much?

Jokes aside there are many ways for setting up a Django project with React. I see the following patterns (which are common to almost every web framework):

Option 1. React in its own "frontend" Django app: load a single HTML template and let React manage the frontend (difficulty: medium)

Option 2. Django REST as a standalone API + React as a standalone SPA (difficulty: hard, it involves some form of token-based authentication)

Option 3. Mix and match: mini React apps inside Django templates (difficulty: simple, but not so maintainable in the long run)

And here are my advices. If you're just starting out with Django REST and React avoid option 2. Instead go for option number 1 (React in its own "frontend" Django app) if:

you're building an app-like website
the interface has lot of user interactions/AJAX
you're ok with Session based authentication
there are no SEO concerns
you're fine with React Router
In fact keeping React closer to Django makes easier to reason about authentication. You can exploit the Django builtin authentication for registering and logging in users.

Use the good ol' Session authentication and do not worry too much about tokens and JWT.

Go for option number 3 (mini React apps inside Django templates) if:

the website doesn’t need much Javascript
SEO is a big concern and you can't use Node.js for Server Side Rendering
In the next section we'll go with the option 1.

Setting up React and webpack
Disclaimer: My tutorials are free, no strings attached. This means I have no obligation to keep them constantly updated to the latest releases of the packages. Keep also in mind, frontend tooling changes so fast that I can't keep up updating every single blog post as quickly as webpack introduces breaking changes in the configuration. If something doesn't work for you, drop me a polite email, and I'll try to fix the tutorial if I have time. Enjoy!

We already know how to create a Django app so let's do it again for the frontend app:

django-admin startapp frontend
You'll see a new directory called frontend inside your project folder:

(venv) your@prompt:~/Code/django-react$ tree -d -L 1
.
├── django_react
├── frontend
├── leads
└── venv
Let's also prepare a directory structure for holding React components:

mkdir -p ./frontend/src/components
and static files:

mkdir -p ./frontend/{static,templates}/frontend
Next up we'll set up React, webpack and babel. Move in the frontend folder and initialize the environment:

cd ./frontend && npm init -y
Next up install webpack and webpack cli:

npm i webpack webpack-cli --save-dev
Now open up package.json and configure two scripts, one for production and one for development:

"scripts": {
    "dev": "webpack --mode development --entry ./src/index.js --output-path ./static/frontend",
    "build": "webpack --mode production --entry ./src/index.js --output-path ./static/frontend"
},
Close the file and save it. Now let's install babel for transpiling our code:

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
Next up pull in React:

npm i react react-dom --save-dev
Now configure babel with a .babelrc (still inside ./frontend):

{
    "presets": [
        "@babel/preset-env", "@babel/preset-react"
    ]
}
NOTE: if you're getting regeneratorRuntime is not defined with async/await in your React components replace the above babel configuration with the version presented in this post.

And finally create a webpack.config.js for configuring babel-loader:

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
Now we're ready to roll! (Welcome to modern frontend!).

Django REST with React: preparing the frontend app
First things first create a view in ./frontend/views.py:

from django.shortcuts import render


def index(request):
    return render(request, 'frontend/index.html')
Then create a template in ./frontend/templates/frontend/index.html:

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Django REST with React</title>
</head>
<body>
<div id="app">
    <!-- React will load here -->
</div>
</body>
{% load static %}
<script src="{% static "frontend/main.js" %}"></script>
</html>
As you can see the template will call ./frontend/main.js which is our webpack bundle. Configure the new URL mapping to include the frontend in ./project/urls.py:

urlpatterns = [
    path('', include('leads.urls')),
    path('', include('frontend.urls')),
]
Next up create a new file named ./frontend/urls.py:

from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
]
Finally enable the frontend app in ./project/settings.py:

# Application definition

INSTALLED_APPS = [
    # omitted for brevity
    'leads.apps.LeadsConfig',
    'rest_framework',
    'frontend', # enable the frontend app
]
At this point you can give it a shot on http://127.0.0.1:8000/ (while still running Django development server). You'll see a blank page for now.

In the next section we'll finally add React to the mix.

Django REST with React: the React frontend
To keep things simple we'll create a simple React component that will display our data. If you haven't got anything in the database it's a good moment to populate your application with some contact.

Run the development server and head over http://127.0.0.1:8000/api/lead/ to insert some leads.

Now create a new file in ./frontend/src/components/App.js. It will be a React component for fetching and displaying data:

import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/lead")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
NOTE: you can write the very same component as a function with the useEffect hook.

Save and close the file. Now create the entry point for webpack in ./frontend/src/index.js and import your component:

import App from "./components/App";
Now we're ready to test things out. Run webpack with:

npm run dev
start the development server:

python manage.py runserver
and head over http://127.0.0.1:8000/. (If you see "Something went wrong" make sure to migrate and populate your database)

You should finally see your data in a React component:

Simple React component

Pretty simple. But it works!

Django REST with React: conclusions, where to go from here
In this tutorial we built a simple Django REST/React project. You learned how to:

build a simple Django REST API
structure a Django project with React
connect React to the Django REST API
Feel free to experiment by adding more features to the project (like authentication).

The approach we took when connecting the React frontend to Django was a bit simplistic, but represent a strong foundation of what you'll do in the real world.

To learn more about the challenges you'll face with webpack and Django in bigger projects make sure to read also Using webpack with Django: it's not easy as you think.

I also gave a talk on the topic: "Decoupling Django with Django REST and React" at Pycon Italy X in Florence. Slides here!

Thanks for reading!`,
        the_title: `Tutorial: Django REST with React (and a sprinkle of testing)`,
    },
    {
        the_body: `class Field(**kwargs)¶
When you create a Form class, the most important part is defining the fields of the form. Each field has custom validation logic, along with a few other hooks.

Field.clean(value)¶
Although the primary way you’ll use Field classes is in Form classes, you can also instantiate them and use them directly to get a better idea of how they work. Each Field instance has a clean() method, which takes a single argument and either raises a django.core.exceptions.ValidationError exception or returns the clean value:

>>> from django import forms
>>> f = forms.EmailField()
>>> f.clean('foo@example.com')
'foo@example.com'
>>> f.clean('invalid email address')
Traceback (most recent call last):
...
ValidationError: ['Enter a valid email address.']
Core field arguments¶
Each Field class constructor takes at least these arguments. Some Field classes take additional, field-specific arguments, but the following should always be accepted:

required¶
Field.required¶
By default, each Field class assumes the value is required, so if you pass an empty value – either None or the empty string ("") – then clean() will raise a ValidationError exception:

>>> from django import forms
>>> f = forms.CharField()
>>> f.clean('foo')
'foo'
>>> f.clean('')
Traceback (most recent call last):
...
ValidationError: ['This field is required.']
>>> f.clean(None)
Traceback (most recent call last):
...
ValidationError: ['This field is required.']
>>> f.clean(' ')
' '
>>> f.clean(0)
'0'
>>> f.clean(True)
'True'
>>> f.clean(False)
'False'
To specify that a field is not required, pass required=False to the Field constructor:

>>> f = forms.CharField(required=False)
>>> f.clean('foo')
'foo'
>>> f.clean('')
''
>>> f.clean(None)
''
>>> f.clean(0)
'0'
>>> f.clean(True)
'True'
>>> f.clean(False)
'False'
If a Field has required=False and you pass clean() an empty value, then clean() will return a normalized empty value rather than raising ValidationError. For CharField, this will return empty_value which defaults to an empty string. For other Field classes, it might be None. (This varies from field to field.)

Widgets of required form fields have the required HTML attribute. Set the Form.use_required_attribute attribute to False to disable it. The required attribute isn’t included on forms of formsets because the browser validation may not be correct when adding and deleting formsets.

label¶
Field.label¶
The label argument lets you specify the “human-friendly” label for this field. This is used when the Field is displayed in a Form.

As explained in “Outputting forms as HTML” above, the default label for a Field is generated from the field name by converting all underscores to spaces and upper-casing the first letter. Specify label if that default behavior doesn’t result in an adequate label.

Here’s a full example Form that implements label for two of its fields. We’ve specified auto_id=False to simplify the output:

>>> from django import forms
>>> class CommentForm(forms.Form):
...     name = forms.CharField(label='Your name')
...     url = forms.URLField(label='Your website', required=False)
...     comment = forms.CharField()
>>> f = CommentForm(auto_id=False)
>>> print(f)
<tr><th>Your name:</th><td><input type="text" name="name" required></td></tr>
<tr><th>Your website:</th><td><input type="url" name="url"></td></tr>
<tr><th>Comment:</th><td><input type="text" name="comment" required></td></tr>
label_suffix¶
Field.label_suffix¶
The label_suffix argument lets you override the form’s label_suffix on a per-field basis:

>>> class ContactForm(forms.Form):
...     age = forms.IntegerField()
...     nationality = forms.CharField()
...     captcha_answer = forms.IntegerField(label='2 + 2', label_suffix=' =')
>>> f = ContactForm(label_suffix='?')
>>> print(f.as_p())
<p><label for="id_age">Age?</label> <input id="id_age" name="age" type="number" required></p>
<p><label for="id_nationality">Nationality?</label> <input id="id_nationality" name="nationality" type="text" required></p>
<p><label for="id_captcha_answer">2 + 2 =</label> <input id="id_captcha_answer" name="captcha_answer" type="number" required></p>
initial¶
Field.initial¶
The initial argument lets you specify the initial value to use when rendering this Field in an unbound Form.

To specify dynamic initial data, see the Form.initial parameter.

The use-case for this is when you want to display an “empty” form in which a field is initialized to a particular value. For example:

>>> from django import forms
>>> class CommentForm(forms.Form):
...     name = forms.CharField(initial='Your name')
...     url = forms.URLField(initial='http://')
...     comment = forms.CharField()
>>> f = CommentForm(auto_id=False)
>>> print(f)
<tr><th>Name:</th><td><input type="text" name="name" value="Your name" required></td></tr>
<tr><th>Url:</th><td><input type="url" name="url" value="http://" required></td></tr>
<tr><th>Comment:</th><td><input type="text" name="comment" required></td></tr>
You may be thinking, why not just pass a dictionary of the initial values as data when displaying the form? Well, if you do that, you’ll trigger validation, and the HTML output will include any validation errors:

>>> class CommentForm(forms.Form):
...     name = forms.CharField()
...     url = forms.URLField()
...     comment = forms.CharField()
>>> default_data = {'name': 'Your name', 'url': 'http://'}
>>> f = CommentForm(default_data, auto_id=False)
>>> print(f)
<tr><th>Name:</th><td><input type="text" name="name" value="Your name" required></td></tr>
<tr><th>Url:</th><td><ul class="errorlist"><li>Enter a valid URL.</li></ul><input type="url" name="url" value="http://" required></td></tr>
<tr><th>Comment:</th><td><ul class="errorlist"><li>This field is required.</li></ul><input type="text" name="comment" required></td></tr>
This is why initial values are only displayed for unbound forms. For bound forms, the HTML output will use the bound data.

Also note that initial values are not used as “fallback” data in validation if a particular field’s value is not given. initial values are only intended for initial form display:

>>> class CommentForm(forms.Form):
...     name = forms.CharField(initial='Your name')
...     url = forms.URLField(initial='http://')
...     comment = forms.CharField()
>>> data = {'name': '', 'url': '', 'comment': 'Foo'}
>>> f = CommentForm(data)
>>> f.is_valid()
False
# The form does *not* fall back to using the initial values.
>>> f.errors
{'url': ['This field is required.'], 'name': ['This field is required.']}
Instead of a constant, you can also pass any callable:

>>> import datetime
>>> class DateForm(forms.Form):
...     day = forms.DateField(initial=datetime.date.today)
>>> print(DateForm())
<tr><th>Day:</th><td><input type="text" name="day" value="12/23/2008" required><td></tr>
The callable will be evaluated only when the unbound form is displayed, not when it is defined.

widget¶
Field.widget¶
The widget argument lets you specify a Widget class to use when rendering this Field. See Widgets for more information.

help_text¶
Field.help_text¶
The help_text argument lets you specify descriptive text for this Field. If you provide help_text, it will be displayed next to the Field when the Field is rendered by one of the convenience Form methods (e.g., as_ul()).

Like the model field’s help_text, this value isn’t HTML-escaped in automatically-generated forms.

Here’s a full example Form that implements help_text for two of its fields. We’ve specified auto_id=False to simplify the output:

>>> from django import forms
>>> class HelpTextContactForm(forms.Form):
...     subject = forms.CharField(max_length=100, help_text='100 characters max.')
...     message = forms.CharField()
...     sender = forms.EmailField(help_text='A valid email address, please.')
...     cc_myself = forms.BooleanField(required=False)
>>> f = HelpTextContactForm(auto_id=False)
>>> print(f.as_table())
<tr><th>Subject:</th><td><input type="text" name="subject" maxlength="100" required><br><span class="helptext">100 characters max.</span></td></tr>
<tr><th>Message:</th><td><input type="text" name="message" required></td></tr>
<tr><th>Sender:</th><td><input type="email" name="sender" required><br>A valid email address, please.</td></tr>
<tr><th>Cc myself:</th><td><input type="checkbox" name="cc_myself"></td></tr>
>>> print(f.as_ul()))
<li>Subject: <input type="text" name="subject" maxlength="100" required> <span class="helptext">100 characters max.</span></li>
<li>Message: <input type="text" name="message" required></li>
<li>Sender: <input type="email" name="sender" required> A valid email address, please.</li>
<li>Cc myself: <input type="checkbox" name="cc_myself"></li>
>>> print(f.as_p())
<p>Subject: <input type="text" name="subject" maxlength="100" required> <span class="helptext">100 characters max.</span></p>
<p>Message: <input type="text" name="message" required></p>
<p>Sender: <input type="email" name="sender" required> A valid email address, please.</p>
<p>Cc myself: <input type="checkbox" name="cc_myself"></p>
error_messages¶
Field.error_messages¶
The error_messages argument lets you override the default messages that the field will raise. Pass in a dictionary with keys matching the error messages you want to override. For example, here is the default error message:

>>> from django import forms
>>> generic = forms.CharField()
>>> generic.clean('')
Traceback (most recent call last):
  ...
ValidationError: ['This field is required.']
And here is a custom error message:

>>> name = forms.CharField(error_messages={'required': 'Please enter your name'})
>>> name.clean('')
Traceback (most recent call last):
  ...
ValidationError: ['Please enter your name']
In the built-in Field classes section below, each Field defines the error message keys it uses.

validators¶
Field.validators¶
The validators argument lets you provide a list of validation functions for this field.

See the validators documentation for more information.

localize¶
Field.localize¶
The localize argument enables the localization of form data input, as well as the rendered output.

See the format localization documentation for more information.

disabled¶
Field.disabled¶
The disabled boolean argument, when set to True, disables a form field using the disabled HTML attribute so that it won’t be editable by users. Even if a user tampers with the field’s value submitted to the server, it will be ignored in favor of the value from the form’s initial data.

Checking if the field data has changed¶
has_changed()¶
Field.has_changed()¶
The has_changed() method is used to determine if the field value has changed from the initial value. Returns True or False.

See the Form.has_changed() documentation for more information.

Built-in Field classes¶
Naturally, the forms library comes with a set of Field classes that represent common validation needs. This section documents each built-in field.

For each field, we describe the default widget used if you don’t specify widget. We also specify the value returned when you provide an empty value (see the section on required above to understand what that means).

BooleanField¶
class BooleanField(**kwargs)¶
Default widget: CheckboxInput
Empty value: False
Normalizes to: A Python True or False value.
Validates that the value is True (e.g. the check box is checked) if the field has required=True.
Error message keys: required
Note

Since all Field subclasses have required=True by default, the validation condition here is important. If you want to include a boolean in your form that can be either True or False (e.g. a checked or unchecked checkbox), you must remember to pass in required=False when creating the BooleanField.

CharField¶
class CharField(**kwargs)¶
Default widget: TextInput
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A string.
Uses MaxLengthValidator and MinLengthValidator if max_length and min_length are provided. Otherwise, all inputs are valid.
Error message keys: required, max_length, min_length
Has four optional arguments for validation:

max_length¶
min_length¶
If provided, these arguments ensure that the string is at most or at least the given length.

strip¶
If True (default), the value will be stripped of leading and trailing whitespace.

empty_value¶
The value to use to represent “empty”. Defaults to an empty string.

ChoiceField¶
class ChoiceField(**kwargs)¶
Default widget: Select
Empty value: '' (an empty string)
Normalizes to: A string.
Validates that the given value exists in the list of choices.
Error message keys: required, invalid_choice
The invalid_choice error message may contain %(value)s, which will be replaced with the selected choice.

Takes one extra argument:

choices¶
Either an iterable of 2-tuples to use as choices for this field, enumeration choices, or a callable that returns such an iterable. This argument accepts the same formats as the choices argument to a model field. See the model field reference documentation on choices for more details. If the argument is a callable, it is evaluated each time the field’s form is initialized, in addition to during rendering. Defaults to an empty list.

TypedChoiceField¶
class TypedChoiceField(**kwargs)¶
Just like a ChoiceField, except TypedChoiceField takes two extra arguments, coerce and empty_value.

Default widget: Select
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A value of the type provided by the coerce argument.
Validates that the given value exists in the list of choices and can be coerced.
Error message keys: required, invalid_choice
Takes extra arguments:

coerce¶
A function that takes one argument and returns a coerced value. Examples include the built-in int, float, bool and other types. Defaults to an identity function. Note that coercion happens after input validation, so it is possible to coerce to a value not present in choices.

empty_value¶
The value to use to represent “empty.” Defaults to the empty string; None is another common choice here. Note that this value will not be coerced by the function given in the coerce argument, so choose it accordingly.

DateField¶
class DateField(**kwargs)¶
Default widget: DateInput
Empty value: None
Normalizes to: A Python datetime.date object.
Validates that the given value is either a datetime.date, datetime.datetime or string formatted in a particular date format.
Error message keys: required, invalid
Takes one optional argument:

input_formats¶
A list of formats used to attempt to convert a string to a valid datetime.date object.

If no input_formats argument is provided, the default input formats are taken from DATE_INPUT_FORMATS if USE_L10N is False, or from the active locale format DATE_INPUT_FORMATS key if localization is enabled. See also format localization.

DateTimeField¶
class DateTimeField(**kwargs)¶
Default widget: DateTimeInput
Empty value: None
Normalizes to: A Python datetime.datetime object.
Validates that the given value is either a datetime.datetime, datetime.date or string formatted in a particular datetime format.
Error message keys: required, invalid
Takes one optional argument:

input_formats¶
A list of formats used to attempt to convert a string to a valid datetime.datetime object, in addition to ISO 8601 formats.

The field always accepts strings in ISO 8601 formatted dates or similar recognized by parse_datetime(). Some examples are:

* '2006-10-25 14:30:59'
* '2006-10-25T14:30:59'
* '2006-10-25 14:30'
* '2006-10-25T14:30'
* '2006-10-25T14:30Z'
* '2006-10-25T14:30+02:00'
* '2006-10-25'
If no input_formats argument is provided, the default input formats are taken from DATETIME_INPUT_FORMATS and DATE_INPUT_FORMATS if USE_L10N is False, or from the active locale format DATETIME_INPUT_FORMATS and DATE_INPUT_FORMATS keys if localization is enabled. See also format localization.

Changed in Django 3.1:
Support for ISO 8601 date string parsing (including optional timezone) was added.

The fallback on DATE_INPUT_FORMATS in the default input_formats was added.

DecimalField¶
class DecimalField(**kwargs)¶
Default widget: NumberInput when Field.localize is False, else TextInput.
Empty value: None
Normalizes to: A Python decimal.
Validates that the given value is a decimal. Uses MaxValueValidator and MinValueValidator if max_value and min_value are provided. Leading and trailing whitespace is ignored.
Error message keys: required, invalid, max_value, min_value, max_digits, max_decimal_places, max_whole_digits
The max_value and min_value error messages may contain %(limit_value)s, which will be substituted by the appropriate limit. Similarly, the max_digits, max_decimal_places and max_whole_digits error messages may contain %(max)s.

Takes four optional arguments:

max_value¶
min_value¶
These control the range of values permitted in the field, and should be given as decimal.Decimal values.

max_digits¶
The maximum number of digits (those before the decimal point plus those after the decimal point, with leading zeros stripped) permitted in the value.

decimal_places¶
The maximum number of decimal places permitted.

DurationField¶
class DurationField(**kwargs)¶
Default widget: TextInput
Empty value: None
Normalizes to: A Python timedelta.
Validates that the given value is a string which can be converted into a timedelta. The value must be between datetime.timedelta.min and datetime.timedelta.max.
Error message keys: required, invalid, overflow.
Accepts any format understood by parse_duration().

EmailField¶
class EmailField(**kwargs)¶
Default widget: EmailInput
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A string.
Uses EmailValidator to validate that the given value is a valid email address, using a moderately complex regular expression.
Error message keys: required, invalid
Has three optional arguments max_length, min_length, and empty_value which work just as they do for CharField.

FileField¶
class FileField(**kwargs)¶
Default widget: ClearableFileInput
Empty value: None
Normalizes to: An UploadedFile object that wraps the file content and file name into a single object.
Can validate that non-empty file data has been bound to the form.
Error message keys: required, invalid, missing, empty, max_length
Has two optional arguments for validation, max_length and allow_empty_file. If provided, these ensure that the file name is at most the given length, and that validation will succeed even if the file content is empty.

To learn more about the UploadedFile object, see the file uploads documentation.

When you use a FileField in a form, you must also remember to bind the file data to the form.

The max_length error refers to the length of the filename. In the error message for that key, %(max)d will be replaced with the maximum filename length and %(length)d will be replaced with the current filename length.

FilePathField¶
class FilePathField(**kwargs)¶
Default widget: Select
Empty value: '' (an empty string)
Normalizes to: A string.
Validates that the selected choice exists in the list of choices.
Error message keys: required, invalid_choice
The field allows choosing from files inside a certain directory. It takes five extra arguments; only path is required:

path¶
The absolute path to the directory whose contents you want listed. This directory must exist.

recursive¶
If False (the default) only the direct contents of path will be offered as choices. If True, the directory will be descended into recursively and all descendants will be listed as choices.

match¶
A regular expression pattern; only files with names matching this expression will be allowed as choices.

allow_files¶
Optional. Either True or False. Default is True. Specifies whether files in the specified location should be included. Either this or allow_folders must be True.

allow_folders¶
Optional. Either True or False. Default is False. Specifies whether folders in the specified location should be included. Either this or allow_files must be True.

FloatField¶
class FloatField(**kwargs)¶
Default widget: NumberInput when Field.localize is False, else TextInput.
Empty value: None
Normalizes to: A Python float.
Validates that the given value is a float. Uses MaxValueValidator and MinValueValidator if max_value and min_value are provided. Leading and trailing whitespace is allowed, as in Python’s float() function.
Error message keys: required, invalid, max_value, min_value
Takes two optional arguments for validation, max_value and min_value. These control the range of values permitted in the field.

ImageField¶
class ImageField(**kwargs)¶
Default widget: ClearableFileInput
Empty value: None
Normalizes to: An UploadedFile object that wraps the file content and file name into a single object.
Validates that file data has been bound to the form. Also uses FileExtensionValidator to validate that the file extension is supported by Pillow.
Error message keys: required, invalid, missing, empty, invalid_image
Using an ImageField requires that Pillow is installed with support for the image formats you use. If you encounter a corrupt image error when you upload an image, it usually means that Pillow doesn’t understand its format. To fix this, install the appropriate library and reinstall Pillow.

When you use an ImageField on a form, you must also remember to bind the file data to the form.

After the field has been cleaned and validated, the UploadedFile object will have an additional image attribute containing the Pillow Image instance used to check if the file was a valid image. Pillow closes the underlying file descriptor after verifying an image, so whilst non-image data attributes, such as format, height, and width, are available, methods that access the underlying image data, such as getdata() or getpixel(), cannot be used without reopening the file. For example:

>>> from PIL import Image
>>> from django import forms
>>> from django.core.files.uploadedfile import SimpleUploadedFile
>>> class ImageForm(forms.Form):
...     img = forms.ImageField()
>>> file_data = {'img': SimpleUploadedFile('test.png', <file data>)}
>>> form = ImageForm({}, file_data)
# Pillow closes the underlying file descriptor.
>>> form.is_valid()
True
>>> image_field = form.cleaned_data['img']
>>> image_field.image
<PIL.PngImagePlugin.PngImageFile image mode=RGBA size=191x287 at 0x7F5985045C18>
>>> image_field.image.width
191
>>> image_field.image.height
287
>>> image_field.image.format
'PNG'
>>> image_field.image.getdata()
# Raises AttributeError: 'NoneType' object has no attribute 'seek'.
>>> image = Image.open(image_field)
>>> image.getdata()
<ImagingCore object at 0x7f5984f874b0>
Additionally, UploadedFile.content_type will be updated with the image’s content type if Pillow can determine it, otherwise it will be set to None.

IntegerField¶
class IntegerField(**kwargs)¶
Default widget: NumberInput when Field.localize is False, else TextInput.
Empty value: None
Normalizes to: A Python integer.
Validates that the given value is an integer. Uses MaxValueValidator and MinValueValidator if max_value and min_value are provided. Leading and trailing whitespace is allowed, as in Python’s int() function.
Error message keys: required, invalid, max_value, min_value
The max_value and min_value error messages may contain %(limit_value)s, which will be substituted by the appropriate limit.

Takes two optional arguments for validation:

max_value¶
min_value¶
These control the range of values permitted in the field.

JSONField¶
class JSONField(encoder=None, decoder=None, **kwargs)¶
New in Django 3.1.
A field which accepts JSON encoded data for a JSONField.

Default widget: Textarea
Empty value: None
Normalizes to: A Python representation of the JSON value (usually as a dict, list, or None), depending on JSONField.decoder.
Validates that the given value is a valid JSON.
Error message keys: required, invalid
Takes two optional arguments:

encoder¶
A json.JSONEncoder subclass to serialize data types not supported by the standard JSON serializer (e.g. datetime.datetime or UUID). For example, you can use the DjangoJSONEncoder class.

Defaults to json.JSONEncoder.

decoder¶
A json.JSONDecoder subclass to deserialize the input. Your deserialization may need to account for the fact that you can’t be certain of the input type. For example, you run the risk of returning a datetime that was actually a string that just happened to be in the same format chosen for datetimes.

The decoder can be used to validate the input. If json.JSONDecodeError is raised during the deserialization, a ValidationError will be raised.

Defaults to json.JSONDecoder.

Note

If you use a ModelForm, the encoder and decoder from JSONField will be used.

User friendly forms

JSONField is not particularly user friendly in most cases. However, it is a useful way to format data from a client-side widget for submission to the server.

GenericIPAddressField¶
class GenericIPAddressField(**kwargs)¶
A field containing either an IPv4 or an IPv6 address.

Default widget: TextInput
Empty value: '' (an empty string)
Normalizes to: A string. IPv6 addresses are normalized as described below.
Validates that the given value is a valid IP address.
Error message keys: required, invalid
The IPv6 address normalization follows RFC 4291#section-2.2 section 2.2, including using the IPv4 format suggested in paragraph 3 of that section, like ::ffff:192.0.2.0. For example, 2001:0::0:01 would be normalized to 2001::1, and ::ffff:0a0a:0a0a to ::ffff:10.10.10.10. All characters are converted to lowercase.

Takes two optional arguments:

protocol¶
Limits valid inputs to the specified protocol. Accepted values are both (default), IPv4 or IPv6. Matching is case insensitive.

unpack_ipv4¶
Unpacks IPv4 mapped addresses like ::ffff:192.0.2.1. If this option is enabled that address would be unpacked to 192.0.2.1. Default is disabled. Can only be used when protocol is set to 'both'.

MultipleChoiceField¶
class MultipleChoiceField(**kwargs)¶
Default widget: SelectMultiple
Empty value: [] (an empty list)
Normalizes to: A list of strings.
Validates that every value in the given list of values exists in the list of choices.
Error message keys: required, invalid_choice, invalid_list
The invalid_choice error message may contain %(value)s, which will be replaced with the selected choice.

Takes one extra required argument, choices, as for ChoiceField.

TypedMultipleChoiceField¶
class TypedMultipleChoiceField(**kwargs)¶
Just like a MultipleChoiceField, except TypedMultipleChoiceField takes two extra arguments, coerce and empty_value.

Default widget: SelectMultiple
Empty value: Whatever you’ve given as empty_value
Normalizes to: A list of values of the type provided by the coerce argument.
Validates that the given values exists in the list of choices and can be coerced.
Error message keys: required, invalid_choice
The invalid_choice error message may contain %(value)s, which will be replaced with the selected choice.

Takes two extra arguments, coerce and empty_value, as for TypedChoiceField.

NullBooleanField¶
class NullBooleanField(**kwargs)¶
Default widget: NullBooleanSelect
Empty value: None
Normalizes to: A Python True, False or None value.
Validates nothing (i.e., it never raises a ValidationError).
NullBooleanField may be used with widgets such as Select or RadioSelect by providing the widget choices:

NullBooleanField(
    widget=Select(
        choices=[
            ('', 'Unknown'),
            (True, 'Yes'),
            (False, 'No'),
        ]
    )
)
RegexField¶
class RegexField(**kwargs)¶
Default widget: TextInput
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A string.
Uses RegexValidator to validate that the given value matches a certain regular expression.
Error message keys: required, invalid
Takes one required argument:

regex¶
A regular expression specified either as a string or a compiled regular expression object.

Also takes max_length, min_length, strip, and empty_value which work just as they do for CharField.

strip¶
Defaults to False. If enabled, stripping will be applied before the regex validation.

SlugField¶
class SlugField(**kwargs)¶
Default widget: TextInput
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A string.
Uses validate_slug or validate_unicode_slug to validate that the given value contains only letters, numbers, underscores, and hyphens.
Error messages: required, invalid
This field is intended for use in representing a model SlugField in forms.

Takes two optional parameters:

allow_unicode¶
A boolean instructing the field to accept Unicode letters in addition to ASCII letters. Defaults to False.

empty_value¶
The value to use to represent “empty”. Defaults to an empty string.

TimeField¶
class TimeField(**kwargs)¶
Default widget: TimeInput
Empty value: None
Normalizes to: A Python datetime.time object.
Validates that the given value is either a datetime.time or string formatted in a particular time format.
Error message keys: required, invalid
Takes one optional argument:

input_formats¶
A list of formats used to attempt to convert a string to a valid datetime.time object.

If no input_formats argument is provided, the default input formats are taken from TIME_INPUT_FORMATS if USE_L10N is False, or from the active locale format TIME_INPUT_FORMATS key if localization is enabled. See also format localization.

URLField¶
class URLField(**kwargs)¶
Default widget: URLInput
Empty value: Whatever you’ve given as empty_value.
Normalizes to: A string.
Uses URLValidator to validate that the given value is a valid URL.
Error message keys: required, invalid
Has three optional arguments max_length, min_length, and empty_value which work just as they do for CharField.

UUIDField¶
class UUIDField(**kwargs)¶
Default widget: TextInput
Empty value: None
Normalizes to: A UUID object.
Error message keys: required, invalid
This field will accept any string format accepted as the hex argument to the UUID constructor.

Slightly complex built-in Field classes¶
ComboField¶
class ComboField(**kwargs)¶
Default widget: TextInput
Empty value: '' (an empty string)
Normalizes to: A string.
Validates the given value against each of the fields specified as an argument to the ComboField.
Error message keys: required, invalid
Takes one extra required argument:

fields¶
The list of fields that should be used to validate the field’s value (in the order in which they are provided).

>>> from django.forms import ComboField
>>> f = ComboField(fields=[CharField(max_length=20), EmailField()])
>>> f.clean('test@example.com')
'test@example.com'
>>> f.clean('longemailaddress@example.com')
Traceback (most recent call last):
...
ValidationError: ['Ensure this value has at most 20 characters (it has 28).']
MultiValueField¶
class MultiValueField(fields=(), **kwargs)¶
Default widget: TextInput
Empty value: '' (an empty string)
Normalizes to: the type returned by the compress method of the subclass.
Validates the given value against each of the fields specified as an argument to the MultiValueField.
Error message keys: required, invalid, incomplete
Aggregates the logic of multiple fields that together produce a single value.

This field is abstract and must be subclassed. In contrast with the single-value fields, subclasses of MultiValueField must not implement clean() but instead - implement compress().

Takes one extra required argument:

fields¶
A tuple of fields whose values are cleaned and subsequently combined into a single value. Each value of the field is cleaned by the corresponding field in fields – the first value is cleaned by the first field, the second value is cleaned by the second field, etc. Once all fields are cleaned, the list of clean values is combined into a single value by compress().

Also takes some optional arguments:

require_all_fields¶
Defaults to True, in which case a required validation error will be raised if no value is supplied for any field.

When set to False, the Field.required attribute can be set to False for individual fields to make them optional. If no value is supplied for a required field, an incomplete validation error will be raised.

A default incomplete error message can be defined on the MultiValueField subclass, or different messages can be defined on each individual field. For example:

from django.core.validators import RegexValidator

class PhoneField(MultiValueField):
    def __init__(self, **kwargs):
        # Define one message for all fields.
        error_messages = {
            'incomplete': 'Enter a country calling code and a phone number.',
        }
        # Or define a different message for each field.
        fields = (
            CharField(
                error_messages={'incomplete': 'Enter a country calling code.'},
                validators=[
                    RegexValidator(r'^[0-9]+$', 'Enter a valid country calling code.'),
                ],
            ),
            CharField(
                error_messages={'incomplete': 'Enter a phone number.'},
                validators=[RegexValidator(r'^[0-9]+$', 'Enter a valid phone number.')],
            ),
            CharField(
                validators=[RegexValidator(r'^[0-9]+$', 'Enter a valid extension.')],
                required=False,
            ),
        )
        super().__init__(
            error_messages=error_messages, fields=fields,
            require_all_fields=False, **kwargs
        )
widget¶
Must be a subclass of django.forms.MultiWidget. Default value is TextInput, which probably is not very useful in this case.

compress(data_list)¶
Takes a list of valid values and returns a “compressed” version of those values – in a single value. For example, SplitDateTimeField is a subclass which combines a time field and a date field into a datetime object.

This method must be implemented in the subclasses.

SplitDateTimeField¶
class SplitDateTimeField(**kwargs)¶
Default widget: SplitDateTimeWidget
Empty value: None
Normalizes to: A Python datetime.datetime object.
Validates that the given value is a datetime.datetime or string formatted in a particular datetime format.
Error message keys: required, invalid, invalid_date, invalid_time
Takes two optional arguments:

input_date_formats¶
A list of formats used to attempt to convert a string to a valid datetime.date object.

If no input_date_formats argument is provided, the default input formats for DateField are used.

input_time_formats¶
A list of formats used to attempt to convert a string to a valid datetime.time object.

If no input_time_formats argument is provided, the default input formats for TimeField are used.

Fields which handle relationships¶
Two fields are available for representing relationships between models: ModelChoiceField and ModelMultipleChoiceField. Both of these fields require a single queryset parameter that is used to create the choices for the field. Upon form validation, these fields will place either one model object (in the case of ModelChoiceField) or multiple model objects (in the case of ModelMultipleChoiceField) into the cleaned_data dictionary of the form.

For more complex uses, you can specify queryset=None when declaring the form field and then populate the queryset in the form’s __init__() method:

class FooMultipleChoiceForm(forms.Form):
    foo_select = forms.ModelMultipleChoiceField(queryset=None)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['foo_select'].queryset = ...
Both ModelChoiceField and ModelMultipleChoiceField have an iterator attribute which specifies the class used to iterate over the queryset when generating choices. See Iterating relationship choices for details.

ModelChoiceField¶
class ModelChoiceField(**kwargs)¶
Default widget: Select
Empty value: None
Normalizes to: A model instance.
Validates that the given id exists in the queryset.
Error message keys: required, invalid_choice
Allows the selection of a single model object, suitable for representing a foreign key. Note that the default widget for ModelChoiceField becomes impractical when the number of entries increases. You should avoid using it for more than 100 items.

A single argument is required:

queryset¶
A QuerySet of model objects from which the choices for the field are derived and which is used to validate the user’s selection. It’s evaluated when the form is rendered.

ModelChoiceField also takes two optional arguments:

empty_label¶
By default the <select> widget used by ModelChoiceField will have an empty choice at the top of the list. You can change the text of this label (which is "---------" by default) with the empty_label attribute, or you can disable the empty label entirely by setting empty_label to None:

# A custom empty label
field1 = forms.ModelChoiceField(queryset=..., empty_label="(Nothing)")

# No empty label
field2 = forms.ModelChoiceField(queryset=..., empty_label=None)
Note that if a ModelChoiceField is required and has a default initial value, no empty choice is created (regardless of the value of empty_label).

to_field_name¶
This optional argument is used to specify the field to use as the value of the choices in the field’s widget. Be sure it’s a unique field for the model, otherwise the selected value could match more than one object. By default it is set to None, in which case the primary key of each object will be used. For example:

# No custom to_field_name
field1 = forms.ModelChoiceField(queryset=...)
would yield:

<select id="id_field1" name="field1">
<option value="obj1.pk">Object1</option>
<option value="obj2.pk">Object2</option>
...
</select>
and:

# to_field_name provided
field2 = forms.ModelChoiceField(queryset=..., to_field_name="name")
would yield:

<select id="id_field2" name="field2">
<option value="obj1.name">Object1</option>
<option value="obj2.name">Object2</option>
...
</select>
ModelChoiceField also has the attribute:

iterator¶
The iterator class used to generate field choices from queryset. By default, ModelChoiceIterator.

The __str__() method of the model will be called to generate string representations of the objects for use in the field’s choices. To provide customized representations, subclass ModelChoiceField and override label_from_instance. This method will receive a model object and should return a string suitable for representing it. For example:

from django.forms import ModelChoiceField

class MyModelChoiceField(ModelChoiceField):
    def label_from_instance(self, obj):
        return "My Object #%i" % obj.id
ModelMultipleChoiceField¶
class ModelMultipleChoiceField(**kwargs)¶
Default widget: SelectMultiple
Empty value: An empty QuerySet (self.queryset.none())
Normalizes to: A QuerySet of model instances.
Validates that every id in the given list of values exists in the queryset.
Error message keys: required, invalid_list, invalid_choice, invalid_pk_value
The invalid_choice message may contain %(value)s and the invalid_pk_value message may contain %(pk)s, which will be substituted by the appropriate values.

Allows the selection of one or more model objects, suitable for representing a many-to-many relation. As with ModelChoiceField, you can use label_from_instance to customize the object representations.

A single argument is required:

queryset¶
Same as ModelChoiceField.queryset.

Takes one optional argument:

to_field_name¶
Same as ModelChoiceField.to_field_name.

ModelMultipleChoiceField also has the attribute:

iterator¶
Same as ModelChoiceField.iterator.

Deprecated since version 3.1:
The list message is deprecated, use invalid_list instead.

Iterating relationship choices¶
By default, ModelChoiceField and ModelMultipleChoiceField use ModelChoiceIterator to generate their field choices.

When iterated, ModelChoiceIterator yields 2-tuple choices containing ModelChoiceIteratorValue instances as the first value element in each choice. ModelChoiceIteratorValue wraps the choice value whilst maintaining a reference to the source model instance that can be used in custom widget implementations, for example, to add data-* attributes to <option> elements.

For example, consider the following models:

from django.db import models

class Topping(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(decimal_places=2, max_digits=6)

    def __str__(self):
        return self.name

class Pizza(models.Model):
    topping = models.ForeignKey(Topping, on_delete=models.CASCADE)
You can use a Select widget subclass to include the value of Topping.price as the HTML attribute data-price for each <option> element:

from django import forms

class ToppingSelect(forms.Select):
    def create_option(self, name, value, label, selected, index, subindex=None, attrs=None):
        option = super().create_option(name, value, label, selected, index, subindex, attrs)
        if value:
            option['attrs']['data-price'] = value.instance.price
        return option

class PizzaForm(forms.ModelForm):
    class Meta:
        model = Pizza
        fields = ['topping']
        widgets = {'topping': ToppingSelect}
This will render the Pizza.topping select as:

<select id="id_topping" name="topping" required>
<option value="" selected>---------</option>
<option value="1" data-price="1.50">mushrooms</option>
<option value="2" data-price="1.25">onions</option>
<option value="3" data-price="1.75">peppers</option>
<option value="4" data-price="2.00">pineapple</option>
</select>
For more advanced usage you may subclass ModelChoiceIterator in order to customize the yielded 2-tuple choices.

ModelChoiceIterator¶
class ModelChoiceIterator(field)¶
The default class assigned to the iterator attribute of ModelChoiceField and ModelMultipleChoiceField. An iterable that yields 2-tuple choices from the queryset.

A single argument is required:

field¶
The instance of ModelChoiceField or ModelMultipleChoiceField to iterate and yield choices.

ModelChoiceIterator has the following method:

__iter__()¶
Yields 2-tuple choices, in the (value, label) format used by ChoiceField.choices. The first value element is a ModelChoiceIteratorValue instance.

Changed in Django 3.1:
In older versions, the first value element in the choice tuple is the field value itself, rather than a ModelChoiceIteratorValue instance. In most cases this proxies transparently but, if you need the field value itself, use the ModelChoiceIteratorValue.value attribute instead.

ModelChoiceIteratorValue¶
class ModelChoiceIteratorValue(value, instance)¶
New in Django 3.1.
Two arguments are required:

value¶
The value of the choice. This value is used to render the value attribute of an HTML <option> element.

instance¶
The model instance from the queryset. The instance can be accessed in custom ChoiceWidget.create_option() implementations to adjust the rendered HTML.

ModelChoiceIteratorValue has the following method:

__str__()¶
Return value as a string to be rendered in HTML.

Creating custom fields¶
If the built-in Field classes don’t meet your needs, you can create custom Field classes. To do this, create a subclass of django.forms.Field. Its only requirements are that it implement a clean() method and that its __init__() method accept the core arguments mentioned above (required, label, initial, widget, help_text).

You can also customize how a field will be accessed by overriding get_bound_field().`,
        the_title: `Form fields In Django`,
    },
    {
        the_body: `Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.

G.K. Chesterton by way of Neil Gaiman, Coraline

I’m really excited we’re going on this journey together. This is a book on implementing interpreters for programming languages. It’s also a book on how to design a language worth implementing. It’s the book I wish I’d had when I first started getting into languages, and it’s the book I’ve been writing in my head for nearly a decade.

To my friends and family, sorry I’ve been so absentminded!

In these pages, we will walk step-by-step through two complete interpreters for a full-featured language. I assume this is your first foray into languages, so I’ll cover each concept and line of code you need to build a complete, usable, fast language implementation.

In order to cram two full implementations inside one book without it turning into a doorstop, this text is lighter on theory than others. As we build each piece of the system, I will introduce the history and concepts behind it. I’ll try to get you familiar with the lingo so that if you ever find yourself at a cocktail party full of PL (programming language) researchers, you’ll fit in.

Strangely enough, a situation I have found myself in multiple times. You wouldn’t believe how much some of them can drink.

But we’re mostly going to spend our brain juice getting the language up and running. This is not to say theory isn’t important. Being able to reason precisely and formally about syntax and semantics is a vital skill when working on a language. But, personally, I learn best by doing. It’s hard for me to wade through paragraphs full of abstract concepts and really absorb them. But if I’ve coded something, run it, and debugged it, then I get it.

Static type systems in particular require rigorous formal reasoning. Hacking on a type system has the same feel as proving a theorem in mathematics.

It turns out this is no coincidence. In the early half of last century, Haskell Curry and William Alvin Howard showed that they are two sides of the same coin: the Curry-Howard isomorphism.

That’s my goal for you. I want you to come away with a solid intuition of how a real language lives and breathes. My hope is that when you read other, more theoretical books later, the concepts there will firmly stick in your mind, adhered to this tangible substrate.

1 . 1Why Learn This Stuff?
Every introduction to every compiler book seems to have this section. I don’t know what it is about programming languages that causes such existential doubt. I don’t think ornithology books worry about justifying their existence. They assume the reader loves birds and start teaching.

But programming languages are a little different. I suppose it is true that the odds of any of us creating a broadly successful, general-purpose programming language are slim. The designers of the world’s widely used languages could fit in a Volkswagen bus, even without putting the pop-top camper up. If joining that elite group was the only reason to learn languages, it would be hard to justify. Fortunately, it isn’t.

1 . 1 . 1Little languages are everywhere
For every successful general-purpose language, there are a thousand successful niche ones. We used to call them “little languages”, but inflation in the jargon economy led to the name “domain-specific languages”. These are pidgins tailor-built to a specific task. Think application scripting languages, template engines, markup formats, and configuration files.

A random selection of little languages.

A random selection of some little languages you might run into.

Almost every large software project needs a handful of these. When you can, it’s good to reuse an existing one instead of rolling your own. Once you factor in documentation, debuggers, editor support, syntax highlighting, and all of the other trappings, doing it yourself becomes a tall order.

But there’s still a good chance you’ll find yourself needing to whip up a parser or other tool when there isn’t an existing library that fits your needs. Even when you are reusing some existing implementation, you’ll inevitably end up needing to debug and maintain it and poke around in its guts.

1 . 1 . 2Languages are great exercise
Long distance runners sometimes train with weights strapped to their ankles or at high altitudes where the atmosphere is thin. When they later unburden themselves, the new relative ease of light limbs and oxygen-rich air enables them to run farther and faster.

Implementing a language is a real test of programming skill. The code is complex and performance critical. You must master recursion, dynamic arrays, trees, graphs, and hash tables. You probably use hash tables at least in your day-to-day programming, but do you really understand them? Well, after we’ve crafted our own from scratch, I guarantee you will.

While I intend to show you that an interpreter isn’t as daunting as you might believe, implementing one well is still a challenge. Rise to it, and you’ll come away a stronger programmer, and smarter about how you use data structures and algorithms in your day job.

1 . 1 . 3One more reason
This last reason is hard for me to admit, because it’s so close to my heart. Ever since I learned to program as a kid, I felt there was something magical about languages. When I first tapped out BASIC programs one key at a time I couldn’t conceive how BASIC itself was made.

Later, the mixture of awe and terror on my college friends’ faces when talking about their compilers class was enough to convince me language hackers were a different breed of human—some sort of wizards granted privileged access to arcane arts.

It’s a charming image, but it has a darker side. I didn’t feel like a wizard, so I was left thinking I lacked some inborn quality necessary to join the cabal. Though I’ve been fascinated by languages ever since I doodled made-up keywords in my school notebook, it took me decades to muster the courage to try to really learn them. That “magical” quality, that sense of exclusivity, excluded me.

And its practitioners don’t hesitate to play up this image. Two of the seminal texts on programming languages feature a dragon and a wizard on their covers.

When I did finally start cobbling together my own little interpreters, I quickly learned that, of course, there is no magic at all. It’s just code, and the people who hack on languages are just people.

There are a few techniques you don’t often encounter outside of languages, and some parts are a little difficult. But not more difficult than other obstacles you’ve overcome. My hope is that if you’ve felt intimidated by languages and this book helps you overcome that fear, maybe I’ll leave you just a tiny bit braver than you were before.

And, who knows, maybe you will make the next great language. Someone has to.

1 . 2How the Book Is Organized
This book is broken into three parts. You’re reading the first one now. It’s a couple of chapters to get you oriented, teach you some of the lingo that language hackers use, and introduce you to Lox, the language we’ll be implementing.

Each of the other two parts builds one complete Lox interpreter. Within those parts, each chapter is structured the same way. The chapter takes a single language feature, teaches you the concepts behind it, and walks you through an implementation.

It took a good bit of trial and error on my part, but I managed to carve up the two interpreters into chapter-sized chunks that build on the previous chapters but require nothing from later ones. From the very first chapter, you’ll have a working program you can run and play with. With each passing chapter, it grows increasingly full-featured until you eventually have a complete language.

Aside from copious, scintillating English prose, chapters have a few other delightful facets:

1 . 2 . 1The code
We’re about crafting interpreters, so this book contains real code. Every single line of code needed is included, and each snippet tells you where to insert it in your ever-growing implementation.

Many other language books and language implementations use tools like Lex and Yacc, so-called compiler-compilers, that automatically generate some of the source files for an implementation from some higher-level description. There are pros and cons to tools like those, and strong opinions—some might say religious convictions—on both sides.

Yacc is a tool that takes in a grammar file and produces a source file for a compiler, so it’s sort of like a “compiler” that outputs a compiler, which is where we get the term “compiler-compiler”.

Yacc wasn’t the first of its ilk, which is why it’s named “Yacc”—Yet Another Compiler-Compiler. A later similar tool is Bison, named as a pun on the pronunciation of Yacc like “yak”.

A yak.
If you find all of these little self-references and puns charming and fun, you’ll fit right in here. If not, well, maybe the language nerd sense of humor is an acquired taste.

We will abstain from using them here. I want to ensure there are no dark corners where magic and confusion can hide, so we’ll write everything by hand. As you’ll see, it’s not as bad as it sounds, and it means you really will understand each line of code and how both interpreters work.

A book has different constraints from the “real world” and so the coding style here might not always reflect the best way to write maintainable production software. If I seem a little cavalier about, say, omitting private or declaring a global variable, understand I do so to keep the code easier on your eyes. The pages here aren’t as wide as your IDE and every character counts.

Also, the code doesn’t have many comments. That’s because each handful of lines is surrounded by several paragraphs of honest-to-God prose explaining it. When you write a book to accompany your program, you are welcome to omit comments too. Otherwise, you should probably use // a little more than I do.

While the book contains every line of code and teaches what each means, it does not describe the machinery needed to compile and run the interpreter. I assume you can slap together a makefile or a project in your IDE of choice in order to get the code to run. Those kinds of instructions get out of date quickly, and I want this book to age like XO brandy, not backyard hooch.

1 . 2 . 2Snippets
Since the book contains literally every line of code needed for the implementations, the snippets are quite precise. Also, because I try to keep the program in a runnable state even when major features are missing, sometimes we add temporary code that gets replaced in later snippets.

A snippet with all the bells and whistles looks like this:

      default:
lox/Scanner.java
in scanToken()
replace 1 line
        if (isDigit(c)) {
          number();
        } else {
          Lox.error(line, "Unexpected character.");
        }
        break;
In the center, you have the new code to add. It may have a few faded out lines above or below to show where it goes in the existing surrounding code. There is also a little blurb telling you in which file and where to place the snippet. If that blurb says “replace _ lines”, there is some existing code between the faded lines that you need to remove and replace with the new snippet.

1 . 2 . 3Asides
Asides contain biographical sketches, historical background, references to related topics, and suggestions of other areas to explore. There’s nothing that you need to know in them to understand later parts of the book, so you can skip them if you want. I won’t judge you, but I might be a little sad.

Well, some asides do, at least. Most of them are just dumb jokes and amateurish drawings.

1 . 2 . 4Challenges
Each chapter ends with a few exercises. Unlike textbook problem sets, which tend to review material you already covered, these are to help you learn more than what’s in the chapter. They force you to step off the guided path and explore on your own. They will make you research other languages, figure out how to implement features, or otherwise get you out of your comfort zone.

Vanquish the challenges and you’ll come away with a broader understanding and possibly a few bumps and scrapes. Or skip them if you want to stay inside the comfy confines of the tour bus. It’s your book.

A word of warning: the challenges often ask you to make changes to the interpreter you’re building. You’ll want to implement those in a copy of your code. The later chapters assume your interpreter is in a pristine (“unchallenged”?) state.

1 . 2 . 5Design notes
Most “programming language” books are strictly programming language implementation books. They rarely discuss how one might happen to design the language being implemented. Implementation is fun because it is so precisely defined. We programmers seem to have an affinity for things that are black and white, ones and zeroes.

I know a lot of language hackers whose careers are based on this. You slide a language spec under their door, wait a few months, and code and benchmark results come out.

Personally, I think the world needs only so many implementations of FORTRAN 77. At some point, you find yourself designing a new language. Once you start playing that game, then the softer, human side of the equation becomes paramount. Things like which features are easy to learn, how to balance innovation and familiarity, what syntax is more readable and to whom.

Hopefully your new language doesn’t hardcode assumptions about the width of a punched card into its grammar.

All of that stuff profoundly affects the success of your new language. I want your language to succeed, so in some chapters I end with a “design note”, a little essay on some corner of the human aspect of programming languages. I’m no expert on this—I don’t know if anyone really is—so take these with a large pinch of salt. That should make them tastier food for thought, which is my main aim.

1 . 3The First Interpreter
We’ll write our first interpreter, jlox, in Java. The focus is on concepts. We’ll write the simplest, cleanest code we can to correctly implement the semantics of the language. This will get us comfortable with the basic techniques and also hone our understanding of exactly how the language is supposed to behave.

The book uses Java and C, but readers have ported the code to many other languages. If the languages I picked aren’t your bag, take a look at those.

Java is a great language for this. It’s high level enough that we don’t get overwhelmed by fiddly implementation details, but it’s still pretty explicit. Unlike in scripting languages, there tends to be less complex machinery hiding under the hood, and you’ve got static types to see what data structures you’re working with.

I also chose Java specifically because it is an object-oriented language. That paradigm swept the programming world in the ’90s and is now the dominant way of thinking for millions of programmers. Odds are good you’re already used to organizing code into classes and methods, so we’ll keep you in that comfort zone.

While academic language folks sometimes look down on object-oriented languages, the reality is that they are widely used even for language work. GCC and LLVM are written in C++, as are most JavaScript virtual machines. Object-oriented languages are ubiquitous, and the tools and compilers for a language are often written in the same language.

A compiler reads files in one language, translates them, and outputs files in another language. You can implement a compiler in any language, including the same language it compiles, a process called “self-hosting”.

You can’t compile your compiler using itself yet, but if you have another compiler for your language written in some other language, you use that one to compile your compiler once. Now you can use the compiled version of your own compiler to compile future versions of itself, and you can discard the original one compiled from the other compiler. This is called “bootstrapping”, from the image of pulling yourself up by your own bootstraps.

Fact: This is the primary mode of transportation of the American cowboy.
And, finally, Java is hugely popular. That means there’s a good chance you already know it, so there’s less for you to learn to get going in the book. If you aren’t that familiar with Java, don’t freak out. I try to stick to a fairly minimal subset of it. I use the diamond operator from Java 7 to make things a little more terse, but that’s about it as far as “advanced” features go. If you know another object-oriented language, like C# or C++, you can muddle through.

By the end of part II, we’ll have a simple, readable implementation. It’s not very fast, but it’s correct. However, it work by taking advantage of the Java virtual machine’s own runtime facilities. We want to learn how Java itself implements those things.

1 . 4The Second Interpreter
So in the next part, we start all over again, but this time in C. C is the perfect language for understanding how an implementation really works, all the way down to the bytes in memory and the code flowing through the CPU.

A big reason that we’re using C is so I can show you things C is particularly good at, but that does mean you’ll need to be pretty comfortable with it. You don’t have to be the reincarnation of Dennis Ritchie, but you shouldn’t be spooked by pointers either.

If you aren’t there yet, pick up an introductory book on C and chew through it, then come back here when you’re done. In return, you’ll come away from this book an even stronger C programmer. That’s useful given how many language implementations are written in C: Lua, CPython, and Ruby’s MRI, to name a few.

In our C interpreter, clox, we are forced to implement for ourselves all the things Java gave us for free. We’ll write our own dynamic array and hash table. We’ll decide how objects are represented in memory, and build a garbage collector to reclaim them.

I pronounce the name like “sea-locks”, but you can say it “clocks” or even “clochs”, where you pronounce the “x” like the Greeks do if it makes you happy.

Our Java implementation was focused on being correct. Now that we have that down, we’ll turn to also being fast. Our C interpreter will contain a compiler that translates Lox to an efficient bytecode representation (don’t worry, I’ll get into what that means soon), which it then executes. This is the same technique used by implementations of Lua, Python, Ruby, PHP, and many other successful languages.

Did you think this was just an interpreter book? It’s a compiler book as well. Two for the price of one!

We’ll even try our hand at benchmarking and optimization. By the end, we’ll have a robust, accurate, fast interpreter for our language, able to keep up with other professional caliber implementations out there. Not bad for one book and a few thousand lines of code.

CHALLENGES
There are at least six domain-specific languages used in the little system I cobbled together to write and publish this book. What are they?

Get a “Hello, world!” program written and running in Java. Set up whatever makefiles or IDE projects you need to get it working. If you have a debugger, get comfortable with it and step through your program as it runs.

Do the same thing for C. To get some practice with pointers, define a doubly linked list of heap-allocated strings. Write functions to insert, find, and delete items from it. Test them.

DESIGN NOTE: WHAT’S IN A NAME?
One of the hardest challenges in writing this book was coming up with a name for the language it implements. I went through pages of candidates before I found one that worked. As you’ll discover on the first day you start building your own language, naming is deviously hard. A good name satisfies a few criteria:

It isn’t in use. You can run into all sorts of trouble, legal and social, if you inadvertently step on someone else’s name.

It’s easy to pronounce. If things go well, hordes of people will be saying and writing your language’s name. Anything longer than a couple of syllables or a handful of letters will annoy them to no end.

It’s distinct enough to search for. People will Google your language’s name to learn about it, so you want a word that’s rare enough that most results point to your docs. Though, with the amount of AI search engines are packing today, that’s less of an issue. Still, you won’t be doing your users any favors if you name your language “for”.

It doesn’t have negative connotations across a number of cultures. This is hard to be on guard for, but it’s worth considering. The designer of Nimrod ended up renaming his language to “Nim” because too many people remember that Bugs Bunny used “Nimrod” as an insult. (Bugs was using it ironically.)

If your potential name makes it through that gauntlet, keep it. Don’t get hung up on trying to find an appellation that captures the quintessence of your language. If the names of the world’s other successful languages teach us anything, it’s that the name doesn’t matter much. All you need is a reasonably unique token.`,
        the_title: `Crafting Interpreters`,
    },
    {
        the_body: `You must have a map, no matter how rough. Otherwise you wander all over the place. In The Lord of the Rings I never made anyone go farther than he could on a given day.

J. R. R. Tolkien

We don’t want to wander all over the place, so before we set off, let’s scan the territory charted by previous language implementers. It will help us understand where we are going and the alternate routes others have taken.

First, let me establish a shorthand. Much of this book is about a language’s implementation, which is distinct from the language itself in some sort of Platonic ideal form. Things like “stack”, “bytecode”, and “recursive descent”, are nuts and bolts one particular implementation might use. From the user’s perspective, as long as the resulting contraption faithfully follows the language’s specification, it’s all implementation detail.

We’re going to spend a lot of time on those details, so if I have to write “language implementation” every single time I mention them, I’ll wear my fingers off. Instead, I’ll use “language” to refer to either a language or an implementation of it, or both, unless the distinction matters.

2 . 1The Parts of a Language
Engineers have been building programming languages since the Dark Ages of computing. As soon as we could talk to computers, we discovered doing so was too hard, and we enlisted their help. I find it fascinating that even though today’s machines are literally a million times faster and have orders of magnitude more storage, the way we build programming languages is virtually unchanged.

Though the area explored by language designers is vast, the trails they’ve carved through it are few. Not every language takes the exact same path—some take a shortcut or two—but otherwise they are reassuringly similar, from Rear Admiral Grace Hopper’s first COBOL compiler all the way to some hot, new, transpile-to-JavaScript language whose “documentation” consists entirely of a single, poorly edited README in a Git repository somewhere.

There are certainly dead ends, sad little cul-de-sacs of CS papers with zero citations and now-forgotten optimizations that only made sense when memory was measured in individual bytes.

I visualize the network of paths an implementation may choose as climbing a mountain. You start off at the bottom with the program as raw source text, literally just a string of characters. Each phase analyzes the program and transforms it to some higher-level representation where the semantics—what the author wants the computer to do—become more apparent.

Eventually we reach the peak. We have a bird’s-eye view of the user’s program and can see what their code means. We begin our descent down the other side of the mountain. We transform this highest-level representation down to successively lower-level forms to get closer and closer to something we know how to make the CPU actually execute.

The branching paths a language may take over the mountain.
Let’s trace through each of those trails and points of interest. Our journey begins on the left with the bare text of the user’s source code:

var average = (min + max) / 2;
2 . 1 . 1Scanning
The first step is scanning, also known as lexing, or (if you’re trying to impress someone) lexical analysis. They all mean pretty much the same thing. I like “lexing” because it sounds like something an evil supervillain would do, but I’ll use “scanning” because it seems to be marginally more commonplace.

A scanner (or lexer) takes in the linear stream of characters and chunks them together into a series of something more akin to “words”. In programming languages, each of these words is called a token. Some tokens are single characters, like ( and ,. Others may be several characters long, like numbers (123), string literals ("hi!"), and identifiers (min).

“Lexical” comes from the Greek root “lex”, meaning “word”.

Some characters in a source file don’t actually mean anything. Whitespace is often insignificant, and comments, by definition, are ignored by the language. The scanner usually discards these, leaving a clean sequence of meaningful tokens.

[var] [average] [=] [(] [min] [+] [max] [)] [/] [2] [;]
2 . 1 . 2Parsing
The next step is parsing. This is where our syntax gets a grammar—the ability to compose larger expressions and statements out of smaller parts. Did you ever diagram sentences in English class? If so, you’ve done what a parser does, except that English has thousands and thousands of “keywords” and an overflowing cornucopia of ambiguity. Programming languages are much simpler.

A parser takes the flat sequence of tokens and builds a tree structure that mirrors the nested nature of the grammar. These trees have a couple of different names—parse tree or abstract syntax tree—depending on how close to the bare syntactic structure of the source language they are. In practice, language hackers usually call them syntax trees, ASTs, or often just trees.

An abstract syntax tree.
Parsing has a long, rich history in computer science that is closely tied to the artificial intelligence community. Many of the techniques used today to parse programming languages were originally conceived to parse human languages by AI researchers who were trying to get computers to talk to us.

It turns out human languages were too messy for the rigid grammars those parsers could handle, but they were a perfect fit for the simpler artificial grammars of programming languages. Alas, we flawed humans still manage to use those simple grammars incorrectly, so the parser’s job also includes letting us know when we do by reporting syntax errors.

2 . 1 . 3Static analysis
The first two stages are pretty similar across all implementations. Now, the individual characteristics of each language start coming into play. At this point, we know the syntactic structure of the code—things like which expressions are nested in which—but we don’t know much more than that.

In an expression like a + b, we know we are adding a and b, but we don’t know what those names refer to. Are they local variables? Global? Where are they defined?

The first bit of analysis that most languages do is called binding or resolution. For each identifier, we find out where that name is defined and wire the two together. This is where scope comes into play—the region of source code where a certain name can be used to refer to a certain declaration.

If the language is statically typed, this is when we type check. Once we know where a and b are declared, we can also figure out their types. Then if those types don’t support being added to each other, we report a type error.

The language we’ll build in this book is dynamically typed, so it will do its type checking later, at runtime.

Take a deep breath. We have attained the summit of the mountain and a sweeping view of the user’s program. All this semantic insight that is visible to us from analysis needs to be stored somewhere. There are a few places we can squirrel it away:

Often, it gets stored right back as attributes on the syntax tree itself—extra fields in the nodes that aren’t initialized during parsing but get filled in later.

Other times, we may store data in a lookup table off to the side. Typically, the keys to this table are identifiers—names of variables and declarations. In that case, we call it a symbol table and the values it associates with each key tell us what that identifier refers to.

The most powerful bookkeeping tool is to transform the tree into an entirely new data structure that more directly expresses the semantics of the code. That’s the next section.

Everything up to this point is considered the front end of the implementation. You might guess everything after this is the back end, but no. Back in the days of yore when “front end” and “back end” were coined, compilers were much simpler. Later researchers invented new phases to stuff between the two halves. Rather than discard the old terms, William Wulf and company lumped those new phases into the charming but spatially paradoxical name middle end.

2 . 1 . 4Intermediate representations
You can think of the compiler as a pipeline where each stage’s job is to organize the data representing the user’s code in a way that makes the next stage simpler to implement. The front end of the pipeline is specific to the source language the program is written in. The back end is concerned with the final architecture where the program will run.

In the middle, the code may be stored in some intermediate representation (IR) that isn’t tightly tied to either the source or destination forms (hence “intermediate”). Instead, the IR acts as an interface between these two languages.

There are a few well-established styles of IRs out there. Hit your search engine of choice and look for “control flow graph”, “static single-assignment”, “continuation-passing style”, and “three-address code”.

This lets you support multiple source languages and target platforms with less effort. Say you want to implement Pascal, C, and Fortran compilers, and you want to target x86, ARM, and, I dunno, SPARC. Normally, that means you’re signing up to write nine full compilers: Pascal→x86, C→ARM, and every other combination.

A shared intermediate representation reduces that dramatically. You write one front end for each source language that produces the IR. Then one back end for each target architecture. Now you can mix and match those to get every combination.

If you’ve ever wondered how GCC supports so many crazy languages and architectures, like Modula-3 on Motorola 68k, now you know. Language front ends target one of a handful of IRs, mainly GIMPLE and RTL. Target back ends like the one for 68k then take those IRs and produce native code.

There’s another big reason we might want to transform the code into a form that makes the semantics more apparent . . .

2 . 1 . 5Optimization
Once we understand what the user’s program means, we are free to swap it out with a different program that has the same semantics but implements them more efficiently—we can optimize it.

A simple example is constant folding: if some expression always evaluates to the exact same value, we can do the evaluation at compile time and replace the code for the expression with its result. If the user typed in this:

pennyArea = 3.14159 * (0.75 / 2) * (0.75 / 2);
we could do all of that arithmetic in the compiler and change the code to:

pennyArea = 0.4417860938;
Optimization is a huge part of the programming language business. Many language hackers spend their entire careers here, squeezing every drop of performance they can out of their compilers to get their benchmarks a fraction of a percent faster. It can become a sort of obsession.

We’re mostly going to hop over that rathole in this book. Many successful languages have surprisingly few compile-time optimizations. For example, Lua and CPython generate relatively unoptimized code, and focus most of their performance effort on the runtime.

If you can’t resist poking your foot into that hole, some keywords to get you started are “constant propagation”, “common subexpression elimination”, “loop invariant code motion”, “global value numbering”, “strength reduction”, “scalar replacement of aggregates”, “dead code elimination”, and “loop unrolling”.

2 . 1 . 6Code generation
We have applied all of the optimizations we can think of to the user’s program. The last step is converting it to a form the machine can actually run. In other words, generating code (or code gen), where “code” here usually refers to the kind of primitive assembly-like instructions a CPU runs and not the kind of “source code” a human might want to read.

Finally, we are in the back end, descending the other side of the mountain. From here on out, our representation of the code becomes more and more primitive, like evolution run in reverse, as we get closer to something our simple-minded machine can understand.

We have a decision to make. Do we generate instructions for a real CPU or a virtual one? If we generate real machine code, we get an executable that the OS can load directly onto the chip. Native code is lightning fast, but generating it is a lot of work. Today’s architectures have piles of instructions, complex pipelines, and enough historical baggage to fill a 747’s luggage bay.

Speaking the chip’s language also means your compiler is tied to a specific architecture. If your compiler targets x86 machine code, it’s not going to run on an ARM device. All the way back in the ’60s, during the Cambrian explosion of computer architectures, that lack of portability was a real obstacle.

For example, the AAD (“ASCII Adjust AX Before Division”) instruction lets you perform division, which sounds useful. Except that instruction takes, as operands, two binary-coded decimal digits packed into a single 16-bit register. When was the last time you needed BCD on a 16-bit machine?

To get around that, hackers like Martin Richards and Niklaus Wirth, of BCPL and Pascal fame, respectively, made their compilers produce virtual machine code. Instead of instructions for some real chip, they produced code for a hypothetical, idealized machine. Wirth called this p-code for portable, but today, we generally call it bytecode because each instruction is often a single byte long.

These synthetic instructions are designed to map a little more closely to the language’s semantics, and not be so tied to the peculiarities of any one computer architecture and its accumulated historical cruft. You can think of it like a dense, binary encoding of the language’s low-level operations.

2 . 1 . 7Virtual machine
If your compiler produces bytecode, your work isn’t over once that’s done. Since there is no chip that speaks that bytecode, it’s your job to translate. Again, you have two options. You can write a little mini-compiler for each target architecture that converts the bytecode to native code for that machine. You still have to do work for each chip you support, but this last stage is pretty simple and you get to reuse the rest of the compiler pipeline across all of the machines you support. You’re basically using your bytecode as an intermediate representation.

The basic principle here is that the farther down the pipeline you push the architecture-specific work, the more of the earlier phases you can share across architectures.

There is a tension, though. Many optimizations, like register allocation and instruction selection, work best when they know the strengths and capabilities of a specific chip. Figuring out which parts of your compiler can be shared and which should be target-specific is an art.

Or you can write a virtual machine (VM), a program that emulates a hypothetical chip supporting your virtual architecture at runtime. Running bytecode in a VM is slower than translating it to native code ahead of time because every instruction must be simulated at runtime each time it executes. In return, you get simplicity and portability. Implement your VM in, say, C, and you can run your language on any platform that has a C compiler. This is how the second interpreter we build in this book works.

The term “virtual machine” also refers to a different kind of abstraction. A system virtual machine emulates an entire hardware platform and operating system in software. This is how you can play Windows games on your Linux machine, and how cloud providers give customers the user experience of controlling their own “server” without needing to physically allocate separate computers for each user.

The kind of VMs we’ll talk about in this book are language virtual machines or process virtual machines if you want to be unambiguous.

2 . 1 . 8Runtime
We have finally hammered the user’s program into a form that we can execute. The last step is running it. If we compiled it to machine code, we simply tell the operating system to load the executable and off it goes. If we compiled it to bytecode, we need to start up the VM and load the program into that.

In both cases, for all but the basest of low-level languages, we usually need some services that our language provides while the program is running. For example, if the language automatically manages memory, we need a garbage collector going in order to reclaim unused bits. If our language supports “instance of” tests so you can see what kind of object you have, then we need some representation to keep track of the type of each object during execution.

All of this stuff is going at runtime, so it’s called, appropriately, the runtime. In a fully compiled language, the code implementing the runtime gets inserted directly into the resulting executable. In, say, Go, each compiled application has its own copy of Go’s runtime directly embedded in it. If the language is run inside an interpreter or VM, then the runtime lives there. This is how most implementations of languages like Java, Python, and JavaScript work.

2 . 2Shortcuts and Alternate Routes
That’s the long path covering every possible phase you might implement. Many languages do walk the entire route, but there are a few shortcuts and alternate paths.

2 . 2 . 1Single-pass compilers
Some simple compilers interleave parsing, analysis, and code generation so that they produce output code directly in the parser, without ever allocating any syntax trees or other IRs. These single-pass compilers restrict the design of the language. You have no intermediate data structures to store global information about the program, and you don’t revisit any previously parsed part of the code. That means as soon as you see some expression, you need to know enough to correctly compile it.

Syntax-directed translation is a structured technique for building these all-at-once compilers. You associate an action with each piece of the grammar, usually one that generates output code. Then, whenever the parser matches that chunk of syntax, it executes the action, building up the target code one rule at a time.

Pascal and C were designed around this limitation. At the time, memory was so precious that a compiler might not even be able to hold an entire source file in memory, much less the whole program. This is why Pascal’s grammar requires type declarations to appear first in a block. It’s why in C you can’t call a function above the code that defines it unless you have an explicit forward declaration that tells the compiler what it needs to know to generate code for a call to the later function.

2 . 2 . 2Tree-walk interpreters
Some programming languages begin executing code right after parsing it to an AST (with maybe a bit of static analysis applied). To run the program, the interpreter traverses the syntax tree one branch and leaf at a time, evaluating each node as it goes.

This implementation style is common for student projects and little languages, but is not widely used for general-purpose languages since it tends to be slow. Some people use “interpreter” to mean only these kinds of implementations, but others define that word more generally, so I’ll use the inarguably explicit “tree-walk interpreter” to refer to these. Our first interpreter rolls this way.

A notable exception is early versions of Ruby, which were tree walkers. At 1.9, the canonical implementation of Ruby switched from the original MRI (Matz’s Ruby Interpreter) to Koichi Sasada’s YARV (Yet Another Ruby VM). YARV is a bytecode virtual machine.

2 . 2 . 3Transpilers
Writing a complete back end for a language can be a lot of work. If you have some existing generic IR to target, you could bolt your front end onto that. Otherwise, it seems like you’re stuck. But what if you treated some other source language as if it were an intermediate representation?

You write a front end for your language. Then, in the back end, instead of doing all the work to lower the semantics to some primitive target language, you produce a string of valid source code for some other language that’s about as high level as yours. Then, you use the existing compilation tools for that language as your escape route off the mountain and down to something you can execute.

They used to call this a source-to-source compiler or a transcompiler. After the rise of languages that compile to JavaScript in order to run in the browser, they’ve affected the hipster sobriquet transpiler.

The first transcompiler, XLT86, translated 8080 assembly into 8086 assembly. That might seem straightforward, but keep in mind the 8080 was an 8-bit chip and the 8086 a 16-bit chip that could use each register as a pair of 8-bit ones. XLT86 did data flow analysis to track register usage in the source program and then efficiently map it to the register set of the 8086.

It was written by Gary Kildall, a tragic hero of computer science if there ever was one. One of the first people to recognize the promise of microcomputers, he created PL/M and CP/M, the first high-level language and OS for them.

He was a sea captain, business owner, licensed pilot, and motorcyclist. A TV host with the Kris Kristofferson-esque look sported by dashing bearded dudes in the ’80s. He took on Bill Gates and, like many, lost, before meeting his end in a biker bar under mysterious circumstances. He died too young, but sure as hell lived before he did.

While the first transcompiler translated one assembly language to another, today, most transpilers work on higher-level languages. After the viral spread of UNIX to machines various and sundry, there began a long tradition of compilers that produced C as their output language. C compilers were available everywhere UNIX was and produced efficient code, so targeting C was a good way to get your language running on a lot of architectures.

Web browsers are the “machines” of today, and their “machine code” is JavaScript, so these days it seems almost every language out there has a compiler that targets JS since that’s the main way to get your code running in a browser.

JS used to be the only way to execute code in a browser. Thanks to WebAssembly, compilers now have a second, lower-level language they can target that runs on the web.

The front end—scanner and parser—of a transpiler looks like other compilers. Then, if the source language is only a simple syntactic skin over the target language, it may skip analysis entirely and go straight to outputting the analogous syntax in the destination language.

If the two languages are more semantically different, you’ll see more of the typical phases of a full compiler including analysis and possibly even optimization. Then, when it comes to code generation, instead of outputting some binary language like machine code, you produce a string of grammatically correct source (well, destination) code in the target language.

Either way, you then run that resulting code through the output language’s existing compilation pipeline, and you’re good to go.

2 . 2 . 4Just-in-time compilation
This last one is less a shortcut and more a dangerous alpine scramble best reserved for experts. The fastest way to execute code is by compiling it to machine code, but you might not know what architecture your end user’s machine supports. What to do?

You can do the same thing that the HotSpot Java Virtual Machine (JVM), Microsoft’s Common Language Runtime (CLR), and most JavaScript interpreters do. On the end user’s machine, when the program is loaded—either from source in the case of JS, or platform-independent bytecode for the JVM and CLR—you compile it to native for the architecture their computer supports. Naturally enough, this is called just-in-time compilation. Most hackers just say “JIT”, pronounced like it rhymes with “fit”.

The most sophisticated JITs insert profiling hooks into the generated code to see which regions are most performance critical and what kind of data is flowing through them. Then, over time, they will automatically recompile those hot spots with more advanced optimizations.

This is, of course, exactly where the HotSpot JVM gets its name.

2 . 3Compilers and Interpreters
Now that I’ve stuffed your head with a dictionary’s worth of programming language jargon, we can finally address a question that’s plagued coders since time immemorial: What’s the difference between a compiler and an interpreter?

It turns out this is like asking the difference between a fruit and a vegetable. That seems like a binary either-or choice, but actually “fruit” is a botanical term and “vegetable” is culinary. One does not strictly imply the negation of the other. There are fruits that aren’t vegetables (apples) and vegetables that aren’t fruits (carrots), but also edible plants that are both fruits and vegetables, like tomatoes.


A Venn diagram of edible plants
Peanuts (which are not even nuts) and cereals like wheat are actually fruit, but I got this drawing wrong. What can I say, I’m a software engineer, not a botanist. I should probably erase the little peanut guy, but he’s so cute that I can’t bear to.

Now pine nuts, on the other hand, are plant-based foods that are neither fruits nor vegetables. At least as far as I can tell.

So, back to languages:

Compiling is an implementation technique that involves translating a source language to some other—usually lower-level—form. When you generate bytecode or machine code, you are compiling. When you transpile to another high-level language, you are compiling too.

When we say a language implementation “is a compiler”, we mean it translates source code to some other form but doesn’t execute it. The user has to take the resulting output and run it themselves.

Conversely, when we say an implementation “is an interpreter”, we mean it takes in source code and executes it immediately. It runs programs “from source”.

Like apples and oranges, some implementations are clearly compilers and not interpreters. GCC and Clang take your C code and compile it to machine code. An end user runs that executable directly and may never even know which tool was used to compile it. So those are compilers for C.

In older versions of Matz’s canonical implementation of Ruby, the user ran Ruby from source. The implementation parsed it and executed it directly by traversing the syntax tree. No other translation occurred, either internally or in any user-visible form. So this was definitely an interpreter for Ruby.

But what of CPython? When you run your Python program using it, the code is parsed and converted to an internal bytecode format, which is then executed inside the VM. From the user’s perspective, this is clearly an interpreter—they run their program from source. But if you look under CPython’s scaly skin, you’ll see that there is definitely some compiling going on.

The answer is that it is both. CPython is an interpreter, and it has a compiler. In practice, most scripting languages work this way, as you can see:

The Go tool is even more of a horticultural curiosity. If you run go build, it compiles your Go source code to machine code and stops. If you type go run, it does that, then immediately executes the generated executable.

So go is a compiler (you can use it as a tool to compile code without running it), is an interpreter (you can invoke it to immediately run a program from source), and also has a compiler (when you use it as an interpreter, it is still compiling internally).

A Venn diagram of compilers and interpreters
That overlapping region in the center is where our second interpreter lives too, since it internally compiles to bytecode. So while this book is nominally about interpreters, we’ll cover some compilation too.

2 . 4Our Journey
That’s a lot to take in all at once. Don’t worry. This isn’t the chapter where you’re expected to understand all of these pieces and parts. I just want you to know that they are out there and roughly how they fit together.

This map should serve you well as you explore the territory beyond the guided path we take in this book. I want to leave you yearning to strike out on your own and wander all over that mountain.

But, for now, it’s time for our own journey to begin. Tighten your bootlaces, cinch up your pack, and come along. From here on out, all you need to focus on is the path in front of you.

Henceforth, I promise to tone down the whole mountain metaphor thing.

CHALLENGES
Pick an open source implementation of a language you like. Download the source code and poke around in it. Try to find the code that implements the scanner and parser. Are they handwritten, or generated using tools like Lex and Yacc? (.l or .y files usually imply the latter.)

Just-in-time compilation tends to be the fastest way to implement dynamically typed languages, but not all of them use it. What reasons are there to not JIT?

Most Lisp implementations that compile to C also contain an interpreter that lets them execute Lisp code on the fly as well. Why?`,
        the_title: `A Map of the Territory`,
    },
    {
        the_body: `What nicer thing can you do for somebody than make them breakfast?

Anthony Bourdain

We’ll spend the rest of this book illuminating every dark and sundry corner of the Lox language, but it seems cruel to have you immediately start grinding out code for the interpreter without at least a glimpse of what we’re going to end up with.

At the same time, I don’t want to drag you through reams of language lawyering and specification-ese before you get to touch your text editor. So this will be a gentle, friendly introduction to Lox. It will leave out a lot of details and edge cases. We’ve got plenty of time for those later.

A tutorial isn’t very fun if you can’t try the code out yourself. Alas, you don’t have a Lox interpreter yet, since you haven’t built one!

Fear not. You can use mine.

3 . 1Hello, Lox
Here’s your very first taste of Lox:

Your first taste of Lox, the language, that is. I don’t know if you’ve ever had the cured, cold-smoked salmon before. If not, give it a try too.

// Your first Lox program!
print "Hello, world!";
As that // line comment and the trailing semicolon imply, Lox’s syntax is a member of the C family. (There are no parentheses around the string because print is a built-in statement, and not a library function.)

Now, I won’t claim that C has a great syntax. If we wanted something elegant, we’d probably mimic Pascal or Smalltalk. If we wanted to go full Scandinavian-furniture-minimalism, we’d do a Scheme. Those all have their virtues.

I’m surely biased, but I think Lox’s syntax is pretty clean. C’s most egregious grammar problems are around types. Dennis Ritchie had this idea called “declaration reflects use”, where variable declarations mirror the operations you would have to perform on the variable to get to a value of the base type. Clever idea, but I don’t think it worked out great in practice.

Lox doesn’t have static types, so we avoid that.

What C-like syntax has instead is something you’ll often find more valuable in a language: familiarity. I know you are already comfortable with that style because the two languages we’ll be using to implement Lox—Java and C—also inherit it. Using a similar syntax for Lox gives you one less thing to learn.

3 . 2A High-Level Language
While this book ended up bigger than I was hoping, it’s still not big enough to fit a huge language like Java in it. In order to fit two complete implementations of Lox in these pages, Lox itself has to be pretty compact.

When I think of languages that are small but useful, what comes to mind are high-level “scripting” languages like JavaScript, Scheme, and Lua. Of those three, Lox looks most like JavaScript, mainly because most C-syntax languages do. As we’ll learn later, Lox’s approach to scoping hews closely to Scheme. The C flavor of Lox we’ll build in Part III is heavily indebted to Lua’s clean, efficient implementation.

Now that JavaScript has taken over the world and is used to build ginormous applications, it’s hard to think of it as a “little scripting language”. But Brendan Eich hacked the first JS interpreter into Netscape Navigator in ten days to make buttons animate on web pages. JavaScript has grown up since then, but it was once a cute little language.

Because Eich slapped JS together with roughly the same raw materials and time as an episode of MacGyver, it has some weird semantic corners where the duct tape and paper clips show through. Things like variable hoisting, dynamically bound this, holes in arrays, and implicit conversions.

I had the luxury of taking my time on Lox, so it should be a little cleaner.

Lox shares two other aspects with those three languages:

3 . 2 . 1Dynamic typing
Lox is dynamically typed. Variables can store values of any type, and a single variable can even store values of different types at different times. If you try to perform an operation on values of the wrong type—say, dividing a number by a string—then the error is detected and reported at runtime.

There are plenty of reasons to like static types, but they don’t outweigh the pragmatic reasons to pick dynamic types for Lox. A static type system is a ton of work to learn and implement. Skipping it gives you a simpler language and a shorter book. We’ll get our interpreter up and executing bits of code sooner if we defer our type checking to runtime.

After all, the two languages we’ll be using to implement Lox are both statically typed.

3 . 2 . 2Automatic memory management
High-level languages exist to eliminate error-prone, low-level drudgery, and what could be more tedious than manually managing the allocation and freeing of storage? No one rises and greets the morning sun with, “I can’t wait to figure out the correct place to call free() for every byte of memory I allocate today!”

There are two main techniques for managing memory: reference counting and tracing garbage collection (usually just called garbage collection or GC). Ref counters are much simpler to implement—I think that’s why Perl, PHP, and Python all started out using them. But, over time, the limitations of ref counting become too troublesome. All of those languages eventually ended up adding a full tracing GC, or at least enough of one to clean up object cycles.

In practice, ref counting and tracing are more ends of a continuum than opposing sides. Most ref counting systems end up doing some tracing to handle cycles, and the write barriers of a generational collector look a bit like retain calls if you squint.

For lots more on this, see “A Unified Theory of Garbage Collection” (PDF).

Tracing garbage collection has a fearsome reputation. It is a little harrowing working at the level of raw memory. Debugging a GC can sometimes leave you seeing hex dumps in your dreams. But, remember, this book is about dispelling magic and slaying those monsters, so we are going to write our own garbage collector. I think you’ll find the algorithm is quite simple and a lot of fun to implement.

3 . 3Data Types
In Lox’s little universe, the atoms that make up all matter are the built-in data types. There are only a few:

Booleans. You can’t code without logic and you can’t logic without Boolean values. “True” and “false”, the yin and yang of software. Unlike some ancient languages that repurpose an existing type to represent truth and falsehood, Lox has a dedicated Boolean type. We may be roughing it on this expedition, but we aren’t savages.

Boolean variables are the only data type in Lox named after a person, George Boole, which is why “Boolean” is capitalized. He died in 1864, nearly a century before digital computers turned his algebra into electricity. I wonder what he’d think to see his name all over billions of lines of Java code.

There are two Boolean values, obviously, and a literal for each one.

true;  // Not false.
false; // Not *not* false.
Numbers. Lox has only one kind of number: double-precision floating point. Since floating-point numbers can also represent a wide range of integers, that covers a lot of territory, while keeping things simple.

Full-featured languages have lots of syntax for numbers—hexadecimal, scientific notation, octal, all sorts of fun stuff. We’ll settle for basic integer and decimal literals.

1234;  // An integer.
12.34; // A decimal number.
Strings. We’ve already seen one string literal in the first example. Like most languages, they are enclosed in double quotes.

"I am a string";
"";    // The empty string.
"123"; // This is a string, not a number.
As we’ll see when we get to implementing them, there is quite a lot of complexity hiding in that innocuous sequence of characters.

Even that word “character” is a trickster. Is it ASCII? Unicode? A code point or a “grapheme cluster”? How are characters encoded? Is each character a fixed size, or can they vary?

Nil. There’s one last built-in value who’s never invited to the party but always seems to show up. It represents “no value”. It’s called “null” in many other languages. In Lox we spell it nil. (When we get to implementing it, that will help distinguish when we’re talking about Lox’s nil versus Java or C’s null.)

There are good arguments for not having a null value in a language since null pointer errors are the scourge of our industry. If we were doing a statically typed language, it would be worth trying to ban it. In a dynamically typed one, though, eliminating it is often more annoying than having it.

3 . 4Expressions
If built-in data types and their literals are atoms, then expressions must be the molecules. Most of these will be familiar.

3 . 4 . 1Arithmetic
Lox features the basic arithmetic operators you know and love from C and other languages:

add + me;
subtract - me;
multiply * me;
divide / me;
The subexpressions on either side of the operator are operands. Because there are two of them, these are called binary operators. (It has nothing to do with the ones-and-zeroes use of “binary”.) Because the operator is fixed in the middle of the operands, these are also called infix operators (as opposed to prefix operators where the operator comes before the operands, and postfix where it comes after).

There are some operators that have more than two operands and the operators are interleaved between them. The only one in wide usage is the “conditional” or “ternary” operator of C and friends:

condition ? thenArm : elseArm;
Some call these mixfix operators. A few languages let you define your own operators and control how they are positioned—their “fixity”.

One arithmetic operator is actually both an infix and a prefix one. The - operator can also be used to negate a number.

-negateMe;
All of these operators work on numbers, and it’s an error to pass any other types to them. The exception is the + operator—you can also pass it two strings to concatenate them.

3 . 4 . 2Comparison and equality
Moving along, we have a few more operators that always return a Boolean result. We can compare numbers (and only numbers), using Ye Olde Comparison Operators.

less < than;
lessThan <= orEqual;
greater > than;
greaterThan >= orEqual;
We can test two values of any kind for equality or inequality.

1 == 2;         // false.
"cat" != "dog"; // true.
Even different types.

314 == "pi"; // false.
Values of different types are never equivalent.

123 == "123"; // false.
I’m generally against implicit conversions.

3 . 4 . 3Logical operators
The not operator, a prefix !, returns false if its operand is true, and vice versa.

!true;  // false.
!false; // true.
The other two logical operators really are control flow constructs in the guise of expressions. An and expression determines if two values are both true. It returns the left operand if it’s false, or the right operand otherwise.

true and false; // false.
true and true;  // true.
And an or expression determines if either of two values (or both) are true. It returns the left operand if it is true and the right operand otherwise.

false or false; // false.
true or false;  // true.
I used and and or for these instead of && and || because Lox doesn’t use & and | for bitwise operators. It felt weird to introduce the double-character forms without the single-character ones.

I also kind of like using words for these since they are really control flow structures and not simple operators.

The reason and and or are like control flow structures is that they short-circuit. Not only does and return the left operand if it is false, it doesn’t even evaluate the right one in that case. Conversely (contrapositively?), if the left operand of an or is true, the right is skipped.

3 . 4 . 4Precedence and grouping
All of these operators have the same precedence and associativity that you’d expect coming from C. (When we get to parsing, we’ll get way more precise about that.) In cases where the precedence isn’t what you want, you can use () to group stuff.

var average = (min + max) / 2;
Since they aren’t very technically interesting, I’ve cut the remainder of the typical operator menagerie out of our little language. No bitwise, shift, modulo, or conditional operators. I’m not grading you, but you will get bonus points in my heart if you augment your own implementation of Lox with them.

Those are the expression forms (except for a couple related to specific features that we’ll get to later), so let’s move up a level.

3 . 5Statements
Now we’re at statements. Where an expression’s main job is to produce a value, a statement’s job is to produce an effect. Since, by definition, statements don’t evaluate to a value, to be useful they have to otherwise change the world in some way—usually modifying some state, reading input, or producing output.

You’ve seen a couple of kinds of statements already. The first one was:

print "Hello, world!";
A print statement evaluates a single expression and displays the result to the user. You’ve also seen some statements like:

Baking print into the language instead of just making it a core library function is a hack. But it’s a useful hack for us: it means our in-progress interpreter can start producing output before we’ve implemented all of the machinery required to define functions, look them up by name, and call them.

"some expression";
An expression followed by a semicolon (;) promotes the expression to statement-hood. This is called (imaginatively enough), an expression statement.

If you want to pack a series of statements where a single one is expected, you can wrap them up in a block.

{
  print "One statement.";
  print "Two statements.";
}
Blocks also affect scoping, which leads us to the next section . . .

3 . 6Variables
You declare variables using var statements. If you omit the initializer, the variable’s value defaults to nil.

This is one of those cases where not having nil and forcing every variable to be initialized to some value would be more annoying than dealing with nil itself.

var imAVariable = "here is my value";
var iAmNil;
Once declared, you can, naturally, access and assign a variable using its name.


var breakfast = "bagels";
print breakfast; // "bagels".
breakfast = "beignets";
print breakfast; // "beignets".
Can you tell that I tend to work on this book in the morning before I’ve had anything to eat?

I won’t get into the rules for variable scope here, because we’re going to spend a surprising amount of time in later chapters mapping every square inch of the rules. In most cases, it works like you would expect coming from C or Java.

3 . 7Control Flow
It’s hard to write useful programs if you can’t skip some code or execute some more than once. That means control flow. In addition to the logical operators we already covered, Lox lifts three statements straight from C.

We already have and and or for branching, and we could use recursion to repeat code, so that’s theoretically sufficient. It would be pretty awkward to program that way in an imperative-styled language, though.

Scheme, on the other hand, has no built-in looping constructs. It does rely on recursion for repetition. Smalltalk has no built-in branching constructs, and relies on dynamic dispatch for selectively executing code.

An if statement executes one of two statements based on some condition.

if (condition) {
  print "yes";
} else {
  print "no";
}
A while loop executes the body repeatedly as long as the condition expression evaluates to true.

var a = 1;
while (a < 10) {
  print a;
  a = a + 1;
}
I left do while loops out of Lox because they aren’t that common and wouldn’t teach you anything that you won’t already learn from while. Go ahead and add it to your implementation if it makes you happy. It’s your party.

Finally, we have for loops.

for (var a = 1; a < 10; a = a + 1) {
  print a;
}
This loop does the same thing as the previous while loop. Most modern languages also have some sort of for-in or foreach loop for explicitly iterating over various sequence types. In a real language, that’s nicer than the crude C-style for loop we got here. Lox keeps it basic.

This is a concession I made because of how the implementation is split across chapters. A for-in loop needs some sort of dynamic dispatch in the iterator protocol to handle different kinds of sequences, but we don’t get that until after we’re done with control flow. We could circle back and add for-in loops later, but I didn’t think doing so would teach you anything super interesting.

3 . 8Functions
A function call expression looks the same as it does in C.

makeBreakfast(bacon, eggs, toast);
You can also call a function without passing anything to it.

makeBreakfast();
Unlike in, say, Ruby, the parentheses are mandatory in this case. If you leave them off, it doesn’t call the function, it just refers to it.

A language isn’t very fun if you can’t define your own functions. In Lox, you do that with fun.

I’ve seen languages that use fn, fun, func, and function. I’m still hoping to discover a funct, functi, or functio somewhere.

fun printSum(a, b) {
  print a + b;
}
Now’s a good time to clarify some terminology. Some people throw around “parameter” and “argument” like they are interchangeable and, to many, they are. We’re going to spend a lot of time splitting the finest of downy hairs around semantics, so let’s sharpen our words. From here on out:

An argument is an actual value you pass to a function when you call it. So a function call has an argument list. Sometimes you hear actual parameter used for these.

A parameter is a variable that holds the value of the argument inside the body of the function. Thus, a function declaration has a parameter list. Others call these formal parameters or simply formals.

Speaking of terminology, some statically typed languages like C make a distinction between declaring a function and defining it. A declaration binds the function’s type to its name so that calls can be type-checked but does not provide a body. A definition declares the function and also fills in the body so that the function can be compiled.

Since Lox is dynamically typed, this distinction isn’t meaningful. A function declaration fully specifies the function including its body.

The body of a function is always a block. Inside it, you can return a value using a return statement.

fun returnSum(a, b) {
  return a + b;
}
If execution reaches the end of the block without hitting a return, it implicitly returns nil.

See, I told you nil would sneak in when we weren’t looking.

3 . 8 . 1Closures
Functions are first class in Lox, which just means they are real values that you can get a reference to, store in variables, pass around, etc. This works:

fun addPair(a, b) {
  return a + b;
}

fun identity(a) {
  return a;
}

print identity(addPair)(1, 2); // Prints "3".
Since function declarations are statements, you can declare local functions inside another function.

fun outerFunction() {
  fun localFunction() {
    print "I'm local!";
  }

  localFunction();
}
If you combine local functions, first-class functions, and block scope, you run into this interesting situation:

fun returnFunction() {
  var outside = "outside";

  fun inner() {
    print outside;
  }

  return inner;
}

var fn = returnFunction();
fn();
Here, inner() accesses a local variable declared outside of its body in the surrounding function. Is this kosher? Now that lots of languages have borrowed this feature from Lisp, you probably know the answer is yes.

For that to work, inner() has to “hold on” to references to any surrounding variables that it uses so that they stay around even after the outer function has returned. We call functions that do this closures. These days, the term is often used for any first-class function, though it’s sort of a misnomer if the function doesn’t happen to close over any variables.

Peter J. Landin coined the term “closure”. Yes, he invented damn near half the terms in programming languages. Most of them came out of one incredible paper, “The Next 700 Programming Languages”.

In order to implement these kind of functions, you need to create a data structure that bundles together the function’s code and the surrounding variables it needs. He called this a “closure” because it closes over and holds on to the variables it needs.

As you can imagine, implementing these adds some complexity because we can no longer assume variable scope works strictly like a stack where local variables evaporate the moment the function returns. We’re going to have a fun time learning how to make these work correctly and efficiently.

3 . 9Classes
Since Lox has dynamic typing, lexical (roughly, “block”) scope, and closures, it’s about halfway to being a functional language. But as you’ll see, it’s also about halfway to being an object-oriented language. Both paradigms have a lot going for them, so I thought it was worth covering some of each.

Since classes have come under fire for not living up to their hype, let me first explain why I put them into Lox and this book. There are really two questions:

3 . 9 . 1Why might any language want to be object oriented?
Now that object-oriented languages like Java have sold out and only play arena shows, it’s not cool to like them anymore. Why would anyone make a new language with objects? Isn’t that like releasing music on 8-track?

It is true that the “all inheritance all the time” binge of the ’90s produced some monstrous class hierarchies, but object-oriented programming (OOP) is still pretty rad. Billions of lines of successful code have been written in OOP languages, shipping millions of apps to happy users. Likely a majority of working programmers today are using an object-oriented language. They can’t all be that wrong.

In particular, for a dynamically typed language, objects are pretty handy. We need some way of defining compound data types to bundle blobs of stuff together.

If we can also hang methods off of those, then we avoid the need to prefix all of our functions with the name of the data type they operate on to avoid colliding with similar functions for different types. In, say, Racket, you end up having to name your functions like hash-copy (to copy a hash table) and vector-copy (to copy a vector) so that they don’t step on each other. Methods are scoped to the object, so that problem goes away.

3 . 9 . 2Why is Lox object oriented?
I could claim objects are groovy but still out of scope for the book. Most programming language books, especially ones that try to implement a whole language, leave objects out. To me, that means the topic isn’t well covered. With such a widespread paradigm, that omission makes me sad.

Given how many of us spend all day using OOP languages, it seems like the world could use a little documentation on how to make one. As you’ll see, it turns out to be pretty interesting. Not as hard as you might fear, but not as simple as you might presume, either.

3 . 9 . 3Classes or prototypes
When it comes to objects, there are actually two approaches to them, classes and prototypes. Classes came first, and are more common thanks to C++, Java, C#, and friends. Prototypes were a virtually forgotten offshoot until JavaScript accidentally took over the world.

In class-based languages, there are two core concepts: instances and classes. Instances store the state for each object and have a reference to the instance’s class. Classes contain the methods and inheritance chain. To call a method on an instance, there is always a level of indirection. You look up the instance’s class and then you find the method there:

How fields and methods are looked up on classes and instances
Prototype-based languages merge these two concepts. There are only objects—no classes—and each individual object may contain state and methods. Objects can directly inherit from each other (or “delegate to” in prototypal lingo):

In practice the line between class-based and prototype-based languages blurs. JavaScript’s “constructor function” notion pushes you pretty hard towards defining class-like objects. Meanwhile, class-based Ruby is perfectly happy to let you attach methods to individual instances.

How fields and methods are looked up in a prototypal system
This means that in some ways prototypal languages are more fundamental than classes. They are really neat to implement because they’re so simple. Also, they can express lots of unusual patterns that classes steer you away from.

But I’ve looked at a lot of code written in prototypal languages—including some of my own devising. Do you know what people generally do with all of the power and flexibility of prototypes?  . . . They use them to reinvent classes.

I don’t know why that is, but people naturally seem to prefer a class-based (Classic? Classy?) style. Prototypes are simpler in the language, but they seem to accomplish that only by pushing the complexity onto the user. So, for Lox, we’ll save our users the trouble and bake classes right in.

Larry Wall, Perl’s inventor/prophet calls this the “waterbed theory”. Some complexity is essential and cannot be eliminated. If you push it down in one place, it swells up in another.

Prototypal languages don’t so much eliminate the complexity of classes as they do make the user take that complexity by building their own class-like metaprogramming libraries.

3 . 9 . 4Classes in Lox
Enough rationale, let’s see what we actually have. Classes encompass a constellation of features in most languages. For Lox, I’ve selected what I think are the brightest stars. You declare a class and its methods like so:

class Breakfast {
  cook() {
    print "Eggs a-fryin'!";
  }

  serve(who) {
    print "Enjoy your breakfast, " + who + ".";
  }
}
The body of a class contains its methods. They look like function declarations but without the fun keyword. When the class declaration is executed, Lox creates a class object and stores that in a variable named after the class. Just like functions, classes are first class in Lox.

They are still just as fun, though.

// Store it in variables.
var someVariable = Breakfast;

// Pass it to functions.
someFunction(Breakfast);
Next, we need a way to create instances. We could add some sort of new keyword, but to keep things simple, in Lox the class itself is a factory function for instances. Call a class like a function, and it produces a new instance of itself.

var breakfast = Breakfast();
print breakfast; // "Breakfast instance".
3 . 9 . 5Instantiation and initialization
Classes that only have behavior aren’t super useful. The idea behind object-oriented programming is encapsulating behavior and state together. To do that, you need fields. Lox, like other dynamically typed languages, lets you freely add properties onto objects.

breakfast.meat = "sausage";
breakfast.bread = "sourdough";
Assigning to a field creates it if it doesn’t already exist.

If you want to access a field or method on the current object from within a method, you use good old this.

class Breakfast {
  serve(who) {
    print "Enjoy your " + this.meat + " and " +
        this.bread + ", " + who + ".";
  }

  // ...
}
Part of encapsulating data within an object is ensuring the object is in a valid state when it’s created. To do that, you can define an initializer. If your class has a method named init(), it is called automatically when the object is constructed. Any parameters passed to the class are forwarded to its initializer.

class Breakfast {
  init(meat, bread) {
    this.meat = meat;
    this.bread = bread;
  }

  // ...
}

var baconAndToast = Breakfast("bacon", "toast");
baconAndToast.serve("Dear Reader");
// "Enjoy your bacon and toast, Dear Reader."
3 . 9 . 6Inheritance
Every object-oriented language lets you not only define methods, but reuse them across multiple classes or objects. For that, Lox supports single inheritance. When you declare a class, you can specify a class that it inherits from using a less-than (<) operator.

class Brunch < Breakfast {
  drink() {
    print "How about a Bloody Mary?";
  }
}
Why the < operator? I didn’t feel like introducing a new keyword like extends. Lox doesn’t use : for anything else so I didn’t want to reserve that either. Instead, I took a page from Ruby and used <.

If you know any type theory, you’ll notice it’s not a totally arbitrary choice. Every instance of a subclass is an instance of its superclass too, but there may be instances of the superclass that are not instances of the subclass. That means, in the universe of objects, the set of subclass objects is smaller than the superclass’s set, though type nerds usually use <: for that relation.

Here, Brunch is the derived class or subclass, and Breakfast is the base class or superclass.

Every method defined in the superclass is also available to its subclasses.

var benedict = Brunch("ham", "English muffin");
benedict.serve("Noble Reader");
Even the init() method gets inherited. In practice, the subclass usually wants to define its own init() method too. But the original one also needs to be called so that the superclass can maintain its state. We need some way to call a method on our own instance without hitting our own methods.

Lox is different from C++, Java, and C#, which do not inherit constructors, but similar to Smalltalk and Ruby, which do.

As in Java, you use super for that.

class Brunch < Breakfast {
  init(meat, bread, drink) {
    super.init(meat, bread);
    this.drink = drink;
  }
}
That’s about it for object orientation. I tried to keep the feature set minimal. The structure of the book did force one compromise. Lox is not a pure object-oriented language. In a true OOP language every object is an instance of a class, even primitive values like numbers and Booleans.

Because we don’t implement classes until well after we start working with the built-in types, that would have been hard. So values of primitive types aren’t real objects in the sense of being instances of classes. They don’t have methods or properties. If I were trying to make Lox a real language for real users, I would fix that.

3 . 10The Standard Library
We’re almost done. That’s the whole language, so all that’s left is the “core” or “standard” library—the set of functionality that is implemented directly in the interpreter and that all user-defined behavior is built on top of.

This is the saddest part of Lox. Its standard library goes beyond minimalism and veers close to outright nihilism. For the sample code in the book, we only need to demonstrate that code is running and doing what it’s supposed to do. For that, we already have the built-in print statement.

Later, when we start optimizing, we’ll write some benchmarks and see how long it takes to execute code. That means we need to track time, so we’ll define one built-in function, clock(), that returns the number of seconds since the program started.

And . . . that’s it. I know, right? It’s embarrassing.

If you wanted to turn Lox into an actual useful language, the very first thing you should do is flesh this out. String manipulation, trigonometric functions, file I/O, networking, heck, even reading input from the user would help. But we don’t need any of that for this book, and adding it wouldn’t teach you anything interesting, so I’ve left it out.

Don’t worry, we’ll have plenty of exciting stuff in the language itself to keep us busy.

CHALLENGES
Write some sample Lox programs and run them (you can use the implementations of Lox in my repository). Try to come up with edge case behavior I didn’t specify here. Does it do what you expect? Why or why not?

This informal introduction leaves a lot unspecified. List several open questions you have about the language’s syntax and semantics. What do you think the answers should be?

Lox is a pretty tiny language. What features do you think it is missing that would make it annoying to use for real programs? (Aside from the standard library, of course.)

DESIGN NOTE: EXPRESSIONS AND STATEMENTS
Lox has both expressions and statements. Some languages omit the latter. Instead, they treat declarations and control flow constructs as expressions too. These “everything is an expression” languages tend to have functional pedigrees and include most Lisps, SML, Haskell, Ruby, and CoffeeScript.

To do that, for each “statement-like” construct in the language, you need to decide what value it evaluates to. Some of those are easy:

An if expression evaluates to the result of whichever branch is chosen. Likewise, a switch or other multi-way branch evaluates to whichever case is picked.

A variable declaration evaluates to the value of the variable.

A block evaluates to the result of the last expression in the sequence.

Some get a little stranger. What should a loop evaluate to? A while loop in CoffeeScript evaluates to an array containing each element that the body evaluated to. That can be handy, or a waste of memory if you don’t need the array.

You also have to decide how these statement-like expressions compose with other expressions—you have to fit them into the grammar’s precedence table. For example, Ruby allows:

puts 1 + if true then 2 else 3 end + 4
Is this what you’d expect? Is it what your users expect? How does this affect how you design the syntax for your “statements”? Note that Ruby has an explicit end to tell when the if expression is complete. Without it, the + 4 would likely be parsed as part of the else clause.

Turning every statement into an expression forces you to answer a few hairy questions like that. In return, you eliminate some redundancy. C has both blocks for sequencing statements, and the comma operator for sequencing expressions. It has both the if statement and the ?: conditional operator. If everything was an expression in C, you could unify each of those.

Languages that do away with statements usually also feature implicit returns—a function automatically returns whatever value its body evaluates to without need for some explicit return syntax. For small functions and methods, this is really handy. In fact, many languages that do have statements have added syntax like => to be able to define functions whose body is the result of evaluating a single expression.

But making all functions work that way can be a little strange. If you aren’t careful, your function will leak a return value even if you only intend it to produce a side effect. In practice, though, users of these languages don’t find it to be a problem.

For Lox, I gave it statements for prosaic reasons. I picked a C-like syntax for familiarity’s sake, and trying to take the existing C statement syntax and interpret it like expressions gets weird pretty fast.`,
        the_title: `The Lox Language`,
    }
];



// randomStory(stories_array[0])
console.log(randomStory(stories_array[0]));



const comments_array = [
    {
        body: `Please use the embed code option to provide us more parts of your code. E.g. CSS, JavaScript`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `Where is that code which renders NA ? `,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `Maybe by posting the code?`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `What do you mean by that? Can you give me some more specific clues?`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `Post your code... I don't know what line 38 looks like. Nobody can help you here until you post some code. It's hard to understand what you are trying to do just with your words.`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `It is likely that a semi-infinite recursion in the javascript is causing the stack overflow, but no answer can be provided without showing us your code.`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `What if I have a folder named server and I want the folders and files generated by sequelize init inside server folder.`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `Then you have to CD into your server folder and run sequelize init`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `Is there a way to run the seed only once? Or should I run an undo seed on every startup to avoid having duplicate data?`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: `i get the error TypeError: Cannot read property 'create' of undefined please help me`,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    },
    {
        body: ``,
        userId: `${randomNumber(43)}`,
        storyId: `${randomNumber(43)}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
    }

]





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
