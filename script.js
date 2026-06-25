// Wrestler Data
const wrestlers = [
    { name: "John Cena", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/cena.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/cena.mp4" },
    { name: "Randy Orton", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/orton.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/orton.mp4" },
    { name: "Rey Mysterio", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/mysterio.jpeg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/mysterio.mp4" },
    { name: "Triple H", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/hhh.jpeg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/hhh.mp4" },
    { name: "Batista", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/batista.jpeg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/batista.mp4" },
    { name: "The Undertaker", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/taker.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/taker.mp4" },
    { name: "Kane", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/kane.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/kane.mp4" },
    { name: "Stone Cold Steve Austin", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/austin.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/austin.mp4" },
    { name: "The Rock", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/rock.jpeg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/rock.mp4" },
    { name: "Brock Lesnar", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/lesnar.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/lesnar.mp4" },

    // ⭐ NEW 3 SUPERSTARS ⭐
    { name: "Kurt Angle", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/angle.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/angle.mp4" },
    { name: "Eddie Guerrero", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/eddie.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/eddie.mp4" },
    { name: "Jeff Hardy", image: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/hardy.jpg", video: "https://github.com/russellrj02/wwe-entrance-player/releases/download/v1.0/jeff.mp4" }
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
