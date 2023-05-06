import { FunctionComponent } from 'react';
import { Flex, Stack, Card } from '../../../atoms';
import { Chip, Typography } from '@mui/material';
import { Interest } from '@gliondar/shared/types';

type Props = {
  interests: Interest[];
};

export const InterestOverview: FunctionComponent<Props> = ({ interests }) => {
  return (
    <Card>
      <Stack justifyContent={'space-between'} padding={2}>
        <Typography variant={'h4'}>Your interests</Typography>
        <Flex marginTop={2} gap={1} flexWrap={'wrap'}>
          {interests.length > 0 ? (
            interests.map((interest) => (
              <Chip
                key={interest.id}
                clickable
                label={<Typography>{interest.title}</Typography>}
              />
            ))
          ) : (
            <Typography>No interests added yet.</Typography>
          )}
        </Flex>
      </Stack>
    </Card>
  );
};
