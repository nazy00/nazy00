// interactivity
document.querySelectorAll("summary").forEach((element) => {
    element.addEventListener("mousedown", (event) => {
        event.target.active = !event.target.active;
    });
});
