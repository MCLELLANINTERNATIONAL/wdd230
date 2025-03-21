document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const visitsDisplay = document.querySelector(".visits");
    const sidebarMessage = document.querySelector(".sidebar-message");

    // Get number of visits
    let numVisits = Number(localStorage.getItem("numVisits")) || 0;

    // Display visit count
    if (numVisits !== 0) {
        visitsDisplay.textContent = `Visit count: ${numVisits}`;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    // Increment and store visit count
    numVisits++;
    localStorage.setItem("numVisits", numVisits);

    // Get current date and last visit date
    const currentDate = new Date();
    const lastVisit = localStorage.getItem("lastVisitDate");

    if (!lastVisit) {
        // First visit
        sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const diffTime = currentDate - lastVisitDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            sidebarMessage.textContent = "Back so soon! Awesome!";
        } else if (diffDays === 1) {
            sidebarMessage.textContent = "You last visited 1 day ago.";
        } else {
            sidebarMessage.textContent = `You last visited ${diffDays} days ago.`;
        }
    }

    // Update last visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});