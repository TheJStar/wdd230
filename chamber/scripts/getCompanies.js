const companiesURL = "https://TheJStar.github.io/wdd230/chamber/data/members.json";

async function getLinks(url) {
    try {
        const respons = await fetch(url);
        if (respons.ok) {

        } else {
            throw Error(await respons.text());
        }
        
        const data = await respons.json();
        console.table(data);
        displayCompanies(data);
    } catch (error) {
        console.log(error);
    }
    
}

function displayCompanies(companies) {
    const artical = document.querySelector("#directory");
    companies.members.foreach(member => {
        const section = document.createElement("section");

        const name = document.createElement("h2");
        name.textContent = member.name;
        const address = document.createElement("p");
        address.textContent = member.adress
        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = member.phoneNumber;
        const website = document.createElement("a");
        website.href = member.website;
        website.textContent = member.name;
        const image = document.createElement("img");
        image.src = member.image; 
        image.alt = "company logo";
        const membershipLevel = document.createElement("h3");
        membershipLevel.textContent = member.membershipLevel;

        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phoneNumber);
        section.appendChild(website);
        section.appendChild(image);
        section.appendChild(membershipLevel);

        artical.appendChild(section);
    });
}

function displayLinks(links) {
    const card = document.querySelector("#assignments");
    const ul = document.createElement("ul");
    links.weeks.forEach(week => {
        const li = document.createElement("li");
        li.classList.add("week");
        li.textContent = week.week + ": ";
        week.links.forEach(link => {
            const a = document.createElement("a");
            a.ariaLabel = "assignment";
            a.href = link.url;
            a.textContent = link.title;
            li.appendChild(a);
            li.innerHTML += " | ";
        })
        ul.appendChild(li);
        card.appendChild(ul);
    });
}

getLinks(companiesURL);