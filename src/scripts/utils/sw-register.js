import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    // if (Workbox) { console.log('Workbox berhasil dimuat'); } else console.log('Workbox gagal dimuat');
    // const wb = new Workbox('../sw.js');
    // wb.addEventListener('installed', (event) => {
    //   if (!event.isUpdate) {
    //     console.log('Service Worker Installed!');
    //   }
    // });
    // wb.addEventListener('activated', (event) => {
    //   if (!event.isUpdate) {
    //     console.log('Service Worker Activated!');
    //   }
    // });
    // await wb.register();
    await runtime.register();
    return;
  }
  console.log('Service worker not supported in this browser');
};

export default swRegister;
