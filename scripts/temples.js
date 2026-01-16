const menuButton = document.querySelector("#menu");
const navList = document.querySelector("nav ul");

menuButton.textContent = "☰";

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuButton.textContent = navList.classList.contains("open") ? "✖" : "☰";
});


// Get year and lastModified date
document.addEventListener("DOMContentLoaded", function () {
	const currentYear = document.querySelector("#currentYear");
	// const lastModified = document.querySelector("#lastModified");

	const today = new Date();
	// const modifiedDate = new Date(document.lastModified);

	if (currentYear) {
		currentYear.textContent = today.getFullYear();
	}

    document.getElementById("lastModified").innerHTML = document.lastModified;

// 	if (lastModified) {
// 		lastModified.textContent = new Intl.DateTimeFormat("en-US", {
// 			dateStyle: "full"
// 		}).format(modifiedDate);
// 	}
});