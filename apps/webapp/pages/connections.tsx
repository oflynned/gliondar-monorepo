import {
  Avatar,
  Flex,
  NavBarPage,
  SideBarLayout,
  Stack,
} from '../design-system';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { getRandomPeople } from '../mock-data/mock-people';
import { Person } from '../mock-data';
import { faker } from '@faker-js/faker/locale/en_IE';

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
  background: theme.palette.background.default,
  '&:hover': {
    cursor: 'pointer',
    background: theme.palette.background.paper,
  },
}));

const Connections = () => {
  const [connections] = useState(getRandomPeople(25));
  const [selectedConnection, setSelectedConnection] = useState<Person | null>(
    null
  );

  return (
    <SideBarLayout activePage={NavBarPage.CONNECTIONS}>
      <ChatContainer width={350}>
        {connections.map((connection) => (
          <ConnectionContainer
            onClick={() => setSelectedConnection(connection)}
          >
            <IconButton>
              <Avatar imageUrl={connection.avatarUrl} label={connection.name} />
            </IconButton>

            <Stack justifyContent={'center'} width={'100%'}>
              <Typography fontWeight={700}>{connection.name}</Typography>
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
          <Stack>
            <SelectedConnectionContainer>
              <Flex gap={1}>
                <Avatar
                  imageUrl={selectedConnection.avatarUrl}
                  label={selectedConnection.name}
                />
                <Stack justifyContent={'center'}>
                  <Typography fontWeight={700}>
                    {selectedConnection.name}
                  </Typography>
                  <Typography>{faker.address.city()}</Typography>
                </Stack>
              </Flex>
            </SelectedConnectionContainer>
            <Flex padding={2} sx={{ background: 'lightgray' }} />
          </Stack>
        ) : null}
      </Box>
    </SideBarLayout>
  );
};

export default Connections;
