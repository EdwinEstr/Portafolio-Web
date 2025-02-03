if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
    .then(registration => {
        console.log('Service Worker registrado con exito:', registration); 
    })
    .catch(error =>{
        console.log('Error al registrar el service Worker:', error);
    });
}
