export default class Beforeafter {
  constructor(slider) {
    this.slider = slider;
    this.beforePart = this.slider.querySelector(".before");
    this.pointer = this.slider.querySelector(".pointer");
    this.pointerTrigger = this.slider.querySelector(".pointer button");
    this.state = false;
    this.#initListeners();
  }

  #initListeners() {
    this.slider.addEventListener("mousemove", e => this.#handleMousemove(e));
    this.slider.addEventListener("touchmove", e => this.#handleTouchmove(e));
    this.slider.addEventListener("mouseleave", () => this.#disableState());
    this.pointerTrigger.addEventListener("touchstart", () => this.#updateState());
    this.pointerTrigger.addEventListener("touchend", () => this.#disableState());
    this.pointerTrigger.addEventListener("mousedown", e => this.#updateState(e));
    this.pointerTrigger.addEventListener("mouseup", () => this.#disableState());
  }

  #handleMousemove(e) {
    if (this.state && !this.#isMobile()) {
      const sliderWidth = this.slider.getBoundingClientRect().width;
      const procentage = ((e.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;
      this.beforePart.style.width = `${procentage}%`;
      this.pointer.style.left = `${procentage}%`;
      if (procentage >= 100) {
        this.beforePart.style.width = `100%`;
        this.pointer.style.left = `100%`;
      } else if (procentage <= 0) {
        this.beforePart.style.width = `0%`;
        this.pointer.style.left = `0%`;
      }
    }
  }

  #handleTouchmove(e) {
    if (this.state && this.#isMobile()) {
      const sliderWidth = this.slider.getBoundingClientRect().width;
      const touch = e.touches[0];
      const procentage = ((touch.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;

      this.beforePart.style.width = `${procentage}%`;
      this.pointer.style.left = `${procentage}%`;
      if (procentage >= 100) {
        this.beforePart.style.width = `100%`;
        this.pointer.style.left = `100%`;
      } else if (procentage <= 0) {
        this.beforePart.style.width = `0%`;
        this.pointer.style.left = `0%`;
      }
    }
  }

  #updateState() {
    this.state = !this.state;
  }

  #disableState() {
    this.state = false;
  }

  #isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
