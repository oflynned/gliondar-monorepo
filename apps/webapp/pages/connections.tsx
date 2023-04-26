import { Avatar, Flex, Stack, ChatMessageContainer } from '../design-system';
import { Box, Input, styled, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { getRandomPeople } from '../mock-data/mock-people';
import { User } from '@gliondar/shared/types';
import { faker } from '@faker-js/faker/locale/en_IE';
import { mockChatMessages } from '../mock-data/mock-chat-message';

const ChatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  overflowY: 'scroll',
  flexDirection: 'column',
  background: theme.palette.background.default,
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const SelectedConnectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
}));

const ConnectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  '&:hover': {
    cursor: 'pointer',
    background: theme.palette.background.paper,
  },
}));

const Connections = () => {
  const theme = useTheme();
  const [messages] = useState(mockChatMessages);
  const [connections] = useState(getRandomPeople(25));
  const [selectedConnection, setSelectedConnection] = useState<User | null>(
    null
  );

  return (
    <>
      <ChatContainer width={350}>
        <Typography
          variant={'h3'}
          paddingTop={2}
          paddingBottom={1}
          paddingX={2}
        >
          Connections
        </Typography>
        {/*<Box padding={1} width={'100%'}>*/}
        {/*  <TextField label={'Search'} variant={'outlined'} fullWidth />*/}
        {/*</Box>*/}
        {connections.map((connection) => (
          <ConnectionContainer
            key={connection.id}
            onClick={() => setSelectedConnection(connection)}
          >
            <Avatar
              imageUrl={connection.avatar.url}
              label={connection.profile.name}
            />

            <Stack justifyContent={'center'} width={'100%'}>
              <Typography fontWeight={700}>
                {connection.profile.name}
              </Typography>
              <Flex justifyContent={'space-between'}>
                <Typography
                  overflow={'hidden'}
                  whiteSpace={'nowrap'}
                  textOverflow={'ellipsis'}
                  width={192}
                >
                  {faker.random.words(5)}
                </Typography>
              </Flex>
            </Stack>
          </ConnectionContainer>
        ))}
      </ChatContainer>
      <Box flex={1}>
        {selectedConnection ? (
          <Stack height={'100vh'} overflow={'scroll'}>
            <SelectedConnectionContainer>
              <Flex gap={1}>
                <Avatar
                  imageUrl={selectedConnection.avatar.url}
                  label={selectedConnection.profile.name}
                />
                <Stack justifyContent={'center'}>
                  <Typography fontWeight={700}>
                    {selectedConnection.profile.name}
                  </Typography>
                  <Typography>{faker.address.city()}</Typography>
                </Stack>
              </Flex>
            </SelectedConnectionContainer>
            <Stack
              flex={1}
              overflow={'scroll'}
              sx={{ background: theme.palette.background.paper }}
              gap={theme.spacing(1)}
              justifyContent={'end'}
            >
              <ChatMessageContainer messages={messages} />
            </Stack>
            <Flex
              justifyContent={'end'}
              borderTop={`1px solid ${theme.palette.divider}`}
              sx={{ backgroundColor: 'white' }}
              height={96}
            >
              <Input sx={{ borderRadius: 0 }} fullWidth />
            </Flex>
          </Stack>
        ) : null}
      </Box>
    </>
  );
};

export default Connections;
