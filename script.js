const container = document.querySelector(".commerce-items-container");
container.addEventListener("mouseenter", () => {
  container.style.animationPlayState = "paused";
});
container.addEventListener("mouseleave", () => {
  container.style.animationPlayState = "running";
});
