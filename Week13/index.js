import Activity from "./Activities.js";

let element = "ul";
let list = [];

const newActivity = new Activity(list, element);
newActivity.getFavorites(list);

//prevent default on submit of refreshing the page and options
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})

let viewActivityBtn = document.getElementById('viewActivitybtn');
viewActivityBtn.addEventListener("click", searchActivities, false);
let generateRandomBtn = document.getElementById('randomActivityBtn');
generateRandomBtn.addEventListener("click", generateRandom, false);
let addFavoriteBtn = document.getElementById('addFavorite');
addFavoriteBtn.addEventListener("click", addToFavorites, false);



function addToFavorites() {
  let activity = document.getElementById("activityOutput").innerHTML;
  if (activity === "" || activity === "Nothing to add to favorites. Pick your parameters and click 'View My Idea' or click 'Random Activity' to view an idea you can add to your favorites") {
    document.getElementById("activityOutput").textContent = "Nothing to add to favorites. Pick your parameters and click 'View My Idea' or click 'Random Activity' to view an idea you can add to your favorites";
  } else {
  console.log(activity);
  list.push(activity);
  localStorage.setItem('favoritesList', JSON.stringify(list));
  console.log(list);
  console.log(localStorage);
  document.getElementById("activityOutput").textContent = "Added to favorites: " + activity;
  }
}


function searchActivities() {

  //show loader until the text is output
  const loading = document.querySelector("#loading");
  const output = document.querySelector("#activityOutput");
  output.classList.remove('display');
  loading.classList.add('display'); //display the loading spinner
  
  
  //get the value from the drop down menus and add to the url query
  const types = document.getElementById("types");
  const type = types.options[types.selectedIndex].text;
  const people = document.getElementById("numPeople");
  const numPeople = people.options[people.selectedIndex].text;
  const price = document.getElementById("costs");
  const prices = price.options[price.selectedIndex].value;

  const apiURL = "https://www.boredapi.com/api/activity?type=" + type.toLowerCase() + "&participants=" + numPeople.toLowerCase() + "&price=" + prices;
  
  //print url to console
  console.log(apiURL);
  
  //fetch info from api and return the JSON object and output it on page
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      
      //show error if no results
      if (jsObject.error == 'No activity found with the specified parameters') {
        document.getElementById('activityOutput').textContent = "Error: " + jsObject.error + ". Please try again with different parameters or select Random Activity.";
      } else {document.getElementById('activityOutput').textContent = jsObject.activity;
    }
      
      loading.classList.remove('display'); //don't display the loading spinner
      output.classList.add('display'); //display the output
    });
  }
  
function generateRandom() {
  
    //show loader until the text is output
  const loading = document.querySelector("#loading");
  const output = document.querySelector("#activityOutput");
  output.classList.remove('display');
  loading.classList.add('display'); //display the loading spinner
  
    //fetch info from api and return the JSON object and output it on page
  const apiURL = "https://www.boredapi.com/api/activity/"
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
    //add and remove class so spinner is hidden when there is output  
    document.getElementById('activityOutput').textContent = jsObject.activity;
    loading.classList.remove('display'); //don't display the loading spinner
    output.classList.add('display'); //display the output
  });
  }
