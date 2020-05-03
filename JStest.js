//this is all the dark mode stuff, copied from the articleJS file
function isItDarkOut() {
  if (localStorage.getItem("Dark Mode") == "Enabled") {
      localStorage.setItem("Dark Mode On Load", "true")
      darkMode();
      console.log("it is");
  } 
  
  if (localStorage.getItem("Dark Mode") != "Enabled"){
      localStorage.setItem("Dark Mode On Load", "false")
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
  if (localStorage.getItem("Dark Mode On Load") == "true") {
    localStorage.setItem("Dark Mode On Load", "False");
  } else {
    setStorage()
  }
  document.getElementById('headerIMG').classList.toggle("header-dark-mode");
  document.getElementById('open-menu').classList.toggle("header-dark-mode");
  document.getElementById('bodyCol').classList.toggle("dark-mode");
  document.getElementById('navList').classList.toggle("dark-mode");
  document.getElementById('articHR1').classList.toggle("hr-dark-mode");
  document.getElementById('articHR2').classList.toggle("hr-dark-mode");
  document.getElementById('frontPage').classList.toggle("hr-dark-mode");
  document.getElementById('largeTickle').classList.toggle("dark-mode-big");
  document.getElementById('pleaseWork').classList.toggle("dark-mode-indi");
  document.getElementById('lower').classList.toggle("dark-mode");
  document.getElementById('navLinks1').classList.toggle("dark-mode-links")
  document.getElementById('navLinks2').classList.toggle("dark-mode-links")
  document.getElementById('navLinks3').classList.toggle("dark-mode-links")
  document.getElementById('navLinks4').classList.toggle("dark-mode-links")
  document.getElementById('navLinks5').classList.toggle("dark-mode-links")
  document.getElementById('articles-container-void').classList.toggle("dark-mode");

  var epic = document.querySelectorAll('#smallText');
  var epicMickey = document.querySelectorAll(".individuals");
  
  for (let i = 0; i < epic.length; i++) {
    epic[i].classList.toggle("dark-mode-links");    
  }

  for (let i = 0; i < epicMickey.length; i++) {
    epicMickey[i].classList.toggle("dark-mode-indi");    
  }

  //epic[3].style.color = "red";  


  document.getElementById('featured-articles2').classList.toggle("dark-mode");
  document.getElementById('featured-Colour2').classList.toggle("featured-dark-mode");
  document.getElementById('featured-Heading').classList.toggle("featured-dark-mode");
  document.getElementById('featured-Heading2').classList.toggle("featured-dark-mode");
  document.getElementById('featured-Colour').classList.toggle("featured-dark-mode");

  
}

//this is where the dark mode stuff ends



$("#closebtn").on("click", function() {
  $("#mailingList").slideToggle(400);
});

$("#open-menu").on("click", function() {
  $("#mailingList").slideUp(600);
});

$("#close-menu").on("click", function() {
  $("#mailingList").slideDown(300);
});
//a tiny bit of jquery to hide the mailing list options in a nice way

var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function(){
    document.getElementById("headerIMG").classList.toggle("hideTitle");
    document.getElementById("open-menu").classList.toggle("hideTitle");
    overlay.classList.add('show-menu');
    overlay.classList.remove('hide-options');
    document.body.classList.add('stopScroll');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.add('hide-options');
    overlay.classList.toggle('show-menu');
    document.body.classList.remove('stopScroll');
    setTimeout(function(){document.getElementById("headerIMG").classList.toggle("hideTitle");}, 700);
    setTimeout(function(){document.getElementById("open-menu").classList.toggle("hideTitle");}, 850);
    
});



/* the below controls making sure that the options menu takes you to where it says it will
*/

function menuUpdateArt() {
  if (document.getElementById("optionsObject0").innerHTML === "art") {
    document.getElementById("optionsObject0").innerHTML = "editorial";
    document.getElementById("optionsObject1").innerHTML = "illustrations";
    document.getElementById("optionsObject2").innerHTML = "fan art";
    document.getElementById("optionsObject3").innerHTML = "comissions";
    editorialLink();
  } else {
    console.log("nothing interesting happens");
  }
}

function editorialLink(){
  if (document.getElementById("optionsObject0").innerHTML === "editorial") {
    document.getElementById("optionsObject0").addEventListener("click", function(event){
    document.getElementById("optionsObject0").href = "https://create.adobe.com/2016/4/20/what_art_directors_want_a_guide_for_editorial_illustrators.html";
  })
    document.getElementById("optionsObject1").addEventListener("click", function(event){
    document.getElementById("optionsObject1").href = "https://www.google.com";
  })
    document.getElementById("optionsObject2").addEventListener("click", function(event){
    document.getElementById("optionsObject2").href = "https://www.youtube.com";
  })
    document.getElementById("optionsObject3").addEventListener("click", function(event){
    document.getElementById("optionsObject3").href = "https://facebook.com";
  })
} else {
  console.log("yikes");
}
}

function menuUpdateWeb() {
  if (document.getElementById("optionsObject1").innerHTML === "Web Design") {
    document.getElementById("optionsObject0").innerHTML = "web comic";
    document.getElementById("optionsObject1").innerHTML = "news article";
    document.getElementById("optionsObject2").innerHTML = "landing page";
    document.getElementById("optionsObject3").innerHTML = "other";
    webLink();
  } else {
    console.log("nothing interesting happens");
  }
}

function webLink(){
  if (document.getElementById("optionsObject0").innerHTML === "web comic") {
    document.getElementById("optionsObject0").addEventListener("click", function(event){
    document.getElementById("optionsObject0").href = "https://www.oursuperadventure.com/";
  })
    document.getElementById("optionsObject1").addEventListener("click", function(event){
    document.getElementById("optionsObject1").href = "News 3.html";
  })
    document.getElementById("optionsObject2").addEventListener("click", function(event){
    document.getElementById("optionsObject2").href = "https://webflow.com/";
  })
    document.getElementById("optionsObject3").addEventListener("click", function(event){
    document.getElementById("optionsObject3").href = "http://y78.fr/";
  })
} else {
  console.log("yikes");
}
}

function undoFunc() {
  if (document.getElementById("optionsObject0").innerHTML != "art") {
    document.getElementById("optionsObject0").innerHTML = "art";
    document.getElementById("optionsObject1").innerHTML = "Web Design";
    document.getElementById("optionsObject2").innerHTML = "Anime";
    document.getElementById("optionsObject3").innerHTML = "Memes";
    undoLink();
  } else {
    console.log("nothing interesting happens");
  }
}

function undoLink(){
  if (document.getElementById("optionsObject0").innerHTML === "art") {
    document.getElementById("optionsObject0").addEventListener("click", function(event){
    document.getElementById("optionsObject0").href = "#";
  })
    document.getElementById("optionsObject1").addEventListener("click", function(event){
    document.getElementById("optionsObject1").href = "#";
  })
    document.getElementById("optionsObject2").addEventListener("click", function(event){
    document.getElementById("optionsObject2").href = "#";
    })
    document.getElementById("optionsObject3").addEventListener("click", function(event){
    document.getElementById("optionsObject3").href = "#";
    })
} else {
  console.log("yikes");
}
}

