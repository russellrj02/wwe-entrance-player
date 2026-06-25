const modal = document.getElementById("videoModal");
const videoPlayer = document.getElementById("videoPlayer");
const closeBtn = document.getElementById("closeBtn");

// OPEN VIDEO
function openVideo(src) {
  const frame = document.querySelector(".tv-frame");

  videoPlayer.src = src;
  videoPlayer.style.display = "block";
  frame.style.display = "flex";
  frame.classList.add("playing");

  modal.style.display = "flex";
}

// CLOSE VIDEO
function closeModal() {
  const frame = document.querySelector(".tv-frame");

  modal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  videoPlayer.src = "";
  videoPlayer.style.display = "none";

  frame.style.display = "none";
  frame.classList.remove("playing");
}

// Close button
closeBtn.onclick = () => {
  closeModal();
};

// Click outside modal
window.onclick = e => {
  if (e.target === modal) {
    closeModal();
  }
};
