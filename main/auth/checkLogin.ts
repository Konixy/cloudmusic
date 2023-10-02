import axios from 'axios';
import { session } from 'electron';
import type { User } from '../lib/types';

export default async function checkLogin(): Promise<boolean> {
  const cookies = await session.defaultSession.cookies.get({});

  const res = await axios
    .get<{ success: boolean; user?: User }>(`${process.env.BACKEND_URI}/auth/user`, {
      headers: { cookies: cookies.join('; ') },
    })
    .catch((err) => {
      // console.log(err);
    });

  // console.log(cookies.join('; '));

  return res && res.data.success;
}
