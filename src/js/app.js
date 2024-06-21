import Beforeafter from "./modules/before-after.js";

document.addEventListener("DOMContentLoaded", () => {
  const baSliders = document.querySelectorAll(".ba-slider");
  baSliders.forEach(s => {
    if (s) {
      const beforeAfterSlider = new Beforeafter(s);
    }
  });
});
