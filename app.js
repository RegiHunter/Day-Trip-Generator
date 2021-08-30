'use strict'

// (Developer) Make 3 commits 

// N/A

//------------------------------------------------------------------------------------------------

// (User) Randomly select a destination

let destination = 'dest'
let checkpointOne = prompt('Enter "dest" to randomize your destinaton.');
let listOfDestinations = ['Heaven', 'Hell', 'Ether'];


function randomizeMe(placeHolder0){
    return Math.floor( Math.random() * placeHolder0 );
}   

let randomDestination = randomizeMe(listOfDestinations.length);
let finalDestination = listOfDestinations[randomDestination];

// if(checkpointOne.toLowerCase !== destination){
//     console.log(checkpointOne);
// }
// else if (checkpointOne.toLowerCase === destination){
    console.log(finalDestination)




//-------------------------------------------------------------------------

// (User) Randomly select a restuarant

let listOfRestaurants = ['Heavenly Burgers', 'Devils Pit', 'Abysmal Meats'];
let restaurant = 'rest'
let checkpointTwo = prompt('Enter "rest" to randomize your restaurant.');

let randomRestaurant = randomizeMe(listOfRestaurants.length);
let finalRest = listOfRestaurants[randomRestaurant];

// if(checkpointTwo.toLowerCase !== restaurant){
//      console.log(checkpointTwo);
// }
// else if (checkpointTwo.toLowerCase === restaurant){
    console.log(finalRest)






// ------------------------------------------------------------------------

// (User) Randomly select a mode of transportation

let listOfTransport = ['Stairway to heaven', 'Leap into an undefined depth', 'Shrooms'];
let transport = 'trans'
let checkpointThree = prompt('Enter "trans" to randomize your mode of transportaion.');

let randomTrans = randomizeMe(listOfTransport.length);
let finalTrans = listOfTransport[randomTrans];

// if(checkpointThree.toLowerCase !== transport){
//     console.log(checkpointThree);
// }
// else if (checkpointThree.toLowerCase === transport){
    console.log(finalTrans);




//--------------------------------------------------------------------------------------------

// (User) Randomly select a entertainment

let listOfEntertainment = ['Recite bible verses, infinitely', 'Code an entire game from scratch, then look for the singular syntax error that has been randomly placed.', 'Converse with geometrical shapes'];
let entertainment = 'ent'
let checkpointFour = prompt('Enter "ent" to randomize your type of entertainment.');

let randomEntertainment = randomizeMe(listOfEntertainment.length);
let finalEnt = listOfEntertainment[randomEntertainment]

// if(checkpointFour.toLowerCase !== entertainment){
//     console.log(checkpointFour);
// }
//     else if (checkpointFour.toLowerCase === entertainment){
         console.log(finalEnt)
    






//--------------------------------------------------------------------------------------------

// (User) Randomly reselect all options

let validity = true;
let choseYes = 'yes';

let checkpointFive = prompt('Reroll? Enter "yes" or "no".');

while (checkpointFive.toLowerCase == choseYes){

    if(validity = true){
    let randomDestination2 = randomizeMe(listOfDestinations.length);
    let finalDestination2 = listOfDestinations[randomDestination2];
    let randomRestaurant2 = randomizeMe(listOfRestaurants.length);
    let finalRest2 = listOfRestaurants[randomRestaurant2];
    let randomTrans2 = randomizeMe(listOfTransport.length);
    let finalTrans2 = listOfTransport[randomTrans2];
    let randomEntertainment2 = randomizeMe(listOfEntertainment.length);
    let finalEnt2 = listOfEntertainment[randomEntertainment2];
    console.log( finalDestination2, finalEnt2, finalRest2, finalTrans2 );
    validity = false
     break;
    } else if(validity = false){
    console.log ( checkpointFive )
    }
}

//--------------------------------------------------------------------------------------------

// (User) need to display the trip is complete in console

let enjoyTrip = "Enjoy your trip!";
let checkpointSix = prompt('Confirm? Enter "yes".');

if(checkpointSix.toLowerCase == choseYes){
    console.log(enjoyTrip);  
}   else{
    validity = false;
    console.log(enjoyTrip)

    }



// using a while loop ("notSatisfied")
// check for each element of trip (4)
// prompt for a choice
// or "all"
// or Satisfied
// or bad input
// (if/else  or switch/case)

//Refactor -->
// (Developer) As a developer, I want all of my functions to have a Single Responsibility.
// And Remember, each function should do just one thing
//------------------------------------------------------------------------
// Connect to Git

// git remote add origin https://github.com/RegiHunter/Day-Trip-Generator.git
// git branch -M main
// git push -u origin main

