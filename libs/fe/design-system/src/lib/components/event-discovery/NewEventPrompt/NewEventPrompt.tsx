import { FunctionComponent } from 'react';
import { Button, Card, Stack } from '../../../atoms';
import { Box, Typography } from '@gliondar/fe/mui';

export const NewEventPrompt: FunctionComponent = () => {
  return (
    <Card>
      <Stack
        justifyContent={'space-between'}
        width={'100%'}
        padding={2}
        gap={1}
      >
        <Typography variant={'h4'}>Your events</Typography>
        <Typography>You have not created any events yet.</Typography>
        <Box alignSelf={'flex-end'} marginTop={2}>
          <Button label={'New event'} color={'primary'} variant={'outlined'} />
        </Box>
      </Stack>
    </Card>
  );
};
