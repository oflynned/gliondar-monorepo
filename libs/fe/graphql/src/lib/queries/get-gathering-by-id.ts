import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT, USER_FRAGMENT } from '../fragments';

export const GET_GATHERING_BY_ID = gql`
  ${USER_FRAGMENT}
  ${IMAGE_FRAGMENT}

  query getGatheringById($id: ID!) {
    getGatheringById(id: $id) {
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
