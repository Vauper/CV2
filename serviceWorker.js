const staticCV = "CV-v1"
const assets = [
  "/CV/",
  "/CV/index.html",
  "/CV/css/estilos.css",
  "/CV/js/app.js",
  "/CV/imagenes/pdc-logo-transparente.png",
  "/CV/imagenes/main.png",
  "/CV/imagenes/experiencia/logo-credil-blanco.png",
  "/CV/imagenes/experiencia/logo-musimundo-blanco.png",
  "/CV/imagenes/experiencia/logo-turismo-blanco.png",
  "/CV/imagenes/experiencia/logo-mastermed-blanco2.png",
  "/CV/imagenes/experiencia/logo-voluntario-blanco.png",
  "/CV/imagenes/experiencia/logo-credil-color.png",
  "/CV/imagenes/experiencia/logo-musimundo-color.png",
  "/CV/imagenes/experiencia/logo-turismo-color.png",
  "/CV/imagenes/experiencia/logo-mastermed-color.png",
  "/CV/imagenes/experiencia/logo-voluntario-color.png",
  "/CV/imagenes/experiencia/credil.jpg",
  "/CV/imagenes/experiencia/musimundo2.jpg",
  "/CV/imagenes/experiencia/turismo.jpg",
  "/CV/imagenes/experiencia/mastermed.jpg",
  "/CV/imagenes/experiencia/trabajo voluntario.jpg",
  "/CV/imagenes/educacion/unc3_d.png",
  "/CV/imagenes/educacion/logo-la colmena.png",
  "/CV/imagenes/educacion/Salesians_logo.png",
  "/CV/imagenes/educacion/logoili.png",
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