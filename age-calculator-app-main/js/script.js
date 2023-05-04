const days = document.querySelector(".days");
const months = document.querySelector(".months");
const years = document.querySelector(".years");
const btn = document.querySelector(".btn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");


btn.addEventListener("click",(e) => {
    e.preventDefault();
    const birthYear = years.value;
    const birthMonth = months.value;
    const birthDay = days.value;
     const birth = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
    const today = new Date();

    let yearDiff = today.getFullYear() - birth.getFullYear();
    if(today.getMonth() < birth.getMonth() && today.getDate() < birth.getDate()){
        yearDiff = yearDiff - 1;
    }

    // Oyni hisoblash

    let monthDiff = today.getMonth() - birth.getMonth();
    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())){
        monthDiff +=12;
    }
    // Kunni hisoblash
    let dayDiff = today.getDate() - birth.getDate();
    if(dayDiff < 0){
        const lastMonth = new Date(today.getFullYear(),today.getMonth(),0);
        dayDiff = lastMonth.getDate() - birth.getDate() + today.getDate();
        monthDiff--;
    }
    one.innerHTML = yearDiff;
    two.innerHTML = monthDiff;
    three.innerHTML = dayDiff;
})


