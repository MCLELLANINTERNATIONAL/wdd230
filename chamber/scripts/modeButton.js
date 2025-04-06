const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");

modeButton.addEventListener("click", () => {
	main.classList.toggle("dark");

	if (main.classList.contains("dark")) {
		main.style.background = "#4169E1";
		h1.style.color = "#FFFFFF";
		modeButton.innerHTML = "🔆";
	}
	else {
		main.style.background = "#FFFFFF";
		h1.style.color = "#222222"; // 
		modeButton.innerHTML = "◐";
	}
});