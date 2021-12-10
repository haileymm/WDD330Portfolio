import Activity from "./Activities.js";

let element = "";
let list = [];


const newActivity = new Activity(list, element);
list = newActivity.getFavorites(list);
element = newActivity.element;

console.log(element);


renderList(list, element);


   


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
    button.setAttribute('type', 'button');
    button.setAttribute('id', 'remove');
    button.setAttribute('onclick', 'deleteItem()');
    li.setAttribute('id', 'text');
    

    button.textContent = 'X';
    console.log(list[i]);

    li.innerHTML = list[i];

    container.appendChild(element);

    };

  }

function deleteItem() {


}
