import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments';

export const GET_CONVERSATION_BY_ID = gql`
  ${USER_FRAGMENT}

  query getConversationById($id: ID!) {
    getConversationById(id: $id) {
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
