'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e7133d6159ff9a5a5e2658cbee8d5cee",
"index.html": "9f4e3ec4eb4d05fe06d82e3fcf62ed22",
"/": "9f4e3ec4eb4d05fe06d82e3fcf62ed22",
"main.dart.js": "cbd8ca9ecc384ef55a8a28d4d06106ac",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "82e879d17b9e8aa1d7d0058a3f4cfdf5",
"assets/AssetManifest.json": "8181b9267933a835597534679d049e79",
"assets/NOTICES": "a05c621757265c1c35588d59d3bc0cdb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "fa5caff034c03f92bb872bb19503aedd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/loading/loading.gif": "fa119db4a80367744d35698f509e2faf",
"assets/assets/loading/result_loading.png": "437f5b4e7f273521a8ab503f32462169",
"assets/assets/loading/transparent.png": "d4d6dafea9e7488ce9c790ae221487e5",
"assets/assets/loading/intro_loading.png": "7df1bfe4a5f5f9e4d0453324e4fcfb8b",
"assets/assets/intro_page/intro_image1.png": "d86dccf6bad7014d9ab128a02aa517da",
"assets/assets/intro_page/intro_image2.png": "23be4d97f672cab4a7b35853c451252c",
"assets/assets/question_page/icon_9.png": "51b82c8dd0710131df4fcc834bfcc3ac",
"assets/assets/question_page/icon_8.png": "c1ee55a220983925c9d4fd454305779a",
"assets/assets/question_page/icon_1.png": "6cd4a1918c06059a22bc92fae8f1f4c1",
"assets/assets/question_page/icon_3.png": "e24d03e119d10347fb2beb716d83eabf",
"assets/assets/question_page/icon_2.png": "8a5d877303dd353c20e8c2810406adc1",
"assets/assets/question_page/icon_6.png": "7b34fb065b3b86d9438c0794b1bcfe34",
"assets/assets/question_page/icon_7.png": "9986091a453f84e84f4fee731a8765f7",
"assets/assets/question_page/icon_5.png": "8fd8e0ab67f874b31f21f42e4eb3f3f9",
"assets/assets/question_page/icon_4.png": "72bcf772e523e83b6e376cc861796c46",
"assets/assets/result_page/Type_F_pg2.png": "4f1935526698480966b1624092d9ff73",
"assets/assets/result_page/Type_F_pg3.png": "1fbc5e21d02dad1b808c47d58fe6c95d",
"assets/assets/result_page/Type_F_pg1.png": "76694930666c4bae5bedcfedfd143b25",
"assets/assets/result_page/Type_E_pg1.png": "ca16ec9c576caf839536f108a4f80cb2",
"assets/assets/result_page/Type_E_pg2.png": "f6e67aa1253231bbd7b3ce39c20edcce",
"assets/assets/result_page/Type_E_pg3.png": "a9db44367e966c8cdc49b03914694e06",
"assets/assets/result_page/Type_D_pg2.png": "14e261154fc0d9270ca28890f829d249",
"assets/assets/result_page/Type_D_pg3.png": "234e7056c594218eb49e02ac12521015",
"assets/assets/result_page/Type_D_pg1.png": "44b052e9c00eeec361e866197f6d2156",
"assets/assets/result_page/Type_A_pg1.png": "9d34da34506ed8b9ea30a78f3b710de3",
"assets/assets/result_page/Type_A_pg3.png": "1fb486b7ae500052871d5a974d0a5c13",
"assets/assets/result_page/Type_A_pg2.png": "2d100d5a6585540a4eef77c594a37eb0",
"assets/assets/result_page/Type_B_pg3.png": "f550079fac1d3aa4c9c47ce5c6038f77",
"assets/assets/result_page/Type_B_pg2.png": "1d75fdaec498e35babc01b3a3bfdc6b6",
"assets/assets/result_page/Type_B_pg1.png": "3a138afcc8ae0f0858ed965ab28728b7",
"assets/assets/result_page/Type_C_pg1.png": "55ecbc2371612b6178bae86a8153e3dc",
"assets/assets/result_page/Type_C_pg3.png": "5b5e76677a826b207807daf4b224fc1b",
"assets/assets/result_page/Type_C_pg2.png": "78a9e15b86de71f3a3e969a7995146de"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
