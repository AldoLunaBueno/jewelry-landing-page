# jewelry-landing-page

## Creation Process

Comencé por el diseño que en mi cabeza tenía el mayor impacto: la animación ascendente de fotos.

```css
aside .animated {
  /* many tricks for constant velocity*/
  --t: 4s;
  --h: 50;
  --top: 90;
  --t0: calc(var(--t) * (var(--h) + var(--top)) / 100.0);
  position: absolute;
  height: calc(var(--h) * 1vh);
  top: calc(var(--top) * 1vh);
  left: 30vw;
  animation: 
    elevate var(--t0) linear,
    elevate-loop var(--t) linear var(--t0) infinite;
}

@keyframes elevate {
  to {
    transform: translateY(calc(-1 * (var(--top) + var(--h)) * 1vh));
  }
}

@keyframes elevate-loop {
  from {
    transform: translateY(calc(100vh - var(--top) * 1vh));
  }
  to {
    transform: translateY(calc(-1 * (var(--top) + var(--h)) * 1vh))
  }
}
```

La clave fue descubrir que el delay puede ser negativo.

```css
aside .animated {
  position: absolute;
  border-radius: 3px;
  box-shadow: 0 2px 2px;
  top: 100vh;
  animation: elevate 10s linear infinite;
}

@keyframes elevate {
  to {
    transform: translateY(-150vh);
  }
}
```

Continué agregando las fotos reales. Empecé cargando  la primera foto desde el script:

```js
const imgContainer = document.querySelector("aside .animated ")
const link = "images/jewels/image1.png"
const image = document.createElement("img")
image.src = link
imgContainer.append(image)
}
```

Para resolverlo de la manera más simple, solo repetí el patrón y definí una constante para la cantidad de imagenes en el directorio _images/jewels/_:

```js
const NUMBER_JEWELS = 14
const imgContainer = document.querySelector("aside .animated ")
for (let i = 1; i <= NUMBER_JEWELS; i++) {
  const link = "images/jewels/image" + i + ".png"
  const image = document.createElement("img")
  image.src = link
  imgContainer.append(image)
}
```

Un problema que noté fue que las imagenes demoraban cerca de medio segundo en cargar. Las fotos pesaban cerca de 1 MB, lo cual se explica porque estaban en formato PNG. El formato recomendado para la web es WEBP. Realicé la conversión de cada imagen usando este comando del programa de consola FFMPEG:

```bash
ffmpeg -i image1.png -c:v libwebp -compression_level 6 -y image1.webp
```
