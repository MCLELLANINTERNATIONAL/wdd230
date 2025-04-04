// Step 1: Declare the JSON URL
const url = 'https://mclellaninternational.github.io/wdd230/week05/data/prophets.json';

// Step 2: Select the #cards container
const cards = document.querySelector('#cards');

// Step 3: Fetch Data Asynchronously
async function getProphetData() {
  const response = await fetch(url); // fetch the data
  const data = await response.json(); // convert to JSON
  // console.table(data.prophets); // optional debug - comment or delete once verified
  displayProphets(data.prophets); // pass only the array, not the whole object
}

// Step 4: Call the async function
getProphetData();

// Step 5: Display the Prophets using DOM manipulation
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create section card
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Fill in content
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Set attributes for image
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the cards container
    cards.appendChild(card);
  });
};