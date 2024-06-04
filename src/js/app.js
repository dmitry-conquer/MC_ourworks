import Beforeafter from "./modules/before-after.js";
import "./modules/play-video.js";

function app() {
  if (document.getElementById("before-after")) {
    const beforeAfterSlider = new Beforeafter("before-after");
  }
  if (document.getElementById("before-after-mob")) {
    const beforeAfterSliderMob = new Beforeafter("before-after-mob");
  }
}

document.addEventListener("DOMContentLoaded", app);
