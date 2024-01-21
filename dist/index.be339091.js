"use strict";
const sliderContainer = document.querySelector(".slider");
let setInterval = null;
// Data
class courseData {
    constructor(name, course, year){
        this.name = name;
        this.course = course;
        this.year = year;
    }
}
const cs110 = new courseData("Introduction to Computing Using Python", "CS 1110", "Fall 2022");
const engri1101 = new courseData("Engineering Applications of Operations Research", "ENGRI 1101", "Spring 2022");
const cs2110 = new courseData("Object-Oriented Programming and Data Structures", "CS 2110", "Spring 2023");
const math2940 = new courseData("Linear Algebra for Engineers", "MATH 2940", "Spring 2023");
const cs2800 = new courseData("Discrete Structures", "CS 2800", "Fall 2023");
const cs3110 = new courseData("Data Structures and Functional Programming", "CS 3110", "Fall 2023");
const cs4820 = new courseData("Introduction to Analysis of Algorithms", "CS 4820", "Spring 2024");
const engrd2720 = new courseData("Data Science for Engineers", "ENGRD 2720", "Spring 2024");
const renderSlide = function(course) {
    return `
    <div class="slide">
      <div class="course">
          <h5 class="course-name">${course.name}</h5>
          <h6 class="course-no">${course.course}</h6>
          <div class="college">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Cornell_University_Logo.png">
            <div class="college-info">
              <span>${course.year}</span>
              <h5>Cornell University</h5>
            </div>
          </div>
      </div>
    </div>
  `;
};
const createSlides = function() {
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(cs110));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(engri1101));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(cs2110));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(math2940));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(cs2800));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(cs3110));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(cs4820));
    sliderContainer.insertAdjacentHTML("afterbegin", renderSlide(engrd2720));
};
createSlides();
//Slider
const slider = function() {
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");
    let curSlide = 0;
    let firstSlide = 0;
    let maxSlide = slides.length - 1;
    if (window.innerWidth > 600) {
        curSlide = 1;
        firstSlide = 1;
        maxSlide = slides.length - 2;
    }
    //Functions
    const createDots = function() {
        slides.forEach(function(_, i) {
            if (window.innerWidth > 600) {
                if (i != 0 && i != 7) dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
            } else dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activateDot = function(slide) {
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
    };
    const goToSlide = function(slide) {
        slides.forEach((s, i)=>s.style.transform = `translateX(${100 * (i - slide)}%)`);
    };
    const nextSlide = function() {
        if (curSlide === maxSlide) curSlide = firstSlide;
        else curSlide++;
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    const prevSlide = function() {
        if (curSlide === firstSlide) curSlide = maxSlide;
        else curSlide--;
        goToSlide(curSlide);
        activateDot(curSlide);
    };
    const init = function(num) {
        goToSlide(num);
        createDots();
        activateDot(num);
    };
    if (window.innerWidth > 600) init(1);
    else init(0);
    //Event handlers
    btnRight.addEventListener("click", function() {
        nextSlide();
        restartInterval();
    });
    btnLeft.addEventListener("click", function() {
        prevSlide();
        restartInterval();
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "ArrowLeft") {
            prevSlide();
            restartInterval();
        }
        if (e.key === "ArrowRight") {
            nextSlide();
            restartInterval();
        }
    });
    dotContainer.addEventListener("click", function(e) {
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
            restartInterval();
        }
    });
    const start = function() {
        setInterval = window.setInterval(function() {
            nextSlide();
            setInterval;
        }, 4000);
    };
    const restartInterval = function() {
        clearInterval(setInterval);
        start();
    };
    start();
};
slider();

//# sourceMappingURL=index.be339091.js.map
