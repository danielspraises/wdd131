document.addEventListener("DOMContentLoaded", () => {

  initializeWelcomeMessage();
  initializeTheme();
  initializeRoadmap();
  initializeTools();
  initializeForm();

});

function initializeWelcomeMessage() {
  const messageElement = document.querySelector("#welcomeMessage");
  if (messageElement) {
    messageElement.textContent = `DevLaunch provides a structured path to mastering modern web technologies.`;
  }
}

function initializeTheme() {
  const toggle = document.querySelector("#themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");

      const isLight = document.body.classList.contains("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
}

const roadmapData = [
  { title: "HTML & CSS Foundations", level: "beginner" },
  { title: "JavaScript Fundamentals", level: "beginner" },
  { title: "Version Control with Git", level: "intermediate" },
  { title: "Node.js & REST APIs", level: "intermediate" },
  { title: "System Architecture & Scaling", level: "advanced" }
];

function initializeRoadmap() {
  const selector = document.querySelector("#levelSelect");
  if (selector) {
    selector.addEventListener("change", () => {
      displayRoadmap(selector.value);
    });
    displayRoadmap(selector.value);
  }
}

function displayRoadmap(level) {
  const container = document.querySelector("#roadmapContainer");

  const filtered = roadmapData.filter(item => item.level === level);

  let advisory;

  if (level === "beginner") {
    advisory = "Start with core fundamentals.";
  } else if (level === "intermediate") {
    advisory = "Strengthen your development workflow.";
  } else {
    advisory = "Prepare for advanced system design.";
  }

  container.innerHTML = `
    <p>${advisory}</p>
    ${filtered.map(item => `
      <div class="card">
        <h3>${item.title}</h3>
        <p>Level: ${item.level}</p>
      </div>
    `).join("")}
  `;
}

const toolsData = [
  { name: "Visual Studio Code" },
  { name: "Git" },
  { name: "Node.js" }
];

function initializeTools() {
  const container = document.querySelector("#toolsContainer");
  if (container) {
    renderTools();
  }
}

function renderTools() {
  const container = document.querySelector("#toolsContainer");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  container.innerHTML = toolsData.map(tool => `
    <div class="card">
      <h3>${tool.name}</h3>
      <button data-tool="${tool.name}">
        ${favorites.includes(tool.name) ? "Saved" : "Save"}
      </button>
    </div>
  `).join("");

  document.querySelectorAll("[data-tool]").forEach(button => {
    button.addEventListener("click", event => {
      saveTool(event.target.dataset.tool);
    });
  });
}

function saveTool(toolName) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.includes(toolName)) {
    favorites.push(toolName);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderTools();
}

function initializeForm() {
  const form = document.querySelector("#contactForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.querySelector("#name").value;
      const output = document.querySelector("#formMessage");

      output.textContent = `Thank you ${name}. Your message has been successfully submitted.`;
    });
  }
}
