const darkModeButton = document.querySelectorAll(".child");

darkModeButton.forEach(button => {
    button.addEventListener("click", () => {
        const element = document.querySelector(".parant"); // gets the first div
        if (element.style.background == "blue") {
            element.style.background = "darkgray";
        } else {
            element.style.background = "blue";
        }
        
        console.log("Clicked!!!");
    })
});

