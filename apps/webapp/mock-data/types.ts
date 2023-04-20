export type Person = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Business = {
  name: string;
  avatarUrl: string;
};

export type Organiser = Person | Business;

export type Gathering = {
  id: string;
  title: string;
  description: string[];
  imageUrl: string | null;
  organiser: Organiser;
  attendees: Person[];
  startsAt: string;
  address: string;
};
