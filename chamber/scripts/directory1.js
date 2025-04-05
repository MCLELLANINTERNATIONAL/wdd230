const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.createElement("article");
document.querySelector("main").appendChild(display);

const requestURL = "data/members.json";

async function getMembers() {
  const response = await fetch(requestURL);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  display.innerHTML = ""; // Clear existing content

  members.forEach((member) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = `Address: ${member.address}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${member.phone}`;  

    const website = document.createElement("a");
    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");
    website.textContent = member.website;

    const logo = document.createElement("img");
    logo.setAttribute("src", member.image); // No "images/" prefix
    logo.setAttribute("alt", `${member.name} logo`);
    logo.setAttribute("loading", "lazy");

    const membership = document.createElement("p");
    membership.textContent = `Membership: ${member.membership}`;


    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(website);
    display.appendChild(card);
  });
}

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

getMembers();
