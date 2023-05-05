import { Image } from '../../types';
import { getRandomItem } from '../../helper';
import { curatedUsers } from '../curated-users';
import { Recurrence } from '@gliondar/shared/types';
import { faker } from '@faker-js/faker';
import { GatheringBuilder } from '@gliondar/be/mock-data';

export const conversationCircle = new GatheringBuilder()
  .setId('gathering-1')
  .setCreatedAt(faker.date.recent(30))
  .setCreatedBy(getRandomItem(curatedUsers))
  .setTitle('Ciorcal Comhrá ar an Trá')
  .setDescription([
    'Join us for a special evening of conversation and community on the beautiful shores of Ireland\'s coastline. Our "Ciorcal Comhrá ar an Trá" event is the perfect opportunity to practice your Irish language skills and meet fellow language enthusiasts in a relaxed and informal setting.',
    "Bring a picnic blanket, your favorite snacks, and your enthusiasm for the Irish language, and settle in for a memorable evening of conversation, laughter, and connection. Whether you're a beginner or a fluent speaker, everyone is welcome to join in on the fun.",
    'So pack your bags, head to the beach, and join us for an unforgettable night of "craic agus comhrá" (fun and conversation) under the stars. We can\'t wait to see you there!',
  ])
  .setTimezone('Europe/Dublin')
  .setAddress(
    "St. Brendan's Terrace, Carhan Lower, Cahersiveen, Co. Kerry, V23 TP08, Ireland"
  )
  .setAttendees([])
  .setStartsAt(faker.date.soon(30))
  .setBookmarked(false)
  .setHeaderImage(
    new Image(
      faker.datatype.uuid(),
      'https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/c71f5c1d-a9f8-4d7f-ae02-2a30a8cc9438/carrickfinn-beach-gweedore-bay-donegal.jpg?h=1080&q=66&fm=jpg'
    )
  )
  .setRecurrence(Recurrence.WEEKLY)
  .setCoordinates({
    latitude: 51.949404,
    longitude: -10.224393,
  })
  .build();
