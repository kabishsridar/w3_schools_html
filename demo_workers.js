function changeBackground() {
  const colors = ["#f4f4f4", "#e74c3c", "#2ecc71", "#9b59b6", "#34495e"];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}