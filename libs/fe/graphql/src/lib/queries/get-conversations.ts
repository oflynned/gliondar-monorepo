import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT, USER_FRAGMENT } from '../fragments';

export const GET_CONVERSATIONS = gql`
  ${USER_FRAGMENT}

  query getConversations {
    getConversations {
      id
      partner {
        ...UserFragment
      }
      messages {
        edges {
          node {
            id
            createdAt
            text
            sentBy {
              ...UserFragment
            }
          }
        }
      }
    }
  }
`;
