import { createWindow } from '../helpers';
import { isProd } from '../background';
import electron, { TouchBar, Tray } from 'electron';

export default function login(): boolean {
  showLogin();
  return false;
}

async function showLogin() {
  const loginWindow = createWindow('login', {
    width: isProd ? 400 : 600,
    height: 600,
    center: true,
    titleBarStyle: 'hiddenInset',
  });

  if (isProd) {
    await loginWindow.loadURL(`cloudmusic://./auth/login.html`);
    loginWindow.show();
  } else {
    const port = process.argv[2];
    await loginWindow.loadURL(`http://localhost:${port}/auth/login`);
    loginWindow.webContents.openDevTools();
  }
}
