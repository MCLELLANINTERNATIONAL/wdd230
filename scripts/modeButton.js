const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "rgba(255, 255, 0, 1";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#FFD1DC";
		main.style.color = "#E75480";
		modeButton.textContent = "🕶️";
	}
});
