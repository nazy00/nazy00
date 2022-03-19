// interactivity
document.querySelectorAll("details").forEach((element) => {
    element.addEventListener("click", (event) => {
        if (event.target.getAttribute("open")) {
            event.target.children.summary.style.color = "#ff86dd";
        } else {
            event.target.children.summary.style.color = initial;
        }
    });
});
