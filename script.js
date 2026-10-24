const screens = document.querySelectorAll(".screen");

function showScreen(id) {
screens.forEach(screen => screen.classList.remove("active"));
const page = document.getElementById(id);
if (page) page.classList.add("active");
}

window.addEventListener("load", () => {
setTimeout(() => {
const loader = document.getElementById("loader");
const app = document.getElementById("app");

if (loader) loader.classList.add("hidden");
if (app) app.classList.remove("hidden");

showScreen("welcome");

}, 1200);
});

const startBtn = document.getElementById("startBtn");
if (startBtn) {
startBtn.addEventListener("click", () => showScreen("password"));
}

const unlockBtn = document.getElementById("unlockBtn");
if (unlockBtn) {
unlockBtn.addEventListener("click", () => {
const pass = document.getElementById("passwordInput").value.trim().toLowerCase();

if (pass === "cherry") {
  document.getElementById("errorText").innerText = "";
  showScreen("letterIntro");
} else {
  document.getElementById("errorText").innerText = "Wrong password 🤍";
}

});
}

const letter = `Hey Shreya... 💌❤️

Happy Birthday, my girl. 🎂🤍

You don't know how special you are to me, Baby. It's your birthday, but I think I'm happier than you are. ❤️ Today, my girl was born—the girl who made my entire life beautiful. I love you so much. Once again, Happy Birthday, Baby. 🫂❤️

Do you remember that day when you corrected my Physics paper and gave me extra marks? And to thank you, I gave you chewing gum. I still remember that day, and it always makes me smile. Unexpectedly, it became one of the best days of my life.

I know I had a past, about Meha and everything. I'm really sorry for that. But now, I'm all yours, and I promise I'll always stay loyal to you, Baby. ❤️ I want to marry you, Shreya. I'm madly in love with you, and I dream about you every single day. Thank you for everything. 🤍

My everything is you. If it's you, then it's a yes for everything. ❤️ I hope our relationship ends with marriage, two children, and the beautiful life we've always dreamed of. Daily hugs, kisses, and growing old together. 🥹❤️

At the end of this letter, I just want to thank you once again and tell you that I love you so much. One day, I hope we'll become husband and wife, and stay together until we become grandfather and grandmother. ❤️♾️

From your man, ❤️
Vikas ❤️`;

let typingTimer;

function typeLetter() {
const box = document.getElementById("typewriter");
if (!box) return;

clearInterval(typingTimer);
box.textContent = "";
let i = 0;

typingTimer = setInterval(() => {
box.textContent += letter.charAt(i);
i++;

if (i >= letter.length) clearInterval(typingTimer);

}, 35);
}

const openLetterBtn = document.getElementById("openLetterBtn");
if (openLetterBtn) {
openLetterBtn.addEventListener("click", () => {
showScreen("letter");
setTimeout(typeLetter, 300);
});
}

const memories = [
{
image: "images/IMG_20260704_133328_799.jpg",
title: "Our First Meet ❤️",
text: "Our first photo together."
},
{
image: "images/IMG_20260710_130013.png",
title: "The Photo Which Changed My Life 🩷",
text: "Our first day when we entered in relationship."
},
{
image: "images/IMG-20260607-WA0052_1783152248876.jpg",
title: "Cutest Photo Of All Time 🤍",
text: "I'm in love with this photo."
},
{
image: "images/IMG_20260710_130214.png",
title: "Our Second Meet 💗",
text: "This'll be my best memory."
},
{
image: "images/IMG-20260620-WA0006_1783152248627.jpg",
title: "My Angry Bird 💛",
text: "A cute photo, I watch and laugh every time."
},
{
image: "images/IMG_20260704_133301_105.jpg",
title: "This One Is Nearest To My Heart 💟",
text: "I drew my whole world in my diary."
}
];

let memoryIndex = 0;

function loadMemory() {
const item = memories[memoryIndex];
const img = document.getElementById("memoryImage");
if (img) img.src = item.image;

const title = document.getElementById("memoryTitle");
if (title) title.textContent = item.title;

const text = document.getElementById("memoryText");
if (text) text.textContent = item.text;

const count = document.getElementById("currentMemory");
if (count) count.textContent = memoryIndex + 1;
}

const memoryBtn = document.getElementById("memoryBtn");
if (memoryBtn) {
memoryBtn.addEventListener("click", () => {
memoryIndex = 0;
loadMemory();
showScreen("memory");
});
}

const nextMemoryBtn = document.getElementById("nextMemoryBtn");
if (nextMemoryBtn) {
nextMemoryBtn.addEventListener("click", () => {
memoryIndex++;

if (memoryIndex >= memories.length) {
  showScreen("birthday");
} else {
  loadMemory();
}

});
}

const giftBtn = document.getElementById("giftBtn");
if (giftBtn) giftBtn.addEventListener("click", () => showScreen("gift"));

const galleryNextBtn = document.getElementById("galleryNextBtn");
if (galleryNextBtn) galleryNextBtn.addEventListener("click", () => showScreen("surprise"));

const replayBtn = document.getElementById("replayBtn");
if (replayBtn) {
replayBtn.addEventListener("click", () => {
memoryIndex = 0;
loadMemory();
showScreen("memory");
});
}

const promiseBtn = document.getElementById("promiseBtn");
if (promiseBtn) promiseBtn.addEventListener("click", () => showScreen("promise"));

const startNewSurpriseBtn = document.getElementById("startNewSurpriseBtn");
if (startNewSurpriseBtn) {
startNewSurpriseBtn.addEventListener("click", () => {
showScreen("cakePage");

let number = 3;
const countdown = document.getElementById("countdown");
const birthdayText = document.getElementById("birthdayText");
const continueBtn = document.getElementById("cakeContinueBtn");
const candles = document.querySelectorAll("#cakePage .candle");

if (!countdown) return;

countdown.textContent = number;
if (birthdayText) birthdayText.style.display = "none";
if (continueBtn) continueBtn.style.display = "none";
candles.forEach(candle => candle.style.display = "block");

const timer = setInterval(() => {
  number--;

  if (number > 0) {
    countdown.textContent = number;
  } else {
    clearInterval(timer);
    countdown.textContent = "💨";
    candles.forEach(candle => candle.style.display = "none");
    if (birthdayText) birthdayText.style.display = "block";
    if (continueBtn) continueBtn.style.display = "block";
  }
}, 1000);

});
}

const cakeContinueBtn = document.getElementById("cakeContinueBtn");
if (cakeContinueBtn) {
cakeContinueBtn.addEventListener("click", () => showScreen("gallery"));
}

loadMemory();