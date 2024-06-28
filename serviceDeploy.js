if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./serviceWorker.js', { scope: '/Cache/' })
    .then(registration =>
    {console.log('Service Worker registered');})
    .catch(error =>
    {console.error('Service Worker registration failed:', error);});
}
