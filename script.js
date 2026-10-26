document.addEventListener("DOMContentLoaded", function () {
  const $ = (id) => document.getElementById(id);

  // Show one page at a time
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.remove("active");
    });

    const page = $(id);
    if (page) {
      page.classList.add("active");
    }
  }

  // Start website
  const loader = $("loader");
  const app = $("app");

  if (loader) loader.classList.add("hidden");
  if (app) app.classList.remove("hidden");

  showScreen("welcome");

  // Welcome page
  if ($("startBtn")) {
    $("startBtn").addEventListener("click", () => {
      showScreen("password");
    });
  }

  // Password page
  function unlock() {
    const passwordInput = $("passwordInput");
    const errorText = $("errorText");

    if (!passwordInput) return;

    if (passwordInput.value.trim().toLowerCase() === "cherry") {
      if (errorText) errorText.textContent = "";
      passwordInput.value = "";
      showScreen("letterIntro");
    } else {
      if (errorText) {
        errorText.textContent = "Wrong password, try again ❤️";
      }
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  if ($("unlockBtn")) {
    $("unlockBtn").addEventListener("click", unlock);
  }

  if ($("passwordInput")) {
    $("passwordInput").addEventListener("keydown", (event) => {
      if (event.key === "Enter") unlock();
    });
  }

  // Letter page
  const letter = `My Shreya ❤️

Happy Birthday, my favourite person.

I wish I could be there beside you today, see your smile, and make this day special for you. Even though distance keeps us apart, you are always close to my heart.

Thank you for being a part of my life, for your love, your care, and all the little moments that mean so much to me.

I am genuinely proud of you, Shreya. I hope this new year of your life brings you happiness, good health, peace, and every beautiful thing you deserve.

No matter how busy life becomes, I hope we keep choosing each other, understanding each other, and making more memories together.

You are so special to me, and I hope this little surprise makes you smile today.

Happy Birthday once again, Shreya. ❤️

Forever with love,
Vikas ❤️`;

  if ($("openLetterBtn")) {
    $("openLetterBtn").addEventListener("click", () => {
      showScreen("letter");

      const output = $("typewriter");
      if (!output) return;

      output.textContent = "";
      let index = 0;

      if (window.letterTimer) {
        clearInterval(window.letterTimer);
      }

      window.letterTimer = setInterval(() => {
        output.textContent += letter.charAt(index);
        index++;

        if (index >= letter.length) {
          clearInterval(window.letterTimer);
          window.letterTimer = null;
        }
      }, 28);
    });
  }

  // Six memories
  const memories = [
    {
      image: "IMG-20260607-WA0052_1783152248876.jpg",
      title: "Our First Meet ❤️",
      text: "Our first photo together. A memory I will always keep close to my heart."
    },
    {
      image: "IMG-20260612-WA0000_1783152248772.jpg",
      title: "A Special Memory 🩷",
      text: "Every memory with you has a place in my heart."
    },
    {
      image: "IMG-20260620-WA0006_1783152248627.jpg",
      title: "Cutest Memory 🤍",
      text: "One of those photos that makes me smile every time I see it."
    },
    {
      image: "IMG_20260704_133301_105.jpg",
      title: "Our Sweet Memory 💗",
      text: "I hope we keep making beautiful memories together."
    },
    {
      image: "IMG_20260726_214637.png",
      title: "My Favourite Memory 💛",
      text: "A little moment that means more to me than words can explain."
    },
    {
      image: "file_00000000b9a471faab0fc62c60d5db6c.png",
      title: "Nearest To My Heart 💟",
      text: "You will always be someone very special in my life."
    }
  ];

  let memoryIndex = 0;

  function loadMemory() {
    const memory = memories[memoryIndex];
    if (!memory) return;

    const image = $("memoryImage");

    if (image) {
      image.onerror = function () {
        image.onerror = null;
        image.src =
          "https://vikasgm8.github.io/Shreya-birthday-/images/" +
          encodeURIComponent(memory.image);
      };

      image.src = "images/" + encodeURIComponent(memory.image);
      image.alt = memory.title;
    }

    if ($("memoryTitle")) $("memoryTitle").textContent = memory.title;
    if ($("memoryText")) $("memoryText").textContent = memory.text;

    if ($("currentMemory")) {
      $("currentMemory").textContent =
        (memoryIndex + 1) + " / " + memories.length;
    }
  }

  if ($("memoryBtn")) {
    $("memoryBtn").addEventListener("click", () => {
      memoryIndex = 0;
      loadMemory();
      showScreen("memory");
    });
  }

  if ($("nextMemoryBtn")) {
    $("nextMemoryBtn").addEventListener("click", () => {
      memoryIndex++;

      if (memoryIndex < memories.length) {
        loadMemory();
      } else {
        showScreen("birthday");
      }
    });
  }

  // Birthday page
  if ($("giftBtn")) {
    $("giftBtn").addEventListener("click", () => {
      showScreen("gift");
    });
  }

  if ($("giftContinueBtn")) {
    $("giftContinueBtn").addEventListener("click", () => {
      showScreen("gallery");
    });
  }

  // Gallery
  if ($("galleryNextBtn")) {
    $("galleryNextBtn").addEventListener("click", () => {
      showScreen("surprise");
    });
  }

  // Surprise and promises
  if ($("promiseBtn")) {
    $("promiseBtn").addEventListener("click", () => {
      showScreen("promise");
    });
  }

  if ($("replayBtn")) {
    $("replayBtn").addEventListener("click", () => {
      memoryIndex = 0;
      loadMemory();
      showScreen("memory");
    });
  }

  if ($("startNewSurpriseBtn")) {
    $("startNewSurpriseBtn").addEventListener("click", () => {
      showScreen("cakePage");

      const countdown = $("countdown");
      if (countdown) countdown.textContent = "Make a wish, Shreya! ❤️";
    });
  }

  // Birthday cake candles
  document.querySelectorAll(".candle").forEach((candle) => {
    candle.addEventListener("click", () => {
      candle.classList.toggle("blown");
      candle.textContent = candle.classList.contains("blown") ? "" : "🕯️";

      const candles = document.querySelectorAll(".candle");
      const allBlown = Array.from(candles).every((item) =>
        item.classList.contains("blown")
      );

      if (allBlown && $("birthdayText")) {
        $("birthdayText").textContent =
          "Happy Birthday, Shreya! ❤️ May all your wishes come true!";
      }
    });
  });

  if ($("cakeContinueBtn")) {
    $("cakeContinueBtn").addEventListener("click", () => {
      showScreen("gallery");
    });
  }

  // Load the first memory for later
  loadMemory();
});