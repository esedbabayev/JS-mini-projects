const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

window.addEventListener("mousemove", (e) => {
    outer.style.transform = `translate(${e.x}px, ${e.y}px)`;
    inner.style.transform = `translate(${e.x}px, ${e.y}px)`;
});