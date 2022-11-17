
//Create the map

const map = []

map [0] = "The Theater";
map [1] = "The Grocery Store";
map [2] = "Frank's Apartment";
map [3] = "St Deborah-By-The-Water";
map [4] = "Severn City Airport";
map [5] = "Adrift In A Stranger's Galaxy";
map [6] = "The Cabin in The Woods";
map [7] = "The Spaceship";
map [8] = "In The Woods";

//Blocked path messages
var blockedPathMessages = "You can't go that way!";

//Set the player's start location
var mapLocation = 4;

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = "";

//Create and array of actions the game understands
//And a variable to store the current action
var actionsIKnow = ["north", "south", "east", "west"];
var action = "";

//The input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");

//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//Display the player's location
render();

function clickHandler() {
    playGame();
}

function playGame() {
    //Get the players input and convert it to lowercase
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();

    //Reset these variables from the previous turn
    gameMessage = "";
    action = "";

    //Figure out the player's action
    for(var i = 0; i < actionsIKnow.length; i++) {
        
        if(playersInput.indexOf(actionsIKnow[i]) !== -1) 
        {
            action = actionsIKnow[i];
            console.log("player's action: " + action);
            break;
        }
    }

//Choose the correct action
switch(action) {

    case "north":
        if(mapLocation >= 3) {
        mapLocation -= 3;
        }
        else {
        gameMessage = blockedPathMessages;
        }
        break;

    case "south":
        if(mapLocation < 6) {
        mapLocation += 3;
        }
        else {
            gameMessage = blockedPathMessages;
        }
        break;

    case "east":
        if(mapLocation % 3 != 2) {
        mapLocation += 1;
        }
        else {
            gameMessage = blockedPathMessages;
        }
        break;

    case "west":
        if(mapLocation % 3 != 0) {
        mapLocation -= 1;
        }
        else {
            gameMessage = blockedPathMessages
        }
        break;

        default:
        gameMessage = "I don't understand that!";
    }

    //Render the game
    render();
}

function render() {
    //Render the location
    output.innerHTML = map[mapLocation];

    //Display the game message
    output.innerHTML += "<br><em>" + gameMessage + "</em>";
}