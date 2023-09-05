const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(progressBar => {
    const targetLevel = progressBar.getAttribute("data-level");
    progressBar.style.width = `${targetLevel}%`;
});