document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.1 // 10% visibility
    });

    const skillsSection = document.querySelector("#skills");
    observer.observe(skillsSection);
});

function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animerSkillBars();
        }
    });
}

function animerSkillBars() {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        bar.style.transition = null;
        bar.style.width = 0;
        const width = bar.getAttribute('data-skill');
        const percentage = parseInt(width, 10);
        const color = getGradientColor(percentage);
        bar.style.backgroundColor = color;
        setTimeout(() => {
            bar.style.transition = "width 1s ease-in-out, background-color 1s ease-in-out";
            bar.style.width = width;
        }, 500);
    });
}

function getGradientColor(percentage) {
    const startColor = [186, 172, 231]; // RGB for 0%
    const endColor = [83, 116, 227]; // RGB for 100%
    
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * (percentage / 100));
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * (percentage / 100));
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * (percentage / 100));
    
    return `rgb(${r}, ${g}, ${b})`;
}

function toggleProject(element) {
    element.classList.toggle('open');
}
