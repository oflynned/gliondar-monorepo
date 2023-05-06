import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from './image-fragment';

export const GATHERING_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}

  fragment GatheringFragment on Gathering {
    id
    title
    startsAt
    image {
      ...ImageFragment
    }
  }
`;
