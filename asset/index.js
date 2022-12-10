/* Selectors */
const ratings = document.querySelectorAll(".rating");
const ratingForm = document.querySelector(".rating-form");
const firstStep = document.querySelector(".first-step");
const secStep = document.querySelector(".second-step");
const resultRating = document.querySelector("#chosen-rating");


// since I didn't use button as rating button
ratings.forEach(rating => rating.addEventListener("click", ({target}) => {
    // remove selected class from every other rating
    ratings.forEach(rating => rating !== target && rating.classList.remove("selected"));

    rating.classList.toggle("selected")
}));

ratingForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    [firstStep, secStep].forEach(i => i.classList.toggle("hidden"));

    // get & set the selected rating
    resultRating.textContent = Array.from(ratings).find(rating => rating.classList.contains("selected")).textContent;
})