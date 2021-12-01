//prevent default on submit of refreshing the page and options
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
})

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
const apiURL = "https://boredapi.com/api/activity?type=" + type.toLowerCase() + "&participants=" + numPeople.toLowerCase() + "&price=" + "0.0";

//print url to console
console.log(apiURL);

//fetch info from api and return the JSON object and output it on page
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById('activityOutput').textContent = JSON.stringify(jsObject.activity);
    loading.classList.remove('display'); //don't display the loading spinner
    output.classList.add('display'); //display the output
  });
}