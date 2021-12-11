// functions
setUserName = () => {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    storedName = myName;
    myHeading.textContent = 'Mozilla is cool, ' + myName; 
}

changeImage = () => {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "./images/edge-icon.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

changeHeading = () => {
    if (myHeading.textContent.includes("Mozilla")) {
        myHeading.textContent = "Hello World! "  + storedName;
    } else {
        myHeading.textContent = "Mozilla is cool! " + storedName;
    }
}

// main flow
var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img");
var myButton = document.querySelector("button");
var storedName;

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// On click
myButton.onclick = () => {
    setUserName();
}

myImage.onclick = () => {
    changeImage();
}

myHeading.onclick = () => {
    changeHeading();
}
