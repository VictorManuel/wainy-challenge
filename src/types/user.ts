export type User = {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    city: string;
    state: string;
    street: string;
    avatar: string;
  };
  export type Contact = Pick<User, "id" | "fullName" | "avatar">;