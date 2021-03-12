


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
        "1100",
        "1110",
        "1111",
        "1200",
        "1220",
        "1222",
        "1300",
        "1400",
        "1500",
        "1600",
        "1700",
        "1800",
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
        "1912",
        "1914",
        "1916",
        "2000"
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




module.exports = {
    getRandomName,
    getStarwarsNames,
    randomNumber,
    randomYear,
    randomMonth,
    randomDay,
    getRandomMaleImg,
    getRandomFemaleImg
};
