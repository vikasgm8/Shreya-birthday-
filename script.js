// PART 1

const loadingScreen = document.querySelector(".loading-screen");
const website = document.getElementById("website");
const startBtn = document.getElementById("startBtn");

window.addEventListener("load", () => {

    setTimeout(() => {
        loadingScreen.style.display = "none";
        website.classList.remove("hidden");
    }, 2000);

});

startBtn.addEventListener("click", () => {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

});

const birthdayDate = new Date("January 9, 2027 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
// PART 2

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

    if (distance < 0) {

        clearInterval(timer);

        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

    }

}
// PART 3

updateCountdown();

const timer = setInterval(updateCountdown, 1000);

document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("span");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.color = "rgba(255,255,255,0.7)";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = Math.random() * 15 + 10 + "px";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0px)",
                opacity: 1
            },
            {
                transform: "translateY(-60px)",
                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 1000);

});