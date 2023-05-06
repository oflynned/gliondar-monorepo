import {
  Avatar,
  Flex,
  Stack,
  ChatMessageContainer,
  Contact,
} from '@gliondar/fe/design-system';
import { Box, Input, styled, Typography, useTheme } from '@gliondar/fe/mui';
import { useState } from 'react';
import { ChatMessage, User } from '@gliondar/shared/types';
import { faker } from '@faker-js/faker/locale/en_IE';
import { getRandomPeople, mockChatMessages } from '@gliondar/be/mock-data';
import { useLazyQuery } from '@apollo/client';

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

const Connections = () => {
  const theme = useTheme();
  const [messages] = useState<ChatMessage[]>([]);
  const [contacts] = useState<User[]>([]);
  const [selectedContact, setSelectedContact] = useState<User | null>(null);

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
        {contacts.length > 0 ? (
          contacts.map((user) => (
            <Contact
              user={user}
              onSelectContact={(user) => {
                setSelectedContact(user);
              }}
            />
          ))
        ) : (
          <Box padding={2}>
            <Typography>No contacts yet</Typography>
          </Box>
        )}
      </ChatContainer>
      <Box flex={1}>
        {selectedContact ? (
          <Stack height={'100vh'} overflow={'scroll'}>
            <SelectedConnectionContainer>
              <Flex gap={1}>
                <Avatar
                  imageUrl={selectedContact.avatar.url}
                  label={selectedContact.profile.name}
                />
                <Stack justifyContent={'center'}>
                  <Typography fontWeight={700}>
                    {selectedContact.profile.name}
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
