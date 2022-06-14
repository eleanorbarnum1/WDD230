const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        const prophets = jsonObject['prophets'];
        console.table(jsonObject);
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthday = document.createElement('p');
    let birthplace = document.createElement('p');
    let image = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    image.setAttribute('src', prophet.imageurl);
    image.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);

    card.appendChild(h2);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
}
