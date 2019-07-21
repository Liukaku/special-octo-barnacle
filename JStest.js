

$("#closebtn").on("click", function() {
  $("#mailingList").slideToggle(400);
});

$("#open-menu").on("click", function() {
  $("#mailingList").slideUp(600);
});

$("#close-menu").on("click", function() {
  $("#mailingList").slideDown(300);
});


var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

document.getElementById('open-menu').addEventListener('click', function(){
    overlay.classList.add('show-menu');
    document.body.classList.add('stopScroll');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu');
    document.body.classList.remove('stopScroll');
});

/*
function stopScroll() {
  document.body.style.overflow = 'hidden';
}
*/


/*make is to that if the options menu is shown the overflow: hidden; 
if not then have it be overflow: ; */

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
