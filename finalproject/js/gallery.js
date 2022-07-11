//gallery
const request = "./gallery.json";


document.addEventListener("load", viewcards());

function viewcards(){
    fetch(request)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject)
        const photos = jsonObject['photos']
        photos.forEach(displayCards);
    });
    

    function displayCards(photos){
        let card = document.createElement('section');
        let title = document.createElement('strong');
        let image = document.createElement('img');
        image.setAttribute('src', photos.image);
        image.setAttribute('alt', `${photos.service} Photo`);
        image.setAttribute('class', "gallery-image" );

        title.textContent = `${photos.service}`;
        title.setAttribute('class', "gallery-text");
        
    
    
        card.appendChild(image);
        card.appendChild(title);
    
        document.querySelector('div.pictures').appendChild(card);
    }

    }
