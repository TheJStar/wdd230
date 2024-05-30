const themeButton = document.querySelector('#theme');
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const nav = document.getElementById("navigation");
const navListItemsAnchors = document.querySelectorAll("nav > ul > li > a");
const menu = document.querySelector("#menu");
const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const person = document.querySelector(".person-name");
const cardListItems = document.querySelectorAll(".week");

const html = document.querySelector("html");
let light = true;

themeButton.addEventListener('click', () => {
    themeButton.classList.toggle("dark");
    header.classList.toggle("dark");
    footer.classList.toggle("dark");
    body.classList.toggle("dark");
    menu.classList.toggle("dark");
    person.classList.toggle("dark");
    nav.classList.toggle("dark");
    navListItemsAnchors.forEach(a => {
        a.classList.toggle("dark");
    })
    cardListItems.forEach(li => {
        li.classList.toggle("dark");
        li.querySelectorAll("a").forEach(a => {
            a.classList.toggle("dark");
        })
    })
    // h1[1].classList.toggle("dark");
    h1.forEach(h => {
        h.classList.toggle("dark");
    })
    h2.forEach(h => {
        h.classList.toggle("dark");
    })
    if (light) {
        light = false
        html.style.setProperty("--base-color", "#2d5d4d");
        html.style.setProperty("--background-color", "#141414");
        html.style.setProperty("--text-color", "white");
        html.style.setProperty("--accent-color", "aqua");
    } else {
        light = true
        html.style.setProperty("--base-color", "aquamarine");
        html.style.setProperty("--background-color", "white");
        html.style.setProperty("--text-color", "black");
        html.style.setProperty("--accent-color", "blue");
    }
});

// this is used to changedthe prefered colors making it shorter 
// but limited only to the colors which in the case of this website is very good

// const html = document.querySelector("html");
// let light = true;

// themeButton.addEventListener('click', () => {
//     if (light) {
//         light = false
//         html.style.setProperty("--base-color", "#2d5d4d");
//         html.style.setProperty("--background-color", "#141414");
//         html.style.setProperty("--text-color", "white");
//         html.style.setProperty("--accent-color", "aqua");
//     } else {
//         light = true
//         html.style.setProperty("--base-color", "aquamarine");
//         html.style.setProperty("--background-color", "white");
//         html.style.setProperty("--text-color", "black");
//         html.style.setProperty("--accent-color", "blue");
//     }
// });