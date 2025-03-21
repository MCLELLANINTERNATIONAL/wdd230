document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const visitsDisplay = document.querySelector(".visits");
    const sidebarMessage = document.querySelector(".last-visit-message");

    // Get number of visits
    let numVisits = Number(localStorage.getItem("numVisits")) || 0;

    // Display visit count
    if (numVisits !== 0) {
        visitsDisplay.textContent = `${numVisits}`;
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

        // Format last visit date and time
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const formattedDate = lastVisitDate.toLocaleString(undefined, options);

        if (diffDays === 0) {
            sidebarMessage.textContent = `Back so soon! Awesome! You last visited on ${formattedDate}.`;
        } else if (diffDays === 1) {
            sidebarMessage.textContent = `You last visited 1 day ago, on ${formattedDate}.`;
        } else {
            sidebarMessage.textContent = `You last visited ${diffDays} days ago, on ${formattedDate}.`;
        }
    }

    // Store current date
    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});