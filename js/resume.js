"use strict";

const resumeContainer = document.querySelector(".resume-box");

// Data
class resumeData {
  constructor(name, location, year, pos, tech, date, p1, p2, p3) {
    this.name = name;
    this.location = location;
    this.year = year;
    this.pos = pos;
    this.tech = tech;
    this.date = date;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
}

const education = new resumeData(
  "Cornell University",
  "Ithaca, NY",
  "Expected Graduation: May 2026",
  "Bachelor of Science in Computer Science",
  "",
  "",
  "",
  "",
  ""
);

const cup1 = new resumeData(
  "Cornell Cup Robotics",
  "Ithaca, NY",
  "Feb 2023 - Present",
  "Software Engineer - Virtual Reality Integration",
  "C#, Unity",
  "(Sep 2023 - Present)",
  "Designing a C#-based VR model in Unity for the teleoperation of our Bipedal Operational Bot (B.O.B) with the Meta Quest",
  "Delivering weekly Scrum updates to a 20+ member Agile team, enhancing awareness of interdependencies between subteams",
  ""
);

const cup2 = new resumeData(
  "",
  "",
  "",
  "Software Engineer - Object Detection",
  "Python, TensorFlow",
  "(Feb 2023 - Sep 2023)",
  "Developed object detection software in Python using K-means clustering for R2D2-inspired robotic lab assistant (C1C0), achieving 88.0% detection accuracy without obstacle interference and 66.8% with obstacle interference",
  "Created a TensorFlow-based machine learning model, increasing object recognition across various lab equipment by 8.5%",
  "Merged detection data with inverse kinematics to optimize the precision arm's path for reaching and grasping the target object"
);

const codeNinjas = new resumeData(
  "Code Ninjas",
  "Edison, NJ",
  "Aug 2020 - Aug 2022",
  "Lead Computer Science Instructor ",
  "Python, Lua",
  "",
  "Managed summer coding camps and instructed regular 3-hour weekly coding sessions for 15+ middle school students",
  "Taught programming fundamentals in Python and Lua through online coding games on Raspberry Pi and Roblox Studio",
  "Mentored new Code Ninjas tutors on technology usage and STEM education methods, reducing onboarding time by 50%"
);

const renderResume = function (resume) {
  //If no points
  let point1 = resume.p1 ? `<li>${resume.p1}</li>` : "";
  let point2 = resume.p2 ? `<li>${resume.p2}</li>` : "<hr>";
  let point3 = resume.p3 ? `<li>${resume.p3}</li>` : "";

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
    </div>
  `;
};

const createResume = function () {
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(education));
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(cup1));
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(cup2));
  resumeContainer.insertAdjacentHTML("beforeend", renderResume(codeNinjas));
};

createResume();
