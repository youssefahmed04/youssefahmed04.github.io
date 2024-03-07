"use strict";

const resumeContainer = document.querySelector(".resume-box");

// Data
class resumeData {
  constructor(name, location, year, pos, tech, p1, p2, p3, p4) {
    this.name = name;
    this.location = location;
    this.year = year;
    this.pos = pos;
    this.tech = tech;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }
}

const education = new resumeData(
  "Cornell University",
  "Ithaca, NY",
  "Expected Graduation: Dec 2025",
  "Bachelor of Science in Computer Science",
  "",
  "",
  "",
  "",
  ""
);

const cup = new resumeData(
  "Cornell Cup Robotics",
  "Ithaca, NY",
  "Feb 2023 - Present",
  "AI/ML Software Engineer",
  "Python",
  "Conducted ML research in reinforcement learning to optimize bipedal robot performance via MuJoCo/Gym simulation",
  "Developed object detection software in Python using K-means clustering for robotic lab assistant, achieving 88.0% detection accuracy without obstacle interference and 66.8% with obstacle interference",
  "Created TensorFlow-based machine learning model, increasing object recognition across lab equipment by 8.5%",
  "Delivered weekly Scrum updates to 20-member Agile team to improve understanding of subteam interdependencies"
);

const codeNinjas = new resumeData(
  "Code Ninjas",
  "Edison, NJ",
  "Aug 2020 - Aug 2022",
  "Computer Science Intern",
  "Python, Java",
  "Supervised 8 summer camps, improving coding skills for 100+ students, leading to a 25% rise in project completion",
  "Led 20 interactive lectures and directed 5+ coding projects to teach programming fundamentals in Python and Java",
  "Mentored Code Ninjas tutors on technology usage and STEM education methods, reducing onboarding by 3 hours",
  ""
);

const renderResume = function (resume) {
  //If no points
  let point1 = resume.p1 ? `<li>${resume.p1}</li>` : "";
  let point2 = resume.p2 ? `<li>${resume.p2}</li>` : "<hr>";
  let point3 = resume.p3 ? `<li>${resume.p3}</li>` : "";
  let point4 = resume.p4 ? `<li>${resume.p4}</li>` : "";

  //If no header
  let header = resume.name
    ? `
    <div class="res-header">
        <div class="company">
            <h2 class="company-name">${resume.name}</h2>
            <h2 class="location">${resume.location}</h2>
        </div>
        <h2 class="years">${resume.year}</h2>
    </div>
    `
    : "";

  //If no tech or date
  let tech = resume.tech ? `<h4 class="tech">${resume.tech}</h4>` : "";
  let date = resume.date ? `<h4 class="date">${resume.date}</h4>` : "";

  return `
    ${header}
    <div class="res-sub">
        <h4 class="position">${resume.pos}</h4>
        ${tech}
        ${date}
    </div>
    <div class="res-body">
        ${point1}
        ${point2}
        ${point3}
        ${point4}
    </div>
  `;
};

const createResume = function () {
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(education));
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(cup));
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(codeNinjas));
};

createResume();
