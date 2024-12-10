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
