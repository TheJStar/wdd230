let copyRightDate = document.querySelector("#copyRightDate");
let lastModified = document.querySelector("#lastModified");
// const timestamp = document.querySelector("#timestamp");
let options = {day: "numeric", month: "numeric", year: "numeric", hour: "numeric"};
copyRightDate.textContent = new Date().toLocaleDateString("en-US", {year: "numeric"});
lastModified.textContent = "Last Modified: " + new Date().toLocaleDateString("en-US", options);
// timestamp.textContent = new Date().toLocaleDateString("en-US", options);