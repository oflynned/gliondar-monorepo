import { Image, GatheringBuilder } from '../../types';
import { getRandomItem } from '../../helper';
import { curatedUsers } from '../../curated-data';
import { AttendanceStatus, Recurrence } from '@gliondar/shared/types';
import { faker } from '@faker-js/faker';

export const sportsMatch = new GatheringBuilder()
  .setId('gathering-2')
  .setCreatedAt(faker.date.recent(30))
  .setCreatedBy(getRandomItem(curatedUsers))
  .setTitle('All-Ireland Hurling Final 2023')
  .setDescription([
    'The All-Ireland Hurling Finals is the pinnacle of Irish hurling, where the best teams from across the country compete to be crowned champions. This thrilling event will take place on the hallowed ground of Croke Park, Dublin, on September 4th.',
    'As the tension builds, the roar of the crowd will echo around the stadium as the teams take to the field. The atmosphere will be electric as the players battle it out, showcasing their skill, agility, and strength. This is the ultimate test of courage and determination, as the teams push themselves to the limit in the pursuit of glory.',
    "With the eyes of the nation fixed on the action, the All-Ireland Hurling Finals promises to be a gripping spectacle, filled with twists and turns, moments of sheer brilliance, and unforgettable drama. Don't miss your chance to witness the very best of Irish sport in this thrilling showdown.",
  ])
  .setTimezone('Europe/Dublin')
  .setAddress('Croke Park, Jones Road, Dublin 3, D03 P6K7, Ireland')
  .setStartsAt(faker.date.soon(30))
  .setAttendees([])
  .setBookmarked(false)
  .setAttendance(AttendanceStatus.UNKNOWN)
  .setHeaderImage(
    new Image(
      faker.datatype.uuid(),
      'https://e0.365dm.com/22/06/768x432/skysports-clare-wexford-gaa_5808571.jpg?20220618163731'
    )
  )
  .setRecurrence(Recurrence.NONE)
  .setCoordinates({
    latitude: 53.361387,
    longitude: -6.252967,
  })
  .build();
