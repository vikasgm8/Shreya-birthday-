
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  const page = document.getElementById(id);
  if (page) page.classList.add("active");
}

function startWebsite() {
  const loader = document.getElementById("loader");
  const app = document.getElementById("app");
  if (loader) loader.classList.add("hidden");
  if (app) app.classList.remove("hidden");
  showScreen("welcome");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startWebsite);
} else {
  startWebsite();
}

// PASSWORD
document.getElementById("startBtn")?.addEventListener("click", () => {
  showScreen("password");
});

function unlock() {
  const password = document.getElementById("passwordInput").value.trim().toLowerCase();
  const error = document.getElementById("errorText");

  if (password === "cherry") {
    error.textContent = "";
    showScreen("letterIntro");
  } else {
    error.textContent = "Wrong password 🤍";
  }
}

document.getElementById("unlockBtn")?.addEventListener("click", unlock);

document.getElementById("passwordInput")?.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

// LETTER
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

document.getElementById("openLetterBtn")?.addEventListener("click", () => {
  showScreen("letter");
  clearInterval(typingTimer);

  const box = document.getElementById("typewriter");
  box.textContent = "";
  let i = 0;

  typingTimer = setInterval(() => {
    box.textContent += letter.charAt(i++);
    if (i >= letter.length) clearInterval(typingTimer);
  }, 35);
});

// SIX PHOTOS
const memories = [
  {
    image: "images/IMG-20260607-WA0052_1783152248876.jpg",
    title: "Our First Meet ❤️",
    text: "Our first photo together."
  },
  {
    image: "images/IMG-20260612-WA0000_1783152248772.jpg",
    title: "The Photo Which Changed My Life 🩷",
    text: "Our special memory together."
  },
  {
    image: "images/IMG-20260620-WA0006_1783152248627.jpg",
    title: "Cutest Photo Of All Time 🤍",
    text: "I'm in love with this photo."
  },
  {
    image: "images/IMG_20260704_133301_105.jpg",
    title: "Our Sweet Memory 💗",
    text: "This will always be a special memory."
  },
  {
    image: "images/IMG_20260726_214637.png",
    title: "My Favourite Memory 💛",
    text: "A memory I'll always keep close to my heart."
  },
  {
    image: "images/file_00000000b9a471faab0fc62c60d5db6c.png",
    title: "Nearest To My Heart 💟",
    text: "I drew my whole world in my diary."
  }
];

let memoryIndex = 0;

function loadMemory() {
  const item = memories[memoryIndex];
  document.getElementById("memoryImage").src = item.image;
  document.getElementById("memoryTitle").textContent = item.title;
  document.getElementById("memoryText").textContent = item.text;
  document.getElementById("currentMemory").textContent = memoryIndex + 1;
}

document.getElementById("memoryBtn")?.addEventListener("click", () => {
  memoryIndex = 0;
  loadMemory();
  showScreen("memory");
});

document.getElementById("nextMemoryBtn")?.addEventListener("click", () => {
  memoryIndex++;
  if (memoryIndex >= memories.length) {
    showScreen("birthday");
  } else {
    loadMemory();
  }
});

// BIRTHDAY AND GIFT
document.getElementById("giftBtn")?.addEventListener("click", () => showScreen("gift"));
document.getElementById("giftContinueBtn")?.addEventListener("click", () => showScreen("gallery"));
document.getElementById("galleryNextBtn")?.addEventListener("click", () => showScreen("surprise"));

document.getElementById("replayBtn")?.addEventListener("click", () => {
  memoryIndex = 0;
  loadMemory();
  showScreen("memory");
});

document.getElementById("promiseBtn")?.addEventListener("click", () => showScreen("promise"));

// CAKE COUNTDOWN
let cakeTimer;

document.getElementById("startNewSurpriseBtn")?.addEventListener("click", () => {
  clearInterval(cakeTimer);
  showScreen("cakePage");

  let number = 3;
  const countdown = document.getElementById("countdown");
  const birthdayText = document.getElementById("birthdayText");
  const continueBtn = document.getElementById("cakeContinueBtn");
  const candles = document.querySelectorAll("#cakePage .candle");

  countdown.textContent = number;
  birthdayText.style.display = "none";
  continueBtn.style.display = "none";

  candles.forEach(candle => candle.style.display = "block");

  cakeTimer = setInterval(() => {
    number--;

    if (number > 0) {
      countdown.textContent = number;
    } else {
      clearInterval(cakeTimer);
      countdown.textContent = "💨";

      candles.forEach(candle => candle.style.display = "none");

      birthdayText.style.display = "block";
      continueBtn.style.display = "block";
    }
  }, 1000);
});

document.getElementById("cakeContinueBtn")?.addEventListener("click", () => {
  showScreen("gallery");
});

loadMemory();


/* MOBILE MEMORY PAGE FIX */
#memory {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
}

#memory .card {
  box-sizing: border-box;
  width: 100%;
  max-width: 360px;
  max-height: calc(100vh - 32px);
  margin: auto;
  padding: 18px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
}

#memory h2,
#memory h3,
#memory p,
#typewriter {
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: normal;
  white-space: normal;
  font-size: 16px;
  line-height: 1.6;
}

#memory h2 {
  font-size: 23px;
}

#memory h3 {
  font-size: 19px;
}

#memory .memory-frame {
  width: 100%;
  height: 220px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#memory .memory-frame img,
#memory #memoryImage {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

#memory button {
  max-width: 100%;
  white-space: normal;
  font-size: 15px;
}
  
