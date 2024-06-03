import Beforeafter from "./modules/before-after.js";
import "./modules/play-video.js";

function app() {
  const beforeAfterSlider = new Beforeafter("before-after");
  const beforeAfterSliderMob = new Beforeafter("before-after-mob");
}

document.addEventListener("DOMContentLoaded", app);
