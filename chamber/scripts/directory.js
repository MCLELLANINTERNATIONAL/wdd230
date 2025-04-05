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

    const logo = document.createElement("img");
    logo.setAttribute("src", member.image);
    logo.setAttribute("alt", `${member.name} logo`);
    logo.setAttribute("loading", "lazy");

        if (member.name === "RBS") {
            logo.style.width = "250px";
            logo.style.height = "70px";
        }

        if (member.name === "Standard Life") {
            logo.style.width = "150px";
            logo.style.height = "100px";
        }
        
        if (member.name === "University of Edinburgh") {
            logo.style.width = "350px";
            logo.style.height = "100px";
        }

        if (member.name === "Apple") {
            logo.style.width = "200px";
            logo.style.height = "100px";
        }

        if (member.name === "Microsoft") {
            logo.style.width = "220px";
            logo.style.height = "80px";
        }
      
        if (member.name === "IBM") {
            logo.style.width = "110px";
            logo.style.height = "40px";
        }

        if (member.name === "Foundever") {
            logo.style.width = "250px";
            logo.style.height = "44px";
        }

        if (member.name === "Leonardo") {
            logo.style.width = "250px";
            logo.style.height = "80px";
        }

    const name = document.createElement("h3");
    name.textContent = member.name;

    const address = document.createElement("p");
    address.textContent = `Address: ${member.address}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${member.phone}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${member.email}`;

    const hours = document.createElement("p");
    hours.textContent = `Business Hours: ${member.hours}`;

    const industry = document.createElement("p");
    industry.textContent = `Industry: ${member.industry}`;

    const description = document.createElement("p");
    description.textContent = member.description;

    const membership = document.createElement("p");
    membership.textContent = `Membership: ${member.membership}`;

    const website = document.createElement("a");
    website.setAttribute("href", member.website);
    website.setAttribute("target", "_blank");
    website.textContent = "Visit Website";

    // Append elements to card
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(industry);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(hours);
    card.appendChild(membership);
    card.appendChild(website);

    display.appendChild(card);
  });
}

// Toggle view buttons
gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

// Start loading data
getMembers();