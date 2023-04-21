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

export type TextPost = {
  __typename: 'TextPost';
  postedAt: Date;
  id: string;
  score: number;
  text: string;
  poster: Person;
  comments: Comment[];
};

export type GatheringPost = {
  __typename: 'GatheringPost';
  postedAt: Date;
  id: string;
  score: number;
  poster: Person;
  comments: Comment[];
  gathering: Gathering;
};

export type Content = TextPost | GatheringPost;

export type Interest = {
  id: string;
  title: string;
};
