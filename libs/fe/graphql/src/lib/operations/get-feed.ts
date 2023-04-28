import { gql } from '@apollo/client';

export const GET_FEED = gql`
  fragment ImageFragment on Image {
    id
    url
  }

  fragment GatheringFragment on Gathering {
    id
    title
    startsAt
    image {
      ...ImageFragment
    }
  }

  fragment PosterFragment on User {
    id
    profile {
      id
      name
    }
    avatar {
      ...ImageFragment
    }
  }

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
          ...PosterFragment
        }
      }
      ... on TextPost {
        id
        createdAt
        score
        text
        postedBy {
          ...PosterFragment
        }
      }
    }
  }
`;
