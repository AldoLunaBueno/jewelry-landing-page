document.querySelectorAll('aside .animated img').forEach(img => {
  const duration = 10 + Math.random() * 20;
  const delay = Math.random() * -30;
  const xPosition = Math.random() * 85;
  const height = 5 + Math.random() * 10;
  img.style.left = `${xPosition}%`
  img.style.height = `${height}%`
  img.style.animationDuration = `${duration}s`;
  img.style.animationDelay = `${delay}s`;
});