/*global $*/
var classes = 'all sanfran paris';
var addClass = '';
$('#destination').on('change', function(){
    matchClass();
    $('.jumbotron').removeClass(classes);
    // console.log(addClass);
    $('.jumbotron').addClass(addClass);
});

function matchClass(){
    let destClass = $("#destination").val();
    switch (destClass){
        case 'All':
            addClass = 'all';
            break;
        case 'San Francisco':
            addClass = 'sanfran';
            break;
        case 'Paris':
            addClass = 'paris';
            break;
    }
}


// ***TRIPSUM CONTENT ARRAYS***
var arr = [];

const all =
    [
        "The resort offers activities specifically for toddlers, kids, teens and (of course!) parents, so no one will be bored. ",
        "Like all things New England, the cottages at Hidden Pond in Maine are quaint, charming and accentuated with hints of luxury. ",
        "Look to the sky for bald eagles or to the sea for pods of migrating whales from spring through fall, when you can spot fin, minke, humpback, pilot, and other behemoths navigating the waters. ",
        "Wright spent her second day at the based at Fogg Farm, just a few minutes from L.L.Bean’s flagship store in Freeport, Maine. ",
        "The family-friendly schools cater to outdoor enthusiasts of all kinds, including beginners. ",
        "In fact, just a few days after her first fly-casting lesson, Wright was visiting friends in Colorado and jumped at the opportunity to go fly-fishing. ",
        "A true natural beauty, Cape Breton is consistently lauded for its outdoor attractions—sprawling coastline and mountainous vistas among them. "
    ];
    
const sanfran = 
    [
        "Stunning, charismatic, innovative, compassionate, and multicultural, San Francisco is one big swoon of a city that manages to be both classic and counterculture. ",
        "The streets of America's oldest Chinatown fill with floats, dragons, and colorful costumes for Lunar New Year each February. ",
        "The popular Hardly Strictly Bluegrass music festival is free, held the first weekend of October in Golden Gate Park. ",
        "Walk! ",
        "It also offers up the best view of the Golden Gate Bridge. ",
        "San Francisco is made for hoofing it. ",
        "San Francisco's rich Mexican heritage means locals are loco for Mexican food, especially when it comes to the forearm-size 'mission style' burritos found at beloved joints El Farolito and Taqueria La Cumbre. ",
        "Dolores Park was built on the site of a former Jewish cemetery that was used as a staging ground by Barnum & Bailey Circus and sold to the city in 1905. San Francisco's 1906 earthquake and fire violently interrupted park planning, and it remained bumpy, squishy and poorly drained until its 2015 regrading. ",
        "The N-Judah is right there, and every single MUNI metro or bus that runs along Market is within walking distance. ",
        "Was it the fall of 1966 or the winter of ’67? ",
        "Flashbacks are a given in the Haight, which still has its swinging-’60s tendencies. ",
        "Duboce Park Café serves breakfast, sandwiches, pizzas, and has free Wi-Fi. ",
        "Union and Fillmore Sts are home to tons of great restaurants and bars including Atelier Crenn, Belga, Umami, Terzo, and Balboa Café. ",
        " West Portal Station has the K, L, M, and T, and the 48 and 57 are also right there. ",
        "Castro’s food scene has only been getting better in recent years. ",
        "The fog was laced with pot, sandalwood incense and burning draft cards, entire days were spent contemplating Day-Glo Grateful Dead posters, and the corner of Haight and Ashbury Sts became the turning point for an entire generation. "
    ];
    
const paris =
    [
        "I love that this bistro in the Saint Germain neighborhood, in the 6th arrondissement, has been here forever. Cézanne drank here. So did Picasso. And Jim Morrison. ",
        "Paris' monument-lined boulevards, museums, classical bistros and boutiques are enhanced by a new wave of multimedia galleries, creative wine bars, design shops and tech start-ups. ",
        "The works of French Romantic artist Eugène Delacroix can be found in the Louvre, for instance, but also at the delightful Musée National Eugène Delacroix. ",
        "Modern and contemporary art is showcased at the comprehensive Centre Pompidou's Musée National d'Art Moderne but also at smaller venues like the city-run Musée d’Art Moderne de la Ville de Paris. ",
        "A 40-minute train journey southwest of the city, the opulent Château de Versailles is a hugely popular day trip. ",
        "Adjacent to the Louvre, the elegant Jardin des Tuileries sees plenty of visitors. ",
        "Wine-producing grapevines flourish in parks such as the Parc de Belleville, with elevated city views, and the Parc de Bercy, adjacent to the former wine warehouses on Cour St-Émilion that now house shops and restaurants making up Bercy Village. "
    ];

// ***TRIPSUM GENERATION FUNCTIONALITY***
$('#paragraphs').on('keypress', function(e){
    if(e.which === 13)
    $("#tripsumCard").html(generateSection());
});

$('#bookBtn').on('click', function(){
    $("#tripsumCard").html(generateSection());
});



function generateSection(){
    matchArr();
    let numPars = $("#paragraphs").val();
    let sectionHTML = '';
    for(let i = 1; i <= numPars; i++){
        let par = generatePar();
        sectionHTML += ('<p>' + par + '</p>');
    }
    return sectionHTML;
}

function generatePar(){
    let par = '';
    let num = Math.floor(Math.random() * 8);
    for(let i = 0; i <= num; i++){
        let j = Math.floor(Math.random() * arr.length);
        par += arr[j];
    }
    return par;
}

function matchArr(){
    let select = $("#destination").val();
    switch (select){
        case 'All':
            arr = all;
            break;
        case 'San Francisco':
            arr = sanfran;
            break;
        case 'Paris':
            arr = paris;
            break;
    }
}