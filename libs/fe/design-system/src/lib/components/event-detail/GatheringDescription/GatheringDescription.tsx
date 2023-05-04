import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';
import { Stack, Typography } from '@gliondar/fe/mui';
import { Card } from '../../../atoms';

type Props = Pick<Gathering, 'description'>;

export const GatheringDescription: FunctionComponent<Props> = ({
  description = [],
}) => {
  if (!description) {
    return null;
  }

  return (
    <Card>
      <Stack padding={2} gap={2}>
        {description.length > 0 ? (
          description.map((paragraph, index) => (
            <Typography key={index}>{paragraph}</Typography>
          ))
        ) : (
          <Typography>No description</Typography>
        )}
      </Stack>
    </Card>
  );
};
