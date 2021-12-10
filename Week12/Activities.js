export default class Activity {
  constructor(list, element) {
    this.element = element;
    this.list = list;
    //this.listFavorites(list, element) == this.listFavorites.bind(this);//bind to correct scope
    this.getFavorites(list) == this.getFavorites.bind(this);
    
    }

//get from localStorage and display
// listFavorites(list) {
//   getFavorites(list);

    
//     console.log(localStorage);
    

// }

getFavorites(list) {
  let listItems = JSON.parse(localStorage.getItem('favoritesList'));
  console.log(listItems);
  console.log(list);
  console.log(localStorage);
  return listItems;

}

deleteItem(list) {
  alert("this one is working out how it should");
}


}

// let addFavoriteBtn = document.getElementById('addFavorite');
// addFavoriteBtn.addEventListener("click", addToFavorites, false);

// function addToFavorites(list) {
//   const activity = document.getElementById("activityOutput").innerHTML;
//   console.log(activity);
//   list.push(activity);
//   localStorage.setItem('favoritesList', list);
//   console.log(list);
//   console.log(localStorage);
//   alert(activity + " added to favorites")

// }







