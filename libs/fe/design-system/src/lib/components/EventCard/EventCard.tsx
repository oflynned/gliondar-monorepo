import { FunctionComponent, useState } from 'react';
import { Flex, Card } from '../../atoms';
import { Box, IconButton, styled, Typography } from '@gliondar/fe/mui';
import { Bookmark, BookmarkAddOutlined } from '@mui/icons-material';
import { Gathering } from '@gliondar/shared/types';
import Image from 'next/image';

const StyledCardContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const GatheringDetailsContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledCardActionContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
});

const RoundedImageContainer = styled(Box)(({ theme }) => ({
  width: 192,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

type Props = {
  gathering: Gathering;
  onClick?: (gathering: Gathering) => void;
  onBookmark?: (gathering: Gathering) => void;
};

export const EventCard: FunctionComponent<Props> = ({
  gathering,
  onClick,
  onBookmark,
}) => {
  const [bookmarked, setBookmarked] = useState(gathering.bookmarked);

  return (
    <Card canHover>
      <StyledCardContainer key={gathering.id}>
        <Flex>
          <RoundedImageContainer onClick={() => onClick?.(gathering)}>
            <Image
              style={{
                borderRadius: 'inherit',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={gathering.imageUrl}
              alt={'image'}
              unoptimized
              // placeholder={'blur'}
              fill
            />
          </RoundedImageContainer>
          <GatheringDetailsContainer>
            <Box>
              <Typography variant={'h5'}>{gathering.title}</Typography>
              <Typography>{gathering.startsAt.toLocaleDateString()}</Typography>
            </Box>
            <Box>
              <Typography>{`${gathering.attendees.length} attending`}</Typography>
            </Box>
          </GatheringDetailsContainer>
        </Flex>
        <StyledCardActionContainer>
          <IconButton
            color={bookmarked ? 'primary' : 'inherit'}
            onClick={() => {
              setBookmarked((prevState) => !prevState);
              onBookmark?.(gathering);
            }}
          >
            {bookmarked ? <Bookmark /> : <BookmarkAddOutlined />}
          </IconButton>
        </StyledCardActionContainer>
      </StyledCardContainer>
    </Card>
  );
};
