const baseURL = "https://github.com/TheJStar/wdd230/";
const linksURL = "https://github.com/TheJStar/wdd230/data/links.json";

async function getLinks(url) {
    const respons = await fetch(url);
    const data = await respons.json();
    console.table(data);
}
getLinks("https://github.com/TheJStar/wdd230/data/links.json");