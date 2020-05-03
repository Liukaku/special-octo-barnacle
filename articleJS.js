function isItDarkOut() {
    if (localStorage.getItem("Dark Mode") == "Enabled") {
        darkMode();
        console.log("it is");
    } 
    
    if (localStorage.getItem("Dark Mode") != "Enabled"){
        console.log("it is not")
    }
}

function setStorage(){


    if (localStorage.getItem("Dark Mode") != "Enabled"){
        localStorage.setItem("Dark Mode", "Enabled");
        console.log("I'll remember this")
        return
    } 

    if (localStorage.getItem("Dark Mode") == "Enabled") {
        localStorage.setItem("Dark Mode", "Disabled");
        console.log("byeee");    
        return
    } 




}


function darkMode(){
    document.getElementById('headerIMG').classList.toggle("header-dark-mode");
    document.getElementById('bodyCol').classList.toggle("dark-mode");
    document.getElementById('navList').classList.toggle("dark-mode");
    document.getElementById('articHR1').classList.toggle("hr-dark-mode");
    document.getElementById('articHR2').classList.toggle("hr-dark-mode");
    document.getElementById('navLinks1').classList.toggle("dark-mode-links")
    document.getElementById('navLinks2').classList.toggle("dark-mode-links")
    document.getElementById('navLinks3').classList.toggle("dark-mode-links")
    document.getElementById('navLinks4').classList.toggle("dark-mode-links")
    document.getElementById('navLinks5').classList.toggle("dark-mode-links")
    document.getElementById('featured-articles').classList.toggle("dark-mode");
    document.getElementById('featured-articles2').classList.toggle("dark-mode");
    document.getElementById('featured-Colour2').classList.toggle("featured-dark-mode");
    document.getElementById('featured-Heading').classList.toggle("featured-dark-mode");
    document.getElementById('featured-Heading2').classList.toggle("featured-dark-mode");
    document.getElementById('featured-Colour').classList.toggle("featured-dark-mode");

    setStorage();
  }

  
//gets the element

var h1 = document.getElementById('article-img');
var s1 = document.getElementById('sneakyOne');
var s2 = document.getElementById('notifier');

//gets it's position in the window/viewport

var bounding = h1.getBoundingClientRect();

//log the results
console.log(bounding);

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight + 200 || document.documentElement.clientHeight)
    );
};

if (isInViewport(h1)) {
    console.log('nice');
} else {
    console.log('fail');

}

window.addEventListener('scroll', function (ev) {
    if (isInViewport(h1)) {
        h1.classList.add("changeColor");
        h1.setAttribute("src", "https://media1.giphy.com/media/LW5vBvAb48Oe9OoEKT/source.gif");
        h1.setAttribute("width", "");
    } else {
        h1.setAttribute("src", "https://i.ibb.co/tX7g8nH/source.gif");
        h1.setAttribute("width", "672");
    }
}, false);

function bgScroll(s1, s2) {
    if (isInViewport(s1, s2)) {
        document.getElementById('testing').classList.add("changeColor");
        console.log("hello");
    } else {
        console.log("yikes");
    }

}


 
//gets the element

var h2 = document.getElementById('article-img2');
var s3 = document.getElementById('sneakyOne2');
var s4 = document.getElementById('notifier2');

//gets it's position in the window/viewport

var bounding2 = h2.getBoundingClientRect();

//log the results
console.log(bounding2);

var isInViewport2 = function (elem) {
    var bounding2 = elem.getBoundingClientRect();
    return (
        bounding2.top >= 0 &&
        bounding2.left >= 0 &&
        bounding2.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding2.bottom <= (window.innerHeight + 200 || document.documentElement.clientHeight)
    );
};

if (isInViewport(h2)) {
    console.log('nice');
} else {
    console.log('fail');

}

window.addEventListener('scroll', function (ev) {
    if (isInViewport2(h2)) {
        h2.classList.remove("goodbyee")
        h2.classList.add("changeColor");
        console.log("boop");
    } else {
        h2.classList.add("goodbyee")
        console.log("oops");
        
        h2.classList.remove("changeColor");   
    }
}, false);

