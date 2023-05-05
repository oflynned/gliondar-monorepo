import {
  Button,
  Flex,
  formatTimestampToDateTime,
  StickyBottomContainer,
} from '@gliondar/fe/design-system';
import { Box, IconButton, Typography } from '@gliondar/fe/mui';
import { BookmarkAdded, BookmarkAddOutlined } from '@mui/icons-material';
import { FunctionComponent, useState } from 'react';
import { AttendanceStatus, Gathering } from '@gliondar/shared/types';

type Props = {
  gathering: Gathering;
  onAttend?: (gathering: Gathering) => void;
  onBookmark?: (gathering: Gathering) => void;
  onShare?: (gathering: Gathering) => void;
};

export const BottomActionBar: FunctionComponent<Props> = ({
  gathering,
  onAttend,
  onBookmark,
  onShare,
}) => {
  console.log({ gathering });

  const [isBookmarked, setIsBookmarked] = useState(gathering.bookmarked);
  const [isAttending, setIsAttending] = useState(
    gathering.attendance === AttendanceStatus.ATTENDING
  );

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
          <IconButton
            sx={{ width: 'fit-content' }}
            color={isBookmarked ? 'primary' : 'inherit'}
            onClick={() => {
              onBookmark?.(gathering);
              setIsBookmarked((prevState) => !prevState);
            }}
          >
            {isBookmarked ? <BookmarkAdded /> : <BookmarkAddOutlined />}
          </IconButton>
          <Button
            variant={isAttending ? 'contained' : 'outlined'}
            label={isAttending ? 'Attending' : 'Attend'}
            color={'primary'}
            onClick={() => {
              onAttend?.(gathering);
              setIsAttending((prevState) => !prevState);
            }}
          />
          <Button
            label={'Share'}
            color={'secondary'}
            variant={'outlined'}
            onClick={() => onShare?.(gathering)}
          />
        </Flex>
      </Flex>
    </StickyBottomContainer>
  );
};
