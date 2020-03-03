
//Declare Variables
var i, slidetemplate, next, prev, dots, slideIndex;

slideIndex = 0;

//Target Elements
next = document.getElementsByClassName("next");
prev = document.getElementsByClassName("prev");
dots = document.getElementsByClassName("dot"); 




next[0].onclick = function() {
    showSlides(slideIndex+=1);
}

prev[0].onclick = function() {
    showSlides(slideIndex-=1);
}

//Call the showslide function
showSlides(slideIndex);


function showSlides(n) {
    slidetemplate = document.getElementsByClassName("captiontext");
    for (let i = 0; i < slidetemplate.length; i++) {
        slidetemplate[i].style.display = "none";
    }

    if (n < 0) {
        slideIndex = (slidetemplate.length - 1);
    }

    if (n > (slidetemplate.length - 1)) {
        slideIndex = 0;
    }

    for (i = 0; i < slidetemplate.length; i++){
        slidetemplate[slideIndex].style.display = "block";
    }

    
    

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activedot", "");
    }

    dots[slideIndex].className += " activedot";
    
    setTimeout(showSlides, 10000);
    
    

}



window.onscroll = function () {
    if (document.body.scrollTop > 0.5 || document.documentElement.scrollTop > 0.5) {
        document.getElementsByClassName("header")[0].style.position = "fixed";
        document.getElementsByClassName("header")[0].style.top = "-120px";
        document.getElementsByClassName("header")[0].style.margin = "7.5%";
        document.getElementsByClassName("header")[0].style.zIndex = "100"; 
        document.getElementsByClassName("header")[0].style.transition = "300ms"; 
        document.getElementsByClassName("header")[0].style.backgroundColor = "rgba(255, 255, 255, 0.7)"; 

    }

    else {
        document.getElementsByClassName("header")[0].style.position = "static";
        document.getElementsByClassName("header")[0].style.top = "none";
        document.getElementsByClassName("header")[0].style.margin = "auto";
        document.getElementsByClassName("header")[0].style.zIndex = "100";  
        document.getElementsByClassName("header")[0].style.backgroundColor = "white";
    }
}


// For Email form

var emformcont, emclose, emwrapper, emailbtn;
emformcont = document.getElementsByClassName("emmodalheader")[0];
emwrapper = document.getElementsByClassName("emaiwrapper")[0];
emclose = document.getElementById("emailclose");
emailbtn = document.getElementsByClassName("emailbutton")[0];

emailbtn.onclick = function () {
    emwrapper.style.display = "block";
}


emclose.onclick = function () {
    emwrapper.style.display = "none";
}

window.onclick = function(evt) {
    if(evt.target === emwrapper) {
        emwrapper.style.display = "none"; 
    }
}


//Code for Mobile Nav

var nav, mobicon, hamberger;
mobicon = document.getElementsByClassName("navicon")[0];
nav = document.getElementsByClassName("mobilenav")[0];
hamberger = getElementsByClassName("navmenuwrapper")[0];

mobicon.addEventListener('click', function() {
    nav.classList.toggle("changemobnav");
}) 



function navtabfunction () {
    var accbtn;

accbtn = document.getElementsByClassName("accbtn");
for (let i = 0; i <= accbtn.length; i++) {
    accbtn[i].addEventListener('click', function() {
        this.classList.toggle('activemobnavtab');
    })

    var acccont = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none;"
    }
}

}


