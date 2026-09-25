/* =====================================
   SMOOTH SECTION SCROLL
===================================== */

function scrollToSection(id) {
    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =====================================
   SCROLL REVEAL ANIMATIONS
===================================== */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Once visible, stop observing
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);


document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});


/* =====================================
   HEART MESSAGE
===================================== */

const heartButton = document.getElementById("heartButton");
const heartMessage = document.getElementById("heartMessage");

const messages = [
    "I love you more than yesterday. ❤️",
    "I miss you. 🥹",
    "You're my home. 🏡❤️",
    "Your Ahjilu is waiting for you. 🫂",
    "You are my favourite person. 💕",
    "I choose you. Every time. ❤️",
    "Our little family is my whole world. 👶🏻❤️",
    "I love you, jaanu. Always. ❤️"
];

let messageIndex = 0;

heartButton.addEventListener("click", () => {

    heartButton.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.4)"
            },
            {
                transform: "scale(.9)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
    );

    heartMessage.style.opacity = "0";

    setTimeout(() => {

        heartMessage.textContent =
            messages[messageIndex];

        heartMessage.style.opacity = "1";

        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

    }, 150);

});


/* =====================================
   BACKGROUND FLOATING HEARTS
===================================== */

const heartContainer =
    document.querySelector(".floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "float-heart";

    heart.textContent =
        Math.random() > .5 ? "♡" : "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (10 + Math.random() * 14) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 7) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 15000);
}

setInterval(createHeart, 1800);


/* =====================================
   COUNTDOWN
===================================== */

/*
   Change this date to the day
   you expect your Jaanu to arrive.

   Example:
   September 15, 2026
*/

const targetDate =
    new Date("2026-10-10T00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicBtn");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;
                musicButton.textContent = "❚❚";

            })
            .catch(() => {

                alert("Tap again to play the music ❤️");

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicButton.textContent = "♫";
    }

});