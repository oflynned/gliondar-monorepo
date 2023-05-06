import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';
import { Typography } from '@mui/material';
import { Avatar, Card, Flex } from '../../../atoms';

type Props = Pick<Gathering, 'attendees'>;

export const GatheringAttendees: FunctionComponent<Props> = ({
  attendees = [],
}) => {
  return (
    <Card>
      <Flex gap={2} padding={2} flexWrap={'wrap'}>
        {!attendees?.length ? (
          <Typography>Be the first to attend this event</Typography>
        ) : (
          attendees.map((attendee) => (
            <Avatar
              imageUrl={attendee.user?.avatar?.url}
              label={attendee.user?.profile.name}
              key={attendee.id}
            />
          ))
        )}
      </Flex>
    </Card>
  );
};
