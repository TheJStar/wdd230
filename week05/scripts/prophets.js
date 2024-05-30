const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    try {
        const respons = await fetch(url);
        if (respons.ok) {

        } else {
            throw Error(await respons.text());
        }
        
        const data = await respons.json();
        // console.table(data);
        displayProphets(data.prophets);
    } catch (error) {
        console.log(error);
    }
    
}

const displayProphets = (prophets) => {
    prophets.forEach( (prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p")
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.src = prophet.imageurl;
        portrait.alt = `${fullName.textContent}'s portrait`;
        portrait.loading = "lazy";
        portrait.width = "340";
        portrait.height = "440";
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        card.classList.add("card");
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);  

        cards.appendChild(card);
    });
}

getProphetData(url);