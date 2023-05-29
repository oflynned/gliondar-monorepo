import {
  Flex,
  Stack,
  ChatMessageContainer,
  Contact,
  ClickableAvatar,
} from '@gliondar/fe/design-system';
import { Box, Input, styled, Typography, useTheme } from '@gliondar/fe/mui';
import { useEffect, useState } from 'react';
import { Conversation, User } from '@gliondar/shared/types';
import { useLazyQuery, useQuery } from '@apollo/client';
import {
  GET_CONVERSATIONS,
  GET_CONVERSATION_BY_ID,
} from '@gliondar/fe/graphql';
import { ChatOutlined } from '@mui/icons-material';
import { router } from 'next/client';
import { useRouter } from 'next/router';

const ChatContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  flexDirection: 'column',
  background: theme.palette.background.default,
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const SelectedConnectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
}));

const Connections = () => {
  const router = useRouter();
  const theme = useTheme();

  const { data, loading, error } = useQuery<{
    getConversations: Conversation[];
  }>(GET_CONVERSATIONS);
  const [getConversationById, conversationData] = useLazyQuery<{
    getConversationById: Conversation;
  }>(GET_CONVERSATION_BY_ID);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);

  useEffect(() => {
    if (selectedConversation) {
      getConversationById({ variables: { id: selectedConversation.id } });
    }
  }, [selectedConversation?.id]);

  if (loading || conversationData.loading) {
    return 'Loading';
  }

  if (error || conversationData.error) {
    return 'Error';
  }

  const conversations = data?.getConversations;
  const conversation = conversationData?.data?.getConversationById;

  return (
    <>
      <ChatContainer width={350}>
        {conversations.length > 0 ? (
          conversations.map((conversation) => (
            <Contact
              key={conversation.id}
              lastMessage={conversation.messages.edges[0]?.node}
              unreadCount={conversation.unreadCount}
              user={conversation.partner}
              onSelectContact={() => {
                setSelectedConversation(conversation);
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
        {selectedConversation ? (
          <Stack height={'100vh'} overflow={'scroll'}>
            <SelectedConnectionContainer>
              <Flex gap={1}>
                <ClickableAvatar
                  user={selectedConversation.partner}
                  onAvatarClick={(user) => router.push(`/users/${user.id}`)}
                />
                <Stack justifyContent={'center'}>
                  <Typography fontWeight={700}>
                    {selectedConversation.partner.profile.name}
                  </Typography>
                  <Typography variant={'body2'}>{'Dublin'}</Typography>
                </Stack>
              </Flex>
            </SelectedConnectionContainer>
            <Stack
              flex={1}
              overflow={'scroll hidden'}
              sx={{ background: theme.palette.background.paper }}
              gap={theme.spacing(1)}
              justifyContent={'end'}
            >
              {selectedConversation ? (
                <ChatMessageContainer
                  messages={selectedConversation.messages}
                />
              ) : null}
            </Stack>
            <Flex
              overflow={'hidden'}
              justifyContent={'end'}
              borderTop={`1px solid ${theme.palette.divider}`}
              sx={{ backgroundColor: 'white' }}
              height={96}
            >
              <Input sx={{ borderRadius: 0 }} fullWidth />
            </Flex>
          </Stack>
        ) : (
          <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
            <Stack gap={1}>
              <Flex
                alignSelf={'center'}
                padding={1}
                sx={{
                  background: theme.palette.divider,
                  borderRadius: '50%',
                  width: 'fit-content',
                  height: 'fit-content',
                }}
              >
                <ChatOutlined color={'inherit'} />
              </Flex>
              <Typography>Select a conversation to chat</Typography>
            </Stack>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default Connections;
