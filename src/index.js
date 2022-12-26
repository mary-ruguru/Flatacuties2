//global storage
let objGlobal;
//display nodes
const nameDisplay = document.querySelector("#name");
const imgDisplay = document.querySelector("#image");
const voteCountDisplay = document.querySelector("#vote-count");

// submit form nodes
const addVotesForm = document.querySelector("#votes-form");
const votesInputBox = document.querySelector("#votes");


const url = "http://localhost:3000/characters";

//character spans container
const characterBarContainer = document.querySelector("#character-bar");

//fetch request
fetch(url)
   .then((response) => response.json())
   .then((data) => {
    console.log("Success:", data);
    renderCharacterDisplay(data[0]);

    //here i will iterate through each element of the array and render an element for it
        data.forEach((element) => {
          renderList(element);  
        });
   })
    .catch((error) => {
        console.error("Error:", error);
    });

 //i will now call a function on each of the individual elements
 function renderList(characterObj) {
    //create span element with character's name
    let characterSpanE1 = document.createElement("span");
    characterSpanE1.textContent = characterObj.name;
     //append span element to the character-bar container
    characterBarContainer.appendChild(characterSpanE1);

    //add click listener to span element
    characterSpanE1.addEventListener("click", () => {
        renderCharacterDisplay(characterObj);
    });
 }   

 //renderCharacterDisplay info
 function renderCharacterDisplay(characterObj) {
    let characterSpanE1 = document.createElement("span");
    //render name display info
    nameDisplay.textContent = characterObj.name;
    imgDisplay.src = characterObj.image;
    voteCountDisplay.textContent = characterObj.votes;

    //pass the characterobj to the global scope for adding votes
    objGlobal = characterObj;
 }

 //submit form
 //addVotesForm.addEventListener("submit" (e) => {
 //   e.preventDefault();
    //backend
 //   objGlobal,votes =+ parseInt(votesInputBox,value);
 //   voteCountDisplay.textContent = objGlobal.votes;
  //  patchRequest(objGlobal);
 //});

 addVotesForm.addEventListener("submit", (e) => {
    e.preventDefault();
   // console.log(objGlobal);
    objGlobal.votes += parseInt(votesInputBox.value);
    voteCountDisplay.textContent = objGlobal.votes;
    patchRequest(objGlobal);
    
 });
 
 
 