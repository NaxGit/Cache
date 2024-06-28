const thyme = { sw: 'background: #77216F; color: white; font-weight: bold; padding: 0.0rem 1.5rem; border-radius: 2.5rem;', };


self.addEventListener('fetch', (event) => {
	const request = event.request;
	const itemName = event.request.url;
	const pageName = event.request.referrer;

	// Try to match the request in the cache
	event.respondWith(caches.match(request)
		.then(cachedResponse => {
			// If found in cache, return the cached response
			if (cachedResponse) {
				return cachedResponse;
			}

			// If not found in cache, fetch from network
			return fetch(request)
				.then(networkResponse => {
					// Optionally cache the network response for future use
					//>>>					caches.open('my-cache') // Replace 'my-cache' with your cache name
					//>>>						.then(cache => cache.put(request, networkResponse.clone()));

					// Return the network response
					// console.log('%c From Networks : ' + request, inaend.theme);
					return networkResponse;
				});
		})
	);
});