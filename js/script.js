"use strict";

// Selecting the DOM elements

const ratingState = document.querySelector(".rating-state");
const ratingBtns = document.querySelector(".rating-btns");
const submitBtn = document.querySelector(".submit-btn");

// APP

class App {
  curRating = 0;
  ratingBtnsArray = Array.from(ratingBtns.children);

  constructor() {
    // Assign event handlers
    ratingBtns.addEventListener("click", this.selectRtng.bind(this));
    submitBtn.addEventListener("click", this.submitRtng.bind(this));
  }

  selectRtng(e) {
    const target = e.target;
    if (target.tagName === "DIV") return;
    this.ratingBtnsArray.forEach((btn) => {
      btn.classList.remove("rating-btn--active");
    });
    target.classList.add("rating-btn--active");
    this.curRating = target.dataset.rating;
  }

  submitRtng() {
    if (!this.curRating) {
      alert("Please select a rating first.");
      return;
    }
    this.sucessfulSubmit(this.curRating);
  }

  sucessfulSubmit(rtng) {
    ratingState.classList.add("fade-animation");
    setTimeout(function () {
      ratingState.classList.add("items-center");
      ratingState.innerHTML = `
        <div class="ty-illustration-box">
            <img src="./images/illustration-thank-you.svg" />
        </div>
        <p class="rating-selected">You selected ${rtng} out of 5</p>
        <h1 class="heading-primary">Thank you!</h1>
        <p class="ty-text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
        </p>`;
      ratingState.classList.remove("fade-animation");
    }, 200);
  }
}

const app = new App();
