const videoSections = document.querySelectorAll(".video-section");

videoSections.forEach(section => {
  if (section) {
    const video = section.querySelector("video");
    const button = section.querySelector("button");
    section.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        button.style.display = "none";
      } else if (video.played) {
        video.pause();
        button.style.display = "block";
      }
    });
  }
});
