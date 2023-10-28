import { FunctionComponent } from 'react';
import { Card, Flex } from '../../../atoms';
import { Stack, Typography } from '@mui/material';
import {
  AccessTimeOutlined,
  EventRepeatOutlined,
  LocationOnOutlined,
} from '@mui/icons-material';
import { formatTimestampToDateTime } from '../../../formatters';
import { Gathering, Recurrence } from '@gliondar/shared/types';

const getRecurrence = (recurrence: Recurrence | null): string => {
  switch (recurrence) {
    default:
    case Recurrence.NONE:
      return 'Does not repeat';
    case Recurrence.DAILY:
      return 'Takes place daily';
    case Recurrence.WEEKLY:
      return 'Takes place weekly';
    case Recurrence.FORTNIGHTLY:
      return 'Takes place fortnightly';
    case Recurrence.MONTHLY:
      return 'Takes place monthly';
  }
};

type Props = Pick<Gathering, 'recurrence' | 'startsAt' | 'address'>;

export const GatheringQuickOverview: FunctionComponent<Props> = ({
  recurrence = Recurrence.NONE,
  startsAt,
  address,
}) => {
  return (
    <Card padding={2}>
      <Flex>
        <Stack gap={2}>
          <Flex gap={1}>
            <EventRepeatOutlined />
            <Typography>{getRecurrence(recurrence)}</Typography>
          </Flex>
          <Flex gap={1}>
            <AccessTimeOutlined />
            <Typography>{formatTimestampToDateTime(startsAt)}</Typography>
          </Flex>
          <Flex gap={1}>
            <LocationOnOutlined />
            <Typography>{address}</Typography>
          </Flex>
        </Stack>
      </Flex>
    </Card>
  );
};
