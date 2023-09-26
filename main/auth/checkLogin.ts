import axios from "axios";
import { session } from "electron";

export default async function checkLogin(): Promise<boolean> {
  const cookies = await session.defaultSession.cookies.get({});

  await axios.get(`${process.env.BACKEND_URI}/auth/user`, {
    headers: { cookies: cookies.join("; ") },
  });

  return false;
}
