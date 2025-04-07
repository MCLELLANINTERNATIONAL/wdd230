const url = './data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    console.error("Failed to fetch prophet data:", error);
  }
}

function displayProphets(prophets) {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');

    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    const birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

    const birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;

    const children = document.createElement('p');
    children.textContent = `Children: ${prophet.numofchildren}`;

    const order = document.createElement('p');
    order.textContent = `Order: ${prophet.order}`;

    const length = document.createElement('p');
    length.textContent = `Length of Service: ${prophet.length} years`;

    const death = document.createElement('p');
    death.textContent = prophet.death ? `Died: ${prophet.death}` : 'Living Prophet';

    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of President ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(children);
    card.appendChild(order);
    card.appendChild(length);
    card.appendChild(death);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}

getProphetData();
