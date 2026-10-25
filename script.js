document.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id);
  const screens = document.querySelectorAll(".screen");

  function showScreen(id) {
    screens.forEach(screen => screen.classList.remove("active"));
    const page = $(id);
    if (page) page.classList.add("active");
  }

  // Always remove the loading screen and show the first page.
  $("loader")?.classList.add("hidden");
  $("app")?.classList.remove("hidden");
  showScreen("welcome");

  $("startBtn").addEventListener("click", () => showScreen("password"));

  $("unlockBtn").addEventListener("click", () => {
    const password = $("passwordInput").value.trim().toLowerCase();

    if (password === "cherry") {
      $("errorText").textContent = "";
      showScreen("letterIntro");
    } else {
      $("errorText").textContent = "Wrong password 🤍";
    }
  });

  $("passwordInput").addEventListener("keydown", event => {
    if (event.key === "Enter") $("unlockBtn").click();
  });

  const letter = `Hey Shreya... 💌❤️

Happy Birthday, my girl. 🎂🤍

You don't know how special you are to me, Baby. It's your birthday, but I think I'm happier than you are. ❤️ Today, my girl was born—the girl who made my entire life beautiful. I love you so much. Once again, Happy Birthday, Baby. 🫂❤️

Do you remember that day when you corrected my Physics paper and gave me extra marks? And to thank you, I gave you chewing gum. I still remember that day, and it always makes me smile. Unexpectedly, it became one of the best days of my life.

I know I had a past, about Meha and everything. I'm really sorry for that. But now, I'm all yours, and I promise I'll always stay loyal to you, Baby. ❤️ I want to marry you, Shreya. I'm madly in love with you, and I dream about you every single day. Thank you for everything. 🤍

My everything is you. If it's you, then it's a yes for everything. ❤️ I hope our relationship ends with marriage, two children (our elder one will be a girl 👧 and our younger one will be a boy 👦🤭), and the beautiful life we've always dreamed of. Daily hugs, kisses, and growing old together. Even imagining all of that makes me feel shy. 🥹❤️

At the end of this letter, I just want to thank you once again and tell you that I love you so much. One day, I hope we'll become husband and wife, and stay together until we become grandfather and grandmother. ❤️♾️

From your man, ❤️
Vikas ❤️`;

  let typingTimer;

  $("openLetterBtn").addEventListener("click", () => {
    showScreen("letter");
    clearInterval(typingTimer);

    const box = $("typewriter");
    box.textContent = "";
    let i = 0;

    typingTimer = setInterval(() => {
      box.textContent += letter.charAt(i);
      i++;

      if (i >= letter.length) clearInterval(typingTimer);
    }, 25);
  });

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
      title: "Our Second Meet With Your Best Friend 💗",
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
    $("memoryImage").src = item.image;
    $("memoryTitle").textContent = item.title;
    $("memoryText").textContent = item.text;
    $("currentMemory").textContent = memoryIndex + 1;
  }

  $("memoryBtn").addEventListener("click", () => {
    memoryIndex = 0;
    loadMemory();
    showScreen("memory");
  });

  $("nextMemoryBtn").addEventListener("click", () => {
    memoryIndex++;

    if (memoryIndex >= memories.length) {
      showScreen("birthday");
    } else {
      loadMemory();
    }
  });

  $("giftBtn").addEventListener("click", () => showScreen("gift"));
  $("giftContinueBtn").addEventListener("click", () => showScreen("gallery"));
  $("galleryNextBtn").addEventListener("click", () => showScreen("surprise"));

  $("replayBtn").addEventListener("click", () => {
    memoryIndex = 0;
    loadMemory();
    showScreen("memory");
  });

  $("promiseBtn").addEventListener("click", () => showScreen("promise"));

  let cakeTimer;

  $("startNewSurpriseBtn").addEventListener("click", () => {
    clearInterval(cakeTimer);
    showScreen("cakePage");

    let number = 3;
    $("countdown").textContent = number;
    $("birthdayText").style.display = "none";
    $("cakeContinueBtn").style.display = "none";
    $("blowText").style.display = "block";

    document.querySelectorAll(".candle").forEach(candle => {
      candle.style.display = "block";
    });

    cakeTimer = setInterval(() => {
      number--;

      if (number > 0) {
        $("countdown").textContent = number;
      } else {
        clearInterval(cakeTimer);
        $("countdown").textContent = "💨";
        $("blowText").textContent = "Make a wish, Shreya! ❤️";

        document.querySelectorAll(".candle").forEach(candle => {
          candle.style.display = "none";
        });

        $("birthdayText").style.display = "block";
        $("cakeContinueBtn").style.display = "block";
      }
    }, 1000);
  });

  $("cakeContinueBtn").addEventListener("click", () => showScreen("gallery"));

  loadMemory();
});
