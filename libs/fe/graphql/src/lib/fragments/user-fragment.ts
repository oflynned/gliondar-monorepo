import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from './image-fragment';

export const USER_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}

  fragment UserFragment on User {
    id
    profile {
      id
      name
    }
    avatar {
      ...ImageFragment
    }
  }
`;
