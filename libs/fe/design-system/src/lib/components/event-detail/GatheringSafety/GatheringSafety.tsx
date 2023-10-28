import { FunctionComponent } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Button, Card, Flex } from '@gliondar/fe/design-system';

type Props = {
  onReport?: () => void;
  onBlock?: () => void;
};

export const GatheringSafety: FunctionComponent<Props> = ({
  onReport,
  onBlock,
}) => {
  return (
    <Card>
      <Stack padding={2} width={350} gap={2}>
        <Box>
          <Typography variant={'h4'}>Safety</Typography>
        </Box>
        <Flex gap={1}>
          <Button
            label={'Report'}
            color={'error'}
            variant={'outlined'}
            onClick={() => onReport?.()}
          />
          <Button
            label={'Block'}
            color={'error'}
            variant={'outlined'}
            onClick={() => onBlock?.()}
          />
        </Flex>
      </Stack>
    </Card>
  );
};
