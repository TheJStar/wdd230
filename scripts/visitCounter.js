const visitCounter = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-localStorage")) || 0;

if (numVisits !== 0) {
    visitCounter.textContent = numVisits;
} else {
    visitCounter.textContent = "Welcome to my website. I see this is your first time 😶‍🌫️";
}

numVisits++;

localStorage.setItem("numVisits-localStorage", numVisits);