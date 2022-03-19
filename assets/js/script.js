// interactivity
document.querySelectorAll("summary").forEach((element) => {
    element.addEventListener("mousedown", (event) => {
        let elemActive = event.target.getAttribute("active");
        event.target.setAttribute("active", elemActive ? "false" : "true");
    });
});
