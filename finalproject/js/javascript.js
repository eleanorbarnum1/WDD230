//Navigation
function toggleMenu(){
    document.getElementById("navbar").classList.toggle("open");
    document.getElementById("nav-btn").classList.toggle("open");
}

const x = document.getElementById('nav-btn');   
x.onclick = toggleMenu;


//availability thing
let date = new Date();
const weekdays = new Array(7);
weekdays[0] = "Sunday",
weekdays[1] = "Monday",
weekdays[2] = "Tuesday",
weekdays[3] = "Wednesday",
weekdays[4] = "Thursday",
weekdays[5] = "Friday",
weekdays[6] = "Saturday",

weekday_value = date.getDay();
console.log(weekday_value);

pText = document.querySelector(".javamainpage")


var time= new Date();
console.log(weekday_value);

if (weekday_value == 0){
    pText.textContent = "The salon is closed on sundays, sorry."
}else if (weekday_value == 1){
    pText.textContent = "The salon is open today, which is Monday!"
}else if (weekday_value == 2){
    pText.textContent = "The salon is open today, which is Tuesday!"
}else if (weekday_value == 3){
    pText.textContent = "The salon is open today, which is Wednesday!"
}else if (weekday_value == 4){
    pText.textContent = "The salon is open today, which is Thursday!"
}else if (weekday_value == 5){
    pText.textContent = "The salon is open today, which is Friday!"
}else if (weekday_value == 6){
    pText.textContent = "The salon is open today, which is Saturday!"
}






//local storage visit count
let section = document.querySelector('#localStorage');
let currentDate = new Date();
let storedDate = localStorage.getItem('last_visited');
let lastDate = new Date(storedDate);

if(!storedDate){
    section.textContent = "Ryann says: Welcome!";
}else{
    let otherTime = currentDate.getTime() - lastDate.getTime();
    let otherDay = Math.round(otherTime/(1000*60*60*24));
    section.textContent = `It's been ${otherDay} days since your last visit!`
}
localStorage.setItem('last_visited', currentDate);

// //sticky header:
// window.onscroll = function() {stickyScroll()};
// const header = document.getElementById("header-grid");
// const sticky = header.offsetTop;

// function stickyScroll(){
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }
//     }