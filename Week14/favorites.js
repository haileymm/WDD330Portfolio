import Activity from "./Activities.js";

let element = "";
let list = [];
let btnIndex = 0;


const newActivity = new Activity(list, element);
list = newActivity.getFavorites(list);
element = newActivity.element;

console.log(element);


renderList(list, element);

//add event listener for each remove button with id of 'remove'
let removeBtn = document.querySelectorAll('#remove');
removeBtn.forEach(function(btn){
  btn.addEventListener("click", deleteItem, false);
  btn.activity = document.getElementById('text').innerHTML;

})

   

function renderList(list, element) {

  

    for (let i = 0; i < list.length; ++i) {
    
  
    console.log(list);
    let container = document.getElementById('listOutput');
    element = document.querySelector('ul');
    const div = document.createElement('div');
    const li = document.createElement('li');
    const button = document.createElement('button');
    
    
    console.log(list.length);
    
    element.appendChild(div);
    div.appendChild(li);
    div.appendChild(button);

    element.setAttribute('id', 'favoritesList');
    div.setAttribute('id', 'listItem');
    div.setAttribute('class', btnIndex);
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'remove');
    li.setAttribute('id', 'text');
    

    button.textContent = 'X';
    console.log(list[i]);

    li.innerHTML = list[i];

    container.appendChild(element);

    btnIndex = btnIndex + 1;
    

    };

  }

  function deleteItem(i) {
    
    let listItems = localStorage.getItem('favoritesList');
    let list = JSON.parse(listItems);
    list.splice(i, 1);
    localStorage.setItem("favoritesList", JSON.stringify(list));
    window.location.reload();
  }
