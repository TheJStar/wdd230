const themeButton = document.querySelector('#theme');
const html = document.querySelector("html");
let light = true;

themeButton.addEventListener('click', () => {
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