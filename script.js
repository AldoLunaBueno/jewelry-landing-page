const $ = (el) => document.querySelector(el);
const $$ = (els) => document.querySelectorAll(els);

const NUMBER_JEWELS = 19

const imgContainer = $("aside .animated ")
for (let i = 1; i <= NUMBER_JEWELS; i++) {
  for (let j = 0; j < 2; j++) {
    const link = "images/jewels/image" + i + ".webp"
    const image = document.createElement("img")
    image.src = link
    imgContainer.append(image)
  }
}

const images = $$("img");
images.forEach((image) => {
  // prevent dragging in PC
  image.draggable = false;
  // prevent context menu from appearing on long-press
  image.addEventListener("contextmenu", (e) => e.preventDefault());

});

$$('aside .animated img').forEach(img => {
  const duration = 15 + Math.random() * 30;
  const delay = Math.random() * -30;
  const xPosition = Math.random() * 85;
  const r = Math.random()
  const width = parseInt(5 + 20*r);
  const blur = 2-3*r
  img.style.left = `${xPosition}%`
  img.style.width = `${width}%`
  img.style.zIndex = width
  img.style.filter = `blur(${blur}px)`
  img.style.animationDuration = `${duration}s`;
  img.style.animationDelay = `${delay}s`;
});