import "./less/index.less";

/**
 * My Javascript file contains 13 addEventListeners. 
 */

// Mouseover

const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", function (event) {
  event.target.style.color = "orange";
}); 

funBus.addEventListener('mouseleave', function (event) {
    event.target.style.color = "";
})




//Mouseover

const welcome = document.querySelector(".intro h2");
welcome.addEventListener("mouseover", (event) => {
  event.target.style.color = 'green';
});

welcome.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
})


//mouseover again

const welcomeP = document.querySelector('.intro p');
welcomeP.addEventListener('mouseover', function(event) {
    event.target.style.color = 'orangered';
});
welcomeP.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
});

//mouseover header

const headerColor = document.querySelector('.nav-container');
headerColor.addEventListener('mouseover', function(event) {
    event.target.style.background = 'skyblue';
});
headerColor.addEventListener('mouseleave', function(event) {
    event.target.style.background = '';
});




//Keydown

function colorChange (event) {
    if (event.key === 'b') {
        event.target.style.color = 'red';
    } else if (event.key === 'c') {
        event.target.style.color = '';
    }
}

document.addEventListener('keydown', colorChange);





//Keydown
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        event.preventDefault;
        alert('Word');
    }
});



//keydown
const topImg = document.querySelector('.intro img');

function changeImg (event) {
    if(event.key === 'd') {
        topImg.src = 'https://www.kidgooroo.com/files/2017/12/CARTOON-BUS.png';
    } else if (event.key === 'e') {
        topImg.src = 'http://localhost:9000/img/fun-bus.jpg'
    }
}

document.addEventListener('keydown', changeImg);



//click

const footerColor = document.querySelector('.footer');
footerColor.addEventListener('click', function(event) {
    event.target.style.background = 'green';
});


//click
const sectionColor = document.querySelector('.text-content');
sectionColor.addEventListener('click', function(event) {
    event.target.style.color = 'blue';
});
