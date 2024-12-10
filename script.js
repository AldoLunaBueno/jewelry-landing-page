const NUMBER_JEWELS = 14

const imgContainer = document.querySelector("aside .animated ")
for (let i = 1; i <= NUMBER_JEWELS; i++) {
  for (let j = 0; j < 2; j++) {
    const link = "images/jewels/image" + i + ".webp"
    const image = document.createElement("img")
    image.src = link
    imgContainer.append(image)
  }
}


document.querySelectorAll('aside .animated img').forEach(img => {
  const duration = 10 + Math.random() * 20;
  const delay = Math.random() * -30;
  const xPosition = Math.random() * 85;
  const r = Math.random()
  const height = parseInt(5 + 10*r);
  const blur = 2-3*r
  img.style.left = `${xPosition}%`
  img.style.height = `${height}%`
  img.style.zIndex = height
  img.style.filter = `blur(${blur}px)`
  img.style.animationDuration = `${duration}s`;
  img.style.animationDelay = `${delay}s`;
});