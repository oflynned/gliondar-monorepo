import { FunctionComponent } from 'react';
import { TextPost as TextPostType } from '../../../mock-data';
import { Avatar, Card, Flex, Stack } from '../../atoms';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material';

type Props = {
  post: TextPostType;
};

export const TextPost: FunctionComponent<Props> = ({ post }) => {
  return (
    <Card>
      <Stack padding={2}>
        <Flex gap={1}>
          <Avatar imageUrl={post.poster.avatarUrl} label={post.poster.name} />
          <Stack justifyContent={'center'}>
            <Flex gap={1} alignItems={'center'}>
              <Typography variant={'h5'}>{post.poster.name}</Typography>
            </Flex>
            <Typography>{post.postedAt.toISOString()}</Typography>
          </Stack>
        </Flex>
        <Box>
          <Typography>{post.text}</Typography>
        </Box>
      </Stack>
      <Flex alignItems={'center'}>
        <Stack alignItems={'center'}>
          <IconButton>
            <ArrowUpwardRounded />
          </IconButton>
          <Typography>{post.score}</Typography>
          <IconButton>
            <ArrowDownwardRounded />
          </IconButton>
        </Stack>
      </Flex>
    </Card>
  );
};
