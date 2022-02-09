import "./less/index.less";



// Mouseover

const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", function (event) {
  event.target.style.color = "orange";
}); 

funBus.addEventListener('mouseleave', function (event) {
    event.target.style.color = "";
})







// Keydown

//Select the nav-links
// const navBar = document.querySelectorAll(".nav-links");

// //Listen for the keydown event, and then change the color to purple.
// navBar (link => {
//   document.addEventListener("keydown", event => {
//     if (event.key === "n") {
//       event.target.style.color = "purple";
//     }
//     })
// });






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

//const letsGo = document.querySelector(".text-content h2");

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
topImg.addEventListener()

