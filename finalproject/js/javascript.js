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


var time= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
console.log(time);


//sunday
if (weekday_value == 0){
    pText.textContent = "Unfortunately, Salon Ryann Rose is closed today.";
    }
//monday
if ((weekday_value == 1) && ((time.hour >= 08) && (time.hour <= 05))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Mondays, but at this time, It's not operating."
}
//tuesday
if ((weekday_value == 2) && ((time.hour >= 8) && (time.hour <= 5))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Tuesdays, but at this time, It's not operating."
}
//wednesday
if ((weekday_value == 3) && ((time.hour >= 8) && (time.hour <= 5))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Wednesdays, but at this time, It's not operating."
}
//thursday
if ((weekday_value == 4) && ((time.hour >= 8) && (time.hour <= 5))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Thursdays, but at this time, It's not operating."
}
//friday
if ((weekday_value == 5) && ((time.hour >= 8) && (time.hour <= 3))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Fridays, but at this time, It's not operating."
}
//saturday
if ((weekday_value == 6) && ((time.hour >= 8) && (time.hour <= 8))){
    pText.textContent = "Salon Ryann Rose is open!";
    }else{
    pText.textContent = "The salon is open on Tuesdays, but at this time, It's not operating."
}
 



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