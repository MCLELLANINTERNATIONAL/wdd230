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
    // Create the main card
    let card = document.createElement('section');

    // Create and fill the name heading
    let fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Create image
    let portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Create and fill other data
    let birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

    let birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

    let numOfChildren = document.createElement('p');
    numOfChildren.textContent = `Number of Children: ${prophet.numofchildren}`;

    let length = document.createElement('p');
    length.textContent = `Length of Service: ${prophet.length} years`;

    let order = document.createElement('p');
    order.textContent = `Order of Presidency: ${prophet.order}`;

    let death = document.createElement('p');
    death.textContent = `Died: ${prophet.death}`;

    // Append all elements to the card
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(numOfChildren);
    card.appendChild(length);
    card.appendChild(order);
    card.appendChild(death);
    card.appendChild(portrait);

    // Append card to the cards container
    cards.appendChild(card);
  });
};