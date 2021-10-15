const form = document.forms['hero'];

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);




form.addEventListener('submit', makeHero, false); //event listener invoke makeHero() when submitted. Will return object based on info provided in form.
form.addEventListener('submit',validate,false);
form.addEventListener('keyup',validateInline,false);
form.heroName.addEventListener('keyup',disableSubmit,false);



function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    hero.realName = form.realName.value; // realName property based on input fields value of realName

    hero.category = form.category.value; //radio button value

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog

    // iterate through the checkboxes with the name 'powers'
    hero.powers = []; //empty array-creates powers property for our hero
    
    // iterate over each chekcbox to see if it was checked in the form. If yes, add 'value' property of the checkbos to the powers array using the push method.
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    /*This code will get the same result: 
    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    This uses the spread operator to turn the node list into an array. 
    This then allows us to use thefilter()method that returns an array 
    containing only the check boxes that were checked 
    (this is because their 'checked' property will be truthy). 
    We then chain themap()method to the end, which replaces each 
    checkbox in the array with its 'value' property.
     This array is then returned and stored in thehero.powersvariable.*/

    return hero;
}



function validateInline() {
    const firstLetter = form.heroName.value[0];
    if(firstLetter.toUpperCase() === 'X'){
    error.style.display = 'block';
    } else {
    error.style.display = 'none';
    }
}

function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}