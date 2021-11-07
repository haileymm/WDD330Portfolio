var canvas = document.getElementById("myCanvas");

//obtain our drawing context by calling the getContext method and passing it the string "2d", since we’ll be drawing in two dimensions
var context = canvas.getContext("2d");

//In the HTML5 canvas, we fill our "paintbrush" with color before we can do anything- use strokeStyle or fillStyle properties.
context.strokeStyle = "red";
context.fillStyle = "blue";

//Draw rectangle using fillRect and strokeRect methods- coordinates top left corner is 0,0 and bottom right is 200,200
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

drawPattern();
drawGradient();
drawCircle(canvas);

var canvas5 = document.getElementById("demo5");
drawCircle(canvas5);


//event listener to save drawing when button pushed
var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

//we’ll add an event listener that will run our code only once the window’s load event has fired:
window.addEventListener("load", drawImageToCanvas("demo6"), false);
window.addEventListener("load", drawImageToCanvas("demo7"), false);

//make greyscale image in demo7
manipulateImage("demo7");







//function on demo2 and create a pattern using an image. Must create an Image object and set it's src property to our image
function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "5.jpg";

    //need onload property to create our pattern once image has been fully loaded by browser
    img.onload = function() {
    //we call createPattern, passing it the Image object and the string repeat so that our image repeats along both the X and Y axes. 
    //We store the results of createPattern in the variable pattern, and set the fillStyle to that variable
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);
    };
}

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200); 
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

//function to save drawing to local file
function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

//draw image to canvas from src attribute in html
function drawImageToCanvas(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 0, 0); 
    // draw the image at x=0 and y=0 on the canvas
// var imageData = context.getImageData(0, 0, 1, 1);
// var pixelData = imageData.data;
// console.log(pixelData.length);
}

//function to convert every pixel to greyscale
function manipulateImage(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");

    var imageData = context.getImageData(0, 0, 200, 200);
    
    //iterate through each pixel and change to grayscale
    for (var i = 0; i < imageData.data.length; i += 4) {
    var red = imageData.data[i];
    var green = imageData.data[i + 1];
    var blue = imageData.data[i + 2];
        
    var grayscale = red * 0.3 + green * 0.59 + blue * 0.11;
        
    imageData.data[i] = grayscale;
    imageData.data[i + 1] = grayscale;
    imageData.data[i + 2] = grayscale;
    } 
    context.putImageData(imageData, 0, 0); //takes an image's data and writes it onto the canvas
}



