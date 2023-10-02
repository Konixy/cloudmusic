export type User = {
  _id: string;
  username: string;
  email: string;
  emailVerified?: boolean;
};

export type UserWithPassword = User & { password: string };
