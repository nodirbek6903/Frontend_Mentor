const subBtn = document.querySelectorAll(".submit-button");
const backBtn = document.querySelectorAll(".back");
const step = document.querySelectorAll(".card-right");
const rang = document.querySelectorAll(".rang");
const formsCard = document.querySelector(".form-card");
const step5 = document.querySelector("#step5");
let currentColor = 0;
let currentStep = 0;

subBtn.forEach((submit) => {
    submit.addEventListener("click",(e) => {
        e.preventDefault();
        step[currentStep].classList.remove("active_card");
        currentStep++;
        step[currentStep].classList.add("active_card");
        // rangga active qoshish
        rang[currentColor].classList.remove("active");
        currentColor++;
        rang[currentColor].classList.add("active");
    })
})
backBtn.forEach((back) => {
    back.addEventListener("click",() => {
        step[currentStep].classList.remove("active_card");
        currentStep--;
        step[currentStep].classList.add("active_card");

        rang[currentColor].classList.remove("active");
        currentColor--;
        rang[currentColor].classList.add("active");
    })
})

const card = document.querySelectorAll(".card"),
money = document.querySelectorAll(".money");