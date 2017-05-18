var cacheName = 'politicard-1';

var filesToCache = [
  '/',
  '/index.html',
  '/templates/arena.html',
  '/templates/creditos.html',
  '/templates/galeria.html',
  '/templates/instrucao.html',
  '/templates/menu.html',
  '/templates/resultado.html',
  '/templates/splashscreen.html',

  '/js/app.js',
  '/js/arena.js',
  '/js/bootstrap.min.js',
  '/js/jquery.min.js',
  '/js/menu.js',
  '/js/routes.js',
  '/lib/angular.js',
  '/lib/angular-ui-router.min.js',

  '/css/arena.css',
  '/css/card.css',
  '/css/galeria.css',
  '/css/home.css',
  '/css/index.css',
  '/css/style.css',
  '/lib/bootstrap-3.3.7-dist/css/bootstrap.min.css',
  
  '/img/AecioNeves.jpg',
  '/img/AndresSanchez.jpg',
  '/img/AugustoSilveiraDeCarvalho.jpg',
  '/img/background-arena.jpg',
  '/img/bandeiraBrasil.jpg',
  '/img/banner-instruction.png',
  '/img/BeneditaDaSilva.jpg',
  '/img/BetoMansur.jpg',
  '/img/card-back.jpg',
  '/img/CarlosManato.jpg',
  '/img/DEM.jpg',
  '/img/EduardoBolsonaro.jpg',
  '/img/ErikaKokay.jpg',
  '/img/EvairVieiradeMelo.jpg',
  '/img/favicon-16x16.png',
  '/img/favicon-32x32.png',
  '/img/favicon-96x96.png',
  '/img/favicon.ico',
  '/img/GivaldoVieiradaSilva.jpg',
  '/img/HelderIgnacioSalomão.jpg',
  '/img/home_logo.png',
  '/img/IzalciLucasFerreira.jpg',
  '/img/JairBolsonaro.jpg',
  '/img/JeanWyllys.jpg',
  '/img/JoãoAlbertoFragaSilva.jpg',
  '/img/JorgeSilva.jpg',
  '/img/LaerteRodriguesdeBessa.jpg',
  '/img/LeloCoimbra.jpg',
  '/img/logo_fundosem.png',
  '/img/MagnoMalta.jpg',
  '/img/MarcoAntonioCabral.jpg',
  '/img/MarcusAntonioVicente.jpg',
  '/img/MaxFreitasMauroFilho.jpg',
  '/img/NormaAyubAlves.jpg',
  '/img/PauloMaluf.jpg',
  '/img/PauloRobertoFoletto.jpg',
  '/img/PDT.jpg',
  '/img/PHS.jpg',
  '/img/PMDB.jpg',
  '/img/PP.jpg',
  '/img/PR.jpg',
  '/img/PRB.jpg',
  '/img/PROS.jpg',
  '/img/PSB.jpg',
  '/img/PSC.jpg',
  '/img/PSD.jpg',
  '/img/PSDB.jpg',
  '/img/PSOL.jpg',
  '/img/PT.jpg',
  '/img/PV.jpg',
  '/img/RicardoFerraco.jpg',
  '/img/RogerioRosso.jpg',
  '/img/Romario.jpg',
  '/img/RonaldoFonsecadeSouza.jpg',
  '/img/RôneyTaniosNemer.jpg',
  '/img/RoseFreitas.jpg',
  '/img/SDD.jpg',
  '/img/SergioVidigal.jpg',
  '/img/splash.png',
  '/img/Tiririca.jpg'
  
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Instalado');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Ativado');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removendo old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url); 
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * 'Cache, falling back to the network' offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
});