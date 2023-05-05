import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT, USER_FRAGMENT } from '../fragments';

export const GET_RELEVANT_GATHERINGS = gql`
  ${USER_FRAGMENT}
  ${IMAGE_FRAGMENT}

  query getGatherings($page: Int) {
    getGatherings(page: $page) {
      id
      title
      description
      createdAt
      createdBy {
        ...UserFragment
      }
      startsAt
      recurrence
      address
      bookmarked
      attendance
      coordinates {
        latitude
        longitude
      }
      attendees {
        id
        attendance
        user {
          ...UserFragment
        }
      }
      image {
        ...ImageFragment
      }
    }
  }
`;
