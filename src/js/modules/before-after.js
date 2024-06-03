export default class Beforeafter {
  constructor(id) {
    this.slider = document.getElementById(id);
    this.beforePart = this.slider.querySelector(".before");
    this.pointer = this.slider.querySelector(".pointer");
    this.state = false;
    this.#initListeners();
  }

  #initListeners() {
    this.slider.addEventListener("mousemove", e => this.#handleMousemove(e));
    this.slider.addEventListener("wheel", e => this.#handleWheelscroll(e));
    this.slider.addEventListener("touchmove", e => this.#handleTouchmove(e));
    this.slider.addEventListener("touchstart", () => this.#updateState());
    this.slider.addEventListener("touchend", () => this.#handleUpdateState());
    this.slider.addEventListener("mousedown", () => this.#updateState());
    this.slider.addEventListener("mouseup", () => this.#handleUpdateState());
    this.slider.addEventListener("mouseleave", () => this.#handleUpdateState());
  }

  #handleUpdateState() {
    this.#disableState();
    this.beforePart.style.transition = `all 0.3s ease`;
    this.pointer.style.transition = `all 0.3s ease`;
    this.beforePart.style.width = `50%`;
    this.pointer.style.left = `50%`;
    setTimeout(() => {
      this.beforePart.style.transition = `none`;
      this.pointer.style.transition = `none`;
    }, 300);
  }

  #handleMousemove(e) {
    if (this.state && !this.#isMobile()) {
      const sliderWidth = this.slider.getBoundingClientRect().width;
      const procentage = ((e.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;
      this.beforePart.style.width = `${procentage}%`;
      this.pointer.style.left = `${procentage}%`;
    }
  }

  #handleWheelscroll(e) {
    if (!this.#isMobile()) {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      let procentage = parseFloat(this.beforePart.style.width) || 50;

      if (delta > 0 && procentage > 0) {
        procentage -= 1;
      } else if (delta < 0 && procentage < 100) {
        procentage += 1;
      }
      this.beforePart.style.width = `${procentage}%`;
      this.pointer.style.left = `${procentage}%`;
    }
  }

  #handleTouchmove(e) {
    if (this.state && this.#isMobile()) {
      const sliderWidth = this.slider.getBoundingClientRect().width;
      const touch = e.touches[0];
      const procentage = ((touch.clientX - this.slider.getBoundingClientRect().left) / sliderWidth) * 100;
      this.beforePart.style.width = `${procentage}%`;
      this.pointer.style.left = `${procentage}%`;
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
