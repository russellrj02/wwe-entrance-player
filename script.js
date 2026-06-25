// Wrestler Data
const wrestlers = [
    {
        name: "John Cena",
        image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/cena.jpg",
        video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/cena.mp4",
        brand: "attitude"
    },
    {
        name: "Randy Orton",
        image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/orton.jpg",
        video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/orton.mp4",
        brand: "attitude"
    }
];

// Load Wrestlers
const container = document.getElementById("wrestlerContainer");

wrestlers.forEach(wrestler => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${wrestler.image}" alt="${wrestler.name}">
        <h3>${wrestler.name}</h3>
    `;

    card.addEventListener("click", () => openVideo(wrestler.video));
    container.appendChild(card);
});

// Open Video Modal
function openVideo(src) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoPlayer");
    const frame = document.getElementById("videoFrame");

    video.src = src;
    modal.style.display = "flex";
    video.play();

    frame.classList.add("flashing");
}

// Close Modal
document.getElementById("closeBtn").addEventListener("click", () => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoPlayer");
    const frame = document.getElementById("videoFrame");

    video.pause();
    video.src = "";
    modal.style.display = "none";

    frame.classList.remove("flashing");
});
