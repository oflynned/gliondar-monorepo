import {
  Button,
  Flex,
  formatTimestampToDateTime,
  StickyBottomContainer,
} from '@gliondar/fe/design-system';
import { Box, IconButton, Typography } from '@gliondar/fe/mui';
import { BookmarkAddOutlined } from '@mui/icons-material';
import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';

type Props = {
  gathering: Gathering;
};

export const BottomActionBar: FunctionComponent<Props> = ({ gathering }) => {
  return (
    <StickyBottomContainer>
      <Flex justifyContent={'space-between'} width={'100%'}>
        <Flex alignItems={'flex-end'}>
          <Box>
            <Typography>
              {formatTimestampToDateTime(gathering.startsAt)}
            </Typography>
            <Typography variant={'h5'}>{gathering.title}</Typography>
          </Box>
        </Flex>
        <Flex gap={2}>
          <IconButton sx={{ width: 'fit-content' }} color={'inherit'}>
            <BookmarkAddOutlined />
          </IconButton>
          <Button label={'Attend'} color={'primary'} />
          <Button label={'Share'} color={'secondary'} variant={'outlined'} />
        </Flex>
      </Flex>
    </StickyBottomContainer>
  );
};
