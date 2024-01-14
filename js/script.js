"use strict";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Home Page
const homeBtn = document.getElementById("home-btn");
const homeSection = document.querySelector(".home-container");

// About Page
const aboutBtn = document.getElementById("about-btn");
const aboutSection = document.querySelector(".about-container");

// Resume Page
const resumeBtn = document.getElementById("resume-btn");
const resumeSection = document.querySelector(".resume-container");

// Projects Page
const projectsBtn = document.getElementById("projects-btn");
const projectsSection = document.querySelector(".projects-container");
const projects = document.querySelector(".projects");

// Contact Page
const contactBtn = document.getElementById("contact-btn");
const contactSection = document.querySelector(".contact-container");

//Data
class modalData {
  constructor(name, cat, tech, url, img1, img2 = "", d1, d2 = "", d3 = "") {
    this.name = name;
    this.cat = cat;
    this.tech = tech;
    this.url = url;
    this.img1 = img1;
    this.img2 = img2;
    this.d1 = d1;
    this.d2 = d2;
    this.d3 = d3;
  }
}

const wordleRush = new modalData(
  "Wordle Rush",
  "Terminal-Based Game",
  "Ocaml",
  "https://github.com/youssefahmed04/WordleRush.git",
  "https://github.com/youssefahmed04/WordleRush/raw/main/data/WordleRush.png",
  "https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-square320-v3.png?format=pjpg&quality=75&auto=webp&disable=upscale",
  "Built a terminal-based Wordle game using <span>OCaml</span>, featuring a timer, hint functionality, and a comprehensive scoring system",
  "Applied <span>Lwt</span> library for multithreaded execution, ensuring timer and Wordle game concurrency through promises and monads",
  "Generated <span>1000+ lines</span> of OUnit test cases employing glass-box testing to ensure <span>95%</span> coverage of all source code functions"
);
const trendz = new modalData(
  "Trendz",
  "Social Media Website",
  "HTML, CSS, JavaScript",
  "https://github.com/youssefahmed04/Trendz.git",
  "https://github.com/youssefahmed04/Trendz/raw/main/src/assets/README-imgs/TrendzDarkMode.png",
  "https://github.com/youssefahmed04/Trendz/raw/main/src/assets/README-imgs/TrendzHomePage.png",
  "Developed social media platform with <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span> following the <span>Model-View-Controller</span> design pattern",
  "Leveraged <span>YouTube Data API</span> for trending videos display with pagination, tailored user profiles, and <span>40</span>-min content updates",
  "Enhancing GitHub repository, accomplishing <span>3+</span> new feature additions per month to elevate platform appeal and functionality"
);
const forkify = new modalData(
  "Forkify",
  "Recipe Website",
  "JavaScript",
  "https://github.com/youssefahmed04/Forkify.git",
  "https://github.com/youssefahmed04/Forkify/raw/main/src/img/forkify.png",
  "",
  "Deployed an interactive web application platform for food recipes, featuring functionalities like custom recipe upload, bookmarking favorites, and dynamically adjusting ingredient quantities",
  "Employed the Forkify API for efficient recipe retrieval to provide a diverse culinary database of over <span>1 million recipes</span>",
  "Constructed this website through the The Complete JavaScript Course 2023: From Zero to Expert! taught by Jonas Schmedtmann on Udemy"
);
const spacedOut = new modalData(
  "Spaced Out",
  "iOS Mobile Application",
  "Swift, UIKit",
  "https://github.com/quantitive/spaced-out-application.git",
  "https://user-images.githubusercontent.com/73197385/205422596-3baed671-9569-44a5-921e-83a52382b6f8.jpeg",
  "https://user-images.githubusercontent.com/73197385/205422821-ee97f620-66bc-4a4d-b9d1-2ec031195313.jpeg",
  "Developed an iOS application with a <span>5</span>-member team to display real-time traffic at various Cornell campus locations, aiming to reduce crowding by <span>20%</span> by enabling users to comment on and update the busyness of each area within a <span>50</span>-meter radius",
  "Implemented a 6-screen UI using <span>Swift</span> and <span>UIKit</span>, incorporating features that rely on backend integration, including user authentication and commenting functionalities, achieved through network requests to endpoints in the backend server",
  "Achieved a <span>top 10</span> ranking out of <span>40</span> competing teams and earned an honorable mention for <span>“Best Frontend”</span>"
);

const scrollToSection = function (button, section, offset = 120) {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default action of the button
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: sectionTop, // Scrolls to the section with an offset
      behavior: "smooth",
    });
  });
};

scrollToSection(homeBtn, homeSection);
scrollToSection(aboutBtn, aboutSection);
scrollToSection(resumeBtn, resumeSection);
scrollToSection(projectsBtn, projectsSection);
scrollToSection(contactBtn, contactSection);

function renderProject(project) {
  const removeSpaceName = project.name.split(" ").join("");
  return `
    <a class="show-modal" id="project-${removeSpaceName}">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div></div>
    <h4>${project.cat}</h4>
    <h3>${project.name}</h3>
    </a>
    <div class="modal modal-${removeSpaceName} hidden">
        <button class="close-modal"><i
            class="fa-solid fa-rectangle-xmark"></i></button>
        <div class="modal-content">
          <div class="images">
            <img class="pic-1"
              src="${project.img1}">
            <img class="pic-2"
              src="${project.img2}">
          </div>
          <div class="modal-text">
            <h1>${project.name}</h1>
            <div class="cat">
              <h3>Category:</h3>
              <h4> ${project.cat}</h4>
            </div>
            <div class="tech">
              <h3>Technology Used:</h3>
              <h4> ${project.tech}</h4>
            </div>
            <div class="github">
              <h3>Project URL:</h3>
              <a href="${project.url}"
                target="_blank"> <h4> GitHub</h4></a>
            </div>
            <div class="description">
              <li>
              ${project.d1}
              </li>
              <li>
              ${project.d2}
              </li>
              <li>
              ${project.d3}
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="overlay hidden"></div>
  `;
}

function createProjects() {
  projects.insertAdjacentHTML("beforeend", renderProject(spacedOut));
  projects.insertAdjacentHTML("beforeend", renderProject(wordleRush));
  projects.insertAdjacentHTML("beforeend", renderProject(trendz));
  projects.insertAdjacentHTML("beforeend", renderProject(forkify));
}

createProjects();

// --------------------- Reveal sections ---------------------
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// --------------------- Modal ---------------------
const overlay = document.querySelector(".overlay");

const openModal = function (modal) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
};

const closeModal = function (modal) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
};

// Attach event listeners to all "show-modal" buttons
document.querySelectorAll(".show-modal").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.id.replace("project-", "modal-");
    const modal = document.querySelector("." + modalId);
    if (modal) {
      openModal(modal);
    }
  });
});

// Attach event listeners to all "close-modal" buttons
document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", function () {
    const modal = this.closest(".modal");
    if (modal) {
      closeModal(modal);
    }
  });
});

// Close modal when clicking on overlay
overlay.addEventListener("click", function () {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (!modal.classList.contains("hidden")) {
      closeModal(modal);
    }
  });
});

// Close modal on pressing Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (!modal.classList.contains("hidden")) {
        closeModal(modal);
      }
    });
  }
});
