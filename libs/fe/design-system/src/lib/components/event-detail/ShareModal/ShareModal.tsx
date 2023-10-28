import { FunctionComponent } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import { Card } from '@gliondar/fe/design-system';
import { Stack, Typography } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { Gathering } from '@gliondar/shared/types';

type Props = {
  open: boolean;
  onClose: () => void;
  gathering: Gathering;
};

export const ShareModal: FunctionComponent<Props> = ({
  open,
  onClose,
  gathering,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Card>
          <Stack
            display={'flex'}
            flexDirection={'column'}
            padding={2}
            width={512}
          >
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography variant={'h4'}>Share</Typography>
              <IconButton onClick={onClose}>
                <CloseOutlined />
              </IconButton>
            </Box>
            <Typography>{gathering.title}</Typography>
          </Stack>
        </Card>
      </Box>
    </Modal>
  );
};
