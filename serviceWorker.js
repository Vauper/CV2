const staticCV = "CV-v1"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/app.js",
  "imagenes/pdc-logo-transparente.png",
  "imagenes/main.png",
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
  "imagenes/experiencia/credil.jpg",
  "imagenes/experiencia/musimundo2.jpg",
  "imagenes/experiencia/turismo.jpg",
  "imagenes/experiencia/mastermed.jpg",
  "imagenes/experiencia/trabajo voluntario.jpg",
  "imagenes/educacion/unc3_d.png",
  "imagenes/educacion/logo-la colmena.png",
  "imagenes/educacion/Salesians_logo.png",
  "imagenes/educacion/logoili.png",
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