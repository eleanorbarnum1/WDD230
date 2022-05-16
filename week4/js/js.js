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
let oLastModif = document.lastModified;

document.querySelector(".javafoot").innerHTML = `&copy ${year} Midlothian Commerce Center |`;
document.querySelector(".lastmod").innerHTML = `Last Modified: ${oLastModif}`;
