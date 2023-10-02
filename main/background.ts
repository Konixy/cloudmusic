import { TouchBar, app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import checkLogin from './auth/checkLogin';
import dotenv from 'dotenv';
import login from './auth/login';
dotenv.config();

export const isProd: boolean = process.env.NODE_ENV === 'production';
const port = process.argv[2];

if (isProd) {
  serve({ directory: 'app', scheme: 'cloudmusic' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  await checkLogin()
    .then(async (r) => {
      if (r) await showMain();
      else await login();
    })
    .catch((err) => {
      console.log(err);
      login();
    });
})();

async function showMain() {
  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    darkTheme: true,
    titleBarStyle: 'default',
  });

  const touchbar = new TouchBar({
    items: [
      new TouchBar.TouchBarButton({
        icon: isProd ? 'cloudmusic://./close-icon.png' : `${__dirname}/close-icon.png`,
        click: () => {
          app.quit();
        },
        iconPosition: 'overlay',
      }),
    ],
  });

  mainWindow.setTouchBar(touchbar);

  if (isProd) {
    await mainWindow.loadURL('cloudmusic://./index.html');
  } else {
    await mainWindow.loadURL(`http://localhost:${port}/`);
    // mainWindow.webContents.openDevTools();
  }
}

app.on('window-all-closed', () => {
  app.quit();
});
