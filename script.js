

const bar = document.getElementById("bar");
const list = document.querySelector(".list");
const closed = document.getElementById("close");
bar.addEventListener("click", () => {
    list.classList.add("active")
})

closed.addEventListener("click", () => {
    list.classList.remove("active")
})


const number = document.getElementById("num");
let num = 0;
const point = document.getElementById("point");
let pointer = 0;

const ratingNum = document.getElementById("ratingNum");
let rating = 0;
const ratingPoint = document.getElementById("ratingPoint");
let rp = 0;

const languageNum = document.getElementById("languageNum");
let languagesCount = 0;

const bankNum = document.getElementById("bankNum");
let bankCount = 0;
const observer = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            setInterval(() => {
                if (num === 6) {
                    clearInterval();
                } else {
                    num++;
                    number.innerText = num;
                }
            }, 100);

            setInterval(() => {
                if (pointer === 5) {
                    clearInterval();
                } else {
                    pointer++;
                    point.innerText = pointer;
                }
            }, 200);



        }
    })
}, {
    threshold: 0.8
})

observer.observe(number);
observer.observe(point);


const ratingObs = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            setInterval(() => {
                if (rating === 4) {
                    clearInterval();
                } else {
                    rating++;
                    ratingNum.innerText = rating;
                }
            }, 100);

            setInterval(() => {
                if (rp === 7) {
                    clearInterval();
                } else {
                    rp++;
                    ratingPoint.innerText = rp;
                }
            }, 200);
        }
    })
}, {
    threshold: 0.1
})

ratingObs.observe(ratingNum);
ratingObs.observe(ratingPoint);

const languages = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            setInterval(() => {
                if (languagesCount === 20) {
                    clearInterval();
                } else {
                    languagesCount++;
                    languageNum.innerText = languagesCount;
                }
            }, 100);
        }
    })
}, {
    threshold: 0.1
})

languages.observe(languageNum);


const bank = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            setInterval(() => {
                if (bankCount === 15) {
                    clearInterval();
                } else {
                    bankCount++;
                    bankNum.innerText = bankCount;
                }
            }, 100);
        }
    })
}, {
    threshold: 0.1
})

bank.observe(bankNum);
