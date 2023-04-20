import { faker } from '@faker-js/faker/locale/en_IE';
import { Gathering, Person } from './types';

const attendees: Person[] = [
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
  {
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  },
];

export const mockEvents: Record<string, Gathering> = {
  '1': {
    id: '1',
    title: 'Pop Up Gaeltacht',
    description: [
      "Come join us for a night of Irish language and culture at our Pop Up Gaeltacht event! Whether you're a fluent speaker or just learning, this is the perfect opportunity to practice your Irish language skills and connect with other Irish language enthusiasts. We'll have music, games, and plenty of conversation to help immerse you in the language. All levels are welcome, and the event is free to attend. We hope to see you there!",
    ],
    imageUrl:
      'https://geneticliteracyproject.org/wp-content/uploads/2020/02/people-are-drinking-alcohol-at-a-party-but-it-could-lead-to-liver-cancer.jpg',
    attendees,
    startsAt: '7pm, Friday October 31st, 2023',
    address: '9 College St, Dublin 2, D02 WN62, Ireland',
    organiser: {
      name: 'Seán Mac Cárthaigh',
      avatarUrl:
        'https://this-person-does-not-exist.com/img/avatar-genaa2fbc91b0b85e0d6d4596c63f9fa103.jpg',
    },
  },
  '2': {
    id: '2',
    title: 'Ciorcal Comhrá ar an Trá',
    description: [
      'Join us for a special evening of conversation and community on the beautiful shores of Ireland\'s coastline. Our "Ciorcal Comhrá ar an Trá" event is the perfect opportunity to practice your Irish language skills and meet fellow language enthusiasts in a relaxed and informal setting.',
      "Bring a picnic blanket, your favorite snacks, and your enthusiasm for the Irish language, and settle in for a memorable evening of conversation, laughter, and connection. Whether you're a beginner or a fluent speaker, everyone is welcome to join in on the fun.",
      'So pack your bags, head to the beach, and join us for an unforgettable night of "craic agus comhrá" (fun and conversation) under the stars. We can\'t wait to see you there!',
    ],
    imageUrl:
      'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/c71f5c1d-a9f8-4d7f-ae02-2a30a8cc9438/carrickfinn-beach-gweedore-bay-donegal.jpg?h=1080&q=66&fm=jpg',
    attendees,
    startsAt: '2pm, Saturday June 4th, 2023',
    address:
      "St. Brendan's Terrace, Carhan Lower, Cahersiveen, Co. Kerry, V23 TP08, Ireland",
    organiser: {
      name: 'Aisling De Búrca',
      avatarUrl:
        'https://this-person-does-not-exist.com/img/avatar-gen2ed72f4297d31dad5694116faafa43bf.jpg',
    },
  },
  '3': {
    id: '3',
    title: 'All-Ireland Hurling Final 2023',
    description: [
      'The All-Ireland Hurling Finals is the pinnacle of Irish hurling, where the best teams from across the country compete to be crowned champions. This thrilling event will take place on the hallowed ground of Croke Park, Dublin, on September 4th.',
      'As the tension builds, the roar of the crowd will echo around the stadium as the teams take to the field. The atmosphere will be electric as the players battle it out, showcasing their skill, agility, and strength. This is the ultimate test of courage and determination, as the teams push themselves to the limit in the pursuit of glory.',
      "With the eyes of the nation fixed on the action, the All-Ireland Hurling Finals promises to be a gripping spectacle, filled with twists and turns, moments of sheer brilliance, and unforgettable drama. Don't miss your chance to witness the very best of Irish sport in this thrilling showdown.",
    ],
    imageUrl:
      'https://e0.365dm.com/22/06/768x432/skysports-clare-wexford-gaa_5808571.jpg?20220618163731',
    attendees,
    startsAt: '12pm, Sunday September 13th 2023',
    address: 'Croke Park, Jones Road, Dublin 3, D03 P6K7, Ireland',
    organiser: {
      name: 'Gaelic Athletic Association',
      avatarUrl: '/gaa.jpeg',
    },
  },
};
