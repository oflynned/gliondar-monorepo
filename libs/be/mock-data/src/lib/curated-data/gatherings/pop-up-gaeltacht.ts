import { Image } from '../../types';
import { getRandomItem } from '../../helper';
import { AttendanceStatus, Recurrence } from '@gliondar/shared/types';
import { curatedUsers } from '../curated-users';
import { faker } from '@faker-js/faker';
import { GatheringBuilder } from '../../types/gathering.builder';

export const popUpGaeltacht = new GatheringBuilder()
  .setId('gathering-0')
  .setCreatedAt(faker.date.recent(30))
  .setCreatedBy(getRandomItem(curatedUsers))
  .setTitle('Pop Up Gaeltacht')
  .setDescription([
    "Join us for a lively evening of Irish conversation at our Pop Up Gaeltacht event, taking place on October 23rd at Hogan's in Dublin. This is a fantastic opportunity to practice your Irish language skills in a fun and relaxed setting, while meeting new people who share your interest in the language.",
    "The event will begin at 7pm, and we encourage all levels of fluency to attend - whether you're a complete beginner or a fluent speaker, there will be something for everyone. The atmosphere will be welcoming and inclusive, with friendly hosts on hand to facilitate conversation and offer guidance where needed.",
    "At our Pop Up Gaeltacht events, we like to mix things up by providing a range of activities to suit different interests and skill levels. Whether you prefer to chat one-on-one with fellow language enthusiasts, take part in group games and challenges, or simply sit back and listen to others, you'll find plenty to keep you entertained and engaged.",
    "Of course, no Pop Up Gaeltacht would be complete without some delicious food and drink to enjoy while you chat! Hogan's is the perfect venue for our event, with a cosy atmosphere and a great selection of food and drinks to choose from. So come along, order a pint of the black stuff or a hot whiskey, and settle in for a great evening of craic agus comhrá!",
    'Tickets for the event are available now, so be sure to book your place as soon as possible. We look forward to seeing you there for what promises to be a fantastic night of Irish language and culture. Slán go fóill!',
  ])
  .setTimezone('Europe/Dublin')
  .setAddress('9 College St, Dublin 2, D02 WN62, Ireland')
  .setStartsAt(faker.date.soon(30))
  .setAttendees([])
  .setBookmarked(true)
  .setAttendance(AttendanceStatus.ATTENDING)
  .setHeaderImage(
    new Image(
      faker.datatype.uuid(),
      'https://geneticliteracyproject.org/wp-content/uploads/2020/02/people-are-drinking-alcohol-at-a-party-but-it-could-lead-to-liver-cancer.jpg'
    )
  )
  .setRecurrence(Recurrence.MONTHLY)
  .setCoordinates({
    latitude: 53.345691,
    longitude: -6.257454,
  })
  .build();
