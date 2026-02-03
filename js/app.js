function likeImage(btn) {
  const span = btn.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;
}