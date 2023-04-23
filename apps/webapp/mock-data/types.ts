export type Person = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Gathering = {
  id: string;
  postedAt: Date;
  title: string;
  description: string[];
  imageUrl: string | null;
  organiser: Person;
  attendees: Person[];
  startsAt: Date;
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

export type UserGeneratedContent = TextPost | GatheringPost;

export type Interest = {
  id: string;
  title: string;
};

export type Message = {
  id: string;
  message: string;
  sentAt: Date;
  sentBy: Person;
  // sentTo: Person;
};
