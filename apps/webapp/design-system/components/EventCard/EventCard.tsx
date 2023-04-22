import { FunctionComponent } from 'react';
import { Flex, Card } from '../../atoms';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { BookmarkAddOutlined } from '@mui/icons-material';
import { Gathering } from '../../../mock-data/types';

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

const RoundedImageContainer = styled(Box, {
  shouldForwardProp: (prop: string): boolean => {
    return !['imageUrl'].includes(prop);
  },
})<{ imageUrl: string }>(({ theme, imageUrl }) => ({
  width: 192,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${imageUrl})`,
  borderRadius: theme.spacing(1),
}));

type Props = {
  gathering: Gathering;
  onClick?: (gathering: Gathering) => void;
  onBookmark?: (gathering: Gathering) => void;
};

export const EventCard: FunctionComponent<Props> = ({
  gathering,
  onClick = () => {},
  onBookmark = () => {},
}) => {
  return (
    <Card canHover>
      <StyledCardContainer
        key={gathering.id}
        onClick={() => onClick(gathering)}
      >
        <Flex>
          <RoundedImageContainer imageUrl={gathering.imageUrl} />
          <GatheringDetailsContainer>
            <Box>
              <Typography variant={'h5'}>{gathering.title}</Typography>
              <Typography>{gathering.startsAt.toISOString()}</Typography>
            </Box>
            <Box>
              <Typography>{`${gathering.attendees.length} attending`}</Typography>
            </Box>
          </GatheringDetailsContainer>
        </Flex>
        <StyledCardActionContainer>
          <IconButton
            color={'inherit'}
            onClick={() => {
              onBookmark(gathering);
            }}
          >
            <BookmarkAddOutlined />
          </IconButton>
        </StyledCardActionContainer>
      </StyledCardContainer>
    </Card>
  );
};
