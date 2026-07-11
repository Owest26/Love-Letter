// Floating Hearts

const heartsContainer = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["💖", "💕", "💗", "💞"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);


// Popup

const popup = document.getElementById("popup");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});


// Sparkle Cursor Effect (works on phones too)

document.addEventListener("touchmove", sparkleEffect);
document.addEventListener("mousemove", sparkleEffect);

function sparkleEffect(e){

    const x = e.touches
        ? e.touches[0].clientX
        : e.clientX;

    const y = e.touches
        ? e.touches[0].clientY
        : e.clientY;

    const sparkle = document.createElement("div");

    sparkle.style.position = "fixed";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    sparkle.style.width = "8px";
    sparkle.style.height = "8px";

    sparkle.style.borderRadius = "50%";

    sparkle.style.background = "white";

    sparkle.style.pointerEvents = "none";

    sparkle.style.boxShadow =
        "0 0 15px white";

    sparkle.style.zIndex = "999";

    document.body.appendChild(sparkle);

    sparkle.animate(
        [
            {
                transform: "scale(1)",
                opacity: 1
            },
            {
                transform: "scale(0)",
                opacity: 0
            }
        ],
        {
            duration: 600
        }
    );

    setTimeout(() => {
        sparkle.remove();
    }, 600);
}