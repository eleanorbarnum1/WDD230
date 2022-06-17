const request = "./data.json";




//button stuff
const card = document.getElementById("card-viewBTN");
card.addEventListener("click", toggle1);
card.addEventListener("click", viewCards);



function toggle1(){
    let c = document.querySelector(".cards");
    c.style.display="grid";
    let l = document.querySelector(".lists");
    l.style.display="none";
   
}

function viewCards(){

fetch(request)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject)
    const businesses = jsonObject['businesses']
    businesses.forEach(displayCards);
});

function displayCards(businesses){
    let card = document.createElement('section');
    let name = document.createElement('strong');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let link = document.createElement('a');
    let image = document.createElement('img');
    image.setAttribute('src', businesses.logo);
    image.setAttribute('alt', `${businesses.name}`);
    image.setAttribute('class', "card-viewimg" );

    address.textContent = `${businesses.address}`;
    address.setAttribute('class', "card-view" );

    number.textContent = `${businesses.phone}`;
    number.setAttribute('class', "card-view" );

    link.textContent = `${businesses.link}`;
    link.setAttribute = ('href', `${businesses.link}`);
    


    card.appendChild(image);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(link);

    document.querySelector('div.cards').appendChild(card);
}
}

//button2
const card2 = document.getElementById("list-viewBTN");
card2.addEventListener("click", toggle2);
card2.addEventListener("click", viewlist);


function toggle2(){
    let c = document.querySelector(".cards");
    c.style.display="none";
    let l = document.querySelector(".lists");
    l.style.display="table";
   
}

function viewlist(){
fetch(request)
.then(function(response){
    return response.json();
})
.then(function(jsonObject){
    console.table(jsonObject)
    const businesses = jsonObject['businesses']
    businesses.forEach(displayCards);
});

function displayCards(businesses){
    let card = document.createElement('section');
    let name = document.createElement('strong');
    let address = document.createElement('p');
    let number = document.createElement('p');
    let link = document.createElement('a');

    name.textContent = `${businesses.name}`;
    address.setAttribute('class', "list-view" );

    address.textContent = `${businesses.address}`;
    address.setAttribute('class', "list-view" );

    number.textContent = `${businesses.phone}`;
    number.setAttribute('class', "list-view" );

    link.textContent = `${businesses.link}`;
    link.setAttribute = ('href', `${businesses.link}`);
    

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(link);

    document.querySelector('div.lists').appendChild(card);
}
}