import { gql } from '@apollo/client';
import {
  GATHERING_FRAGMENT,
  IMAGE_FRAGMENT,
  USER_FRAGMENT,
} from '../fragments';

export const GET_FEED = gql`
  ${GATHERING_FRAGMENT}
  ${IMAGE_FRAGMENT}
  ${USER_FRAGMENT}

  query getFeed($page: Int!) {
    getFeed(page: $page) {
      ... on GatheringPost {
        id
        createdAt
        score
        gathering {
          ...GatheringFragment
        }
        postedBy {
          ...UserFragment
        }
      }
      ... on TextPost {
        id
        createdAt
        score
        text
        postedBy {
          ...UserFragment
        }
      }
    }
  }
`;
