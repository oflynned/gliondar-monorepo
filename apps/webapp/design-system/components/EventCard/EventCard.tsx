import { FunctionComponent } from 'react';
import { Card, Flex, Stack } from '../../atoms';
import { Box, IconButton, styled, Typography, useTheme } from '@mui/material';
import { BookmarkAddOutlined } from '@mui/icons-material';
import { Gathering } from '../../../mock-data/types';

const StyledCardContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '&:hover': {
    pointer: 'cursor',
  },
});

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

type Props = {
  gathering: Gathering;
  onClick: (gathering: Gathering) => void;
};

export const EventCard: FunctionComponent<Props> = ({ gathering, onClick }) => {
  const theme = useTheme();

  return (
    <Card>
      <StyledCardContainer
        onClick={() => onClick(gathering)}
        // onClick={() => {}}
        key={gathering.id}
      >
        <Flex>
          <Box
            sx={{
              width: 192,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundImage: `url(${gathering.imageUrl})`,
              borderRadius: theme.spacing(1),
            }}
          />
          <GatheringDetailsContainer>
            <Box>
              <Typography variant={'h5'}>{gathering.title}</Typography>
              <Typography>{gathering.startsAt}</Typography>
            </Box>
            <Box>
              <Typography>{`${gathering.attendees.length} attending`}</Typography>
            </Box>
          </GatheringDetailsContainer>
        </Flex>
        <StyledCardActionContainer>
          <IconButton color={'inherit'}>
            <BookmarkAddOutlined />
          </IconButton>
        </StyledCardActionContainer>
      </StyledCardContainer>
    </Card>
  );
};
