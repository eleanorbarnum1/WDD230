//let date = document.getElementById("date");
//const now = new Date();
//const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
//datefield.innerHTML = `<em>${fulldate}</em>`;



function toggleMenu(){
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("btn").classList.toggle("open");
}

const x = document.getElementById("btn");   
x.onclick = toggleMenu;



let date = new Date();
let year = date.getFullYear();
let month = date.toLocaleString("en-US", { month: "long" });
let day = date.getDate();

let oLastModif = document.lastModified;

document.querySelector(".javafoot").innerHTML = `&copy ${year} Midlothian Commerce Center |`;
document.querySelector(".lastmod").innerHTML = `Last Modified: ${oLastModif}`;


const weekdays = new Array(7);
weekdays[0] = "Sunday",
weekdays[1] = "Monday",
weekdays[2] = "Tuesday",
weekdays[3] = "Wednesday",
weekdays[4] = "Thursday",
weekdays[5] = "Friday",
weekdays[6] = "Saturday",

weekday_value = date.getDay();

document.querySelector(".current-date").innerHTML = `${weekdays[weekday_value]}, ${day} ${month} ${year}`;

const banner = document.querySelector(".banner-close");

banner.addEventListener("click", function(){
this.closest(".banner").style.display = "none";
});

if((weekdays[weekday_value] == "Monday")||(weekdays[weekday_value] == "Tuesday")){
    banner.closest(".banner").style.display = "block";
}else{
    banner.closest(".banner").style.display = "none";
}


//local storage

const daysSince = document.getElementById("local-storage");
const time = window.localStorage.getItem("visits-ls");

if(time !==0){
    daysSince.innerHTML = time;
}else{
    daysSince.innerHTML = `ugh.`;
}
