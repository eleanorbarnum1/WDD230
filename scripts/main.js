//displaying date in console
let date = new Date();
console.log(date)



//displaying year in console
let year = date.getFullYear();
console.log(year);

let oLastModif = document.lastModified;


// changing text in html
//document.querySelector("h1").textContent = year;

//new way
document.querySelector(".one").innerHTML = `&copy ${year} .:|:. Eleanor Barnum .:|:. Idaho`;
document.querySelector(".two").innerHTML = `Last updated: ${oLastModif} `;

//old way
//let newpara = document.createElement("p");
//newpara.textContent = "This is my paragraph";
//document.querySelector("div").appendChild(newpara);

//document.querySelector('img').setAttribute('src', 'images/me.jpg')


//functions
//