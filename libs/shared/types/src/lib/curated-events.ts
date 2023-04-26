import { AttendanceStatus, Gathering } from './types';
import { curatedPeople } from './curated-people';

export const curatedEvents: Gathering[] = [
  {
    id: '1',
    title: 'Pop Up Gaeltacht',
    description: [
      "Join us for a lively evening of Irish conversation at our Pop Up Gaeltacht event, taking place on October 23rd at Hogan's in Dublin. This is a fantastic opportunity to practice your Irish language skills in a fun and relaxed setting, while meeting new people who share your interest in the language.",
      "The event will begin at 7pm, and we encourage all levels of fluency to attend - whether you're a complete beginner or a fluent speaker, there will be something for everyone. The atmosphere will be welcoming and inclusive, with friendly hosts on hand to facilitate conversation and offer guidance where needed.",
      "At our Pop Up Gaeltacht events, we like to mix things up by providing a range of activities to suit different interests and skill levels. Whether you prefer to chat one-on-one with fellow language enthusiasts, take part in group games and challenges, or simply sit back and listen to others, you'll find plenty to keep you entertained and engaged.",
      "Of course, no Pop Up Gaeltacht would be complete without some delicious food and drink to enjoy while you chat! Hogan's is the perfect venue for our event, with a cosy atmosphere and a great selection of food and drinks to choose from. So come along, order a pint of the black stuff or a hot whiskey, and settle in for a great evening of craic agus comhrá!",
      'Tickets for the event are available now, so be sure to book your place as soon as possible. We look forward to seeing you there for what promises to be a fantastic night of Irish language and culture. Slán go fóill!',
    ],
    imageUrl:
      'https://geneticliteracyproject.org/wp-content/uploads/2020/02/people-are-drinking-alcohol-at-a-party-but-it-could-lead-to-liver-cancer.jpg',
    attendees: [
      {
        id: 'attendee-0',
        attendance: AttendanceStatus.ATTENDING,
        user: curatedPeople[1],
      },
    ],
    createdAt: new Date(),
    startsAt: new Date(2023, 9, 17, 21),
    address: '9 College St, Dublin 2, D02 WN62, Ireland',
    createdBy: curatedPeople[0],
    bookmarked: false,
  },
  {
    id: '2',
    title: 'Ciorcal Comhrá ar an Trá',
    description: [
      'Join us for a special evening of conversation and community on the beautiful shores of Ireland\'s coastline. Our "Ciorcal Comhrá ar an Trá" event is the perfect opportunity to practice your Irish language skills and meet fellow language enthusiasts in a relaxed and informal setting.',
      "Bring a picnic blanket, your favorite snacks, and your enthusiasm for the Irish language, and settle in for a memorable evening of conversation, laughter, and connection. Whether you're a beginner or a fluent speaker, everyone is welcome to join in on the fun.",
      'So pack your bags, head to the beach, and join us for an unforgettable night of "craic agus comhrá" (fun and conversation) under the stars. We can\'t wait to see you there!',
    ],
    imageUrl:
      'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/c71f5c1d-a9f8-4d7f-ae02-2a30a8cc9438/carrickfinn-beach-gweedore-bay-donegal.jpg?h=1080&q=66&fm=jpg',
    attendees: [
      {
        id: 'attendee-1',
        attendance: AttendanceStatus.ATTENDING,
        user: curatedPeople[2],
      },
    ],
    createdAt: new Date(),
    startsAt: new Date(2023, 9, 10, 13),
    address:
      "St. Brendan's Terrace, Carhan Lower, Cahersiveen, Co. Kerry, V23 TP08, Ireland",
    createdBy: curatedPeople[1],
    bookmarked: false,
  },
  {
    id: '3',
    title: 'All-Ireland Hurling Final 2023',
    description: [
      'The All-Ireland Hurling Finals is the pinnacle of Irish hurling, where the best teams from across the country compete to be crowned champions. This thrilling event will take place on the hallowed ground of Croke Park, Dublin, on September 4th.',
      'As the tension builds, the roar of the crowd will echo around the stadium as the teams take to the field. The atmosphere will be electric as the players battle it out, showcasing their skill, agility, and strength. This is the ultimate test of courage and determination, as the teams push themselves to the limit in the pursuit of glory.',
      "With the eyes of the nation fixed on the action, the All-Ireland Hurling Finals promises to be a gripping spectacle, filled with twists and turns, moments of sheer brilliance, and unforgettable drama. Don't miss your chance to witness the very best of Irish sport in this thrilling showdown.",
    ],
    imageUrl:
      'https://e0.365dm.com/22/06/768x432/skysports-clare-wexford-gaa_5808571.jpg?20220618163731',
    attendees: [
      {
        id: 'attendee-2',
        attendance: AttendanceStatus.ATTENDING,
        user: curatedPeople[0],
      },
    ],
    createdAt: new Date(),
    startsAt: new Date(2023, 9, 13, 19),
    address: 'Croke Park, Jones Road, Dublin 3, D03 P6K7, Ireland',
    createdBy: curatedPeople[2],
    bookmarked: false,
  },
];

export const curatedEventDiscovery: {
  timeframe: string;
  gatherings: Gathering[];
}[] = [
  {
    timeframe: 'Today',
    gatherings: [curatedEvents[0]],
  },
  {
    timeframe: 'Tomorrow',
    gatherings: [curatedEvents[1], curatedEvents[2]],
  },
  {
    timeframe: 'Later',
    gatherings: curatedEvents,
  },
];
