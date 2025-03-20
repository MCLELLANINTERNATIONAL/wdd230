// Page Visit Counter using localStorage
document.addEventListener("DOMContentLoaded", () => {
    // Select the visits span element
    const visitsDisplay = document.querySelector(".visits");
    
    // Get the current count from localStorage or initialize to 0 if it doesn't exist
    let numVisits = Number(localStorage.getItem("numVisits")) || 0;
    
    // Increment the count for this visit
    numVisits++;
    
    // Display the number of visits
    visitsDisplay.textContent = numVisits;
    
    // Store the new count back in localStorage
    localStorage.setItem("numVisits", numVisits);
    
    // Optional: You can add special messages based on visit count
    // if (numVisits === 1) {
    //   visitsDisplay.textContent = ⁠ ${numVisits} (First visit!) ⁠;
    // }
  });