document.addEventListener("DOMContentLoaded", function() {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-skill');
        const percentage = parseInt(width, 10);
        const color = `rgb(${255 - (percentage * 1.5)}, ${255 - (percentage * 0.5)}, ${255 - (percentage * 1.5)})`;
        bar.style.backgroundColor = color;
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

function toggleProject(element) {
    element.classList.toggle('open');
}
