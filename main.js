let myImage = document.querySelector('img'); 

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src'); 
    if(mySrc === 'images/koala.jpg') {
        myImage.setAttribute('src','images/koala2.jpg'); 
    } else {
        myImage.setAttribute('src', 'images/koala.jpg'); 
    }
}

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1'); 

function setUserName() {
    let myName = prompt('So what do they call you'); 
    if(!myName) {
        setUserName(); 
    } else {
        localStorage.setItem('name', myName); 
        myHeading.textContent = 'James just got rich af, ' + myName; 
    }
}

if(!localStorage.getItem('name')) {
    setUserName(); 
} else {
    let storedName = localStorage.getItem('name'); 
    myHeading.textContent = 'James just got rich af, ' + storedName; 
}

myButton.onclick = function() {
    setUserName(); 
}