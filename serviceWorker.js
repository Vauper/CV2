const staticCV = "CV-v1"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/app.js",
  "imagenes/main.webp",
  "imagenes/experiencia/logo-credil-blanco.png",
  "imagenes/experiencia/logo-musimundo-blanco.png",
  "imagenes/experiencia/logo-turismo-blanco.png",
  "imagenes/experiencia/logo-mastermed-blanco2.png",
  "imagenes/experiencia/logo-voluntario-blanco.png",
  "imagenes/experiencia/logo-credil-color.png",
  "imagenes/experiencia/logo-musimundo-color.png",
  "imagenes/experiencia/logo-turismo-color.png",
  "imagenes/experiencia/logo-mastermed-color.png",
  "imagenes/experiencia/logo-voluntario-color.png",
  "imagenes/experiencia/credil.webp",
  "imagenes/experiencia/musimundo2.webp",
  "imagenes/experiencia/turismo.webp",
  "imagenes/experiencia/mastermed.webp",
  "imagenes/experiencia/trabajo voluntario.webp",
  "imagenes/educacion/unc3_d.webp",
  "imagenes/educacion/logo-la colmena.webp",
  "imagenes/educacion/Salesians_logo.webp",
  "imagenes/educacion/logoili.webp",
  "imagenes/iconos/icon-72x72.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCV).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })