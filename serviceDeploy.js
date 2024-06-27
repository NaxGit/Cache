if ('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('./Service.js', { scope: '/Cache/' })
    .then(registration =>
    {alert('Service ok.');})
    .catch(error =>
    {console.error('Service Worker registration failed:', error);});
}
