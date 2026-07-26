const screens = document.querySelectorAll(".screen");

function showScreen(id){
    screens.forEach(screen=>screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");

    },2500);

});

document.getElementById("startBtn").addEventListener("click",()=>{

    showScreen("password");

});

document.getElementById("unlockBtn").addEventListener("click",()=>{

    const pass=document.getElementById("passwordInput").value.trim().toLowerCase();

    if(pass==="cherry"){

        showScreen("letterIntro");

    }else{

        document.getElementById("errorText").innerText="Wrong password 🤍";

    }

});

document.getElementById("openLetterBtn").addEventListener("click",()=>{

    showScreen("letter");

});
const letter=`Hey Shreya... 💌❤️

Happy Birthday, my girl. 🎂🤍

You don't know how special you are to me, Baby. It's your birthday, but I think I'm happier than you are. ❤️ Today, my girl was born—the girl who made my entire life beautiful. I love you so much. Once again, Happy Birthday, Baby. 🫂❤️

Do you remember that day when you corrected my Physics paper and gave me extra marks? and to thank you, I gave you a chewing gum. I still remember that day, and it always makes me smile. Unexpectedly, it became one of the best days of my life.

I know I had a past, about Meha and everything. I'm really sorry for that. But now, I'm all yours, and I promise I'll always stay loyal to you, Baby. ❤️ I want to marry you, Shreya. I'm madly in love with you, and I dream about you every single day. Thank you for everything. 🤍

My everything is you. If it's you, then it's a yes for everything. ❤️ I hope our relationship ends with marriage, two children (our elder one will be a girl 👧 and our younger one will be a boy 👦🤭), and the beautiful life we've always dreamed of. Daily hugs, kisses, and growing old together. Even imagining all of that makes me feel shy. 🥹❤️

At the end of this letter, I just want to thank you once again and tell you that I love you so much. One day, I hope we'll become husband and wife, and stay together until we become grandfather and grandmother. ❤️♾️

From your man, ❤️

Vikas ❤️`;

let i=0;

function typeLetter(){

const box=document.getElementById("typewriter");

if(!box)return;

box.innerHTML="";

i=0;

const timer=setInterval(()=>{

box.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

}

},40);

}

document.getElementById("openLetterBtn").addEventListener("click",()=>{

setTimeout(typeLetter,300);

});
document.getElementById("memoryBtn").addEventListener("click", () => {
    showScreen("memory");
});
const memories = [
{
image:"images/IMG_20260704_133328_799.jpg",
title: "Our First Meet ❤️",
text: "Our first photo together."
},
{
image:"images/IMG_20260710_130013.png",
title: "The Photo Which Changed My Life 🩷",
text: "Our first day when we entered in relationship."
},
{
image:"images/IMG-20260607-WA0052_1783152248876.jpg",
title: "Cutest Photo Of All Time 🤍",
text: "I'm in love with this photo."
},
{
image: "images/IMG_20260710_130214.png",
title: "Our Second Meet With Your Best Friend 💗",
text: "This'll be my best memory."
},
{
image:"images/IMG-20260620-WA0006_1783152248627.jpg",
title: "My Angry Bird 💛",
text: "A cute photo, I watch and laugh every time."
},
{
image:"images/IMG_20260704_133301_105.jpg",
title: "This One Is Nearest To My Heart 💟",
text: "I drew my whole world in my diary."
}
];

let memoryIndex = 0;
function loadMemory() {
document.getElementById("memoryImage").src = memories[memoryIndex].image;
document.getElementById("memoryTitle").innerText = memories[memoryIndex].title;
document.getElementById("memoryText").innerText = memories[memoryIndex].text;
document.getElementById("currentMemory").innerText = memoryIndex + 1;
}

loadMemory();

document.getElementById("nextMemoryBtn").addEventListener("click", () => {

memoryIndex++;

if (memoryIndex >= memories.length) {
    showScreen("surprise");
    return;
}

loadMemory();

});
document.getElementById("replayBtn").addEventListener("click", () => {

memoryIndex = 0;
loadMemory();
showScreen("memory");

});
document.getElementById("promiseBtn").addEventListener("click", () => {
    showScreen("promise");
});

document.getElementById("backHomeBtn").addEventListener("click", () => {
    memoryIndex = 0;
    loadMemory();
    showScreen("letterIntro");
});