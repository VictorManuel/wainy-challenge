import { User, Contact } from "@/types/user";

type RandomUser = {
  login: { uuid: string };
  name: { first: string; last: string };
  picture: { large: string };
  email: string;
  phone: string;
  location: {
    city: string; state: string;
    street: { name: string; number: number };
  };
};

const mapRandom = (r: RandomUser): User => ({
  id: r.login.uuid,
  fullName: `${r.name.first} ${r.name.last}`,
  email: r.email,
  phone: r.phone,
  city: r.location.city,
  state: r.location.state,
  street: `${r.location.street.name} ${r.location.street.number}`,
  avatar: r.picture.large,
});

const randomUserUrl = "https://randomuser.me/api";

export async function fetchUser(): Promise<User> {
  const res = await fetch(`${randomUserUrl}/?nat=us`);
  const json = await res.json();
  return mapRandom(json.results[0]);
}

export async function fetchContacts(count = 10): Promise<Contact[]> {
  const res = await fetch(`${randomUserUrl}/?results=${count}&nat=us`);
  const json = await res.json();
  return json.results.map((r: RandomUser) => {
    const u = mapRandom(r);
    const c: Contact = { id: u.id, fullName: u.fullName, avatar: u.avatar };
    return c;
  });
}