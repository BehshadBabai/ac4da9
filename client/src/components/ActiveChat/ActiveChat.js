import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { Input, Header, Messages } from './index';
import { Upload } from './Upload';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 8,
    flexDirection: 'column',
  },
  chatContainer: {
    marginLeft: 41,
    marginRight: 41,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
}));

const ActiveChat = ({
  user,
  conversations,
  activeConversation,
  postMessage,
}) => {
  const classes = useStyles();

  const conversation = conversations
    ? conversations.find(
        (conversation) => conversation.otherUser.username === activeConversation
      )
    : {};

  const isConversation = (obj) => {
    return obj !== {} && obj !== undefined;
  };

  return (
    <Box className={classes.root}>
      {isConversation(conversation) && conversation.otherUser && (
        <>
          <Header
            username={conversation.otherUser.username}
            online={conversation.otherUser.online || false}
          />
          <Box className={classes.chatContainer}>
            {user && (
              <>
                <Messages
                  messages={conversation.messages}
                  otherUser={conversation.otherUser}
                  userId={user.id}
                />
                <Grid container alignContent='flex-end'>
                  <Grid item xs={10} md={11}>
                  <Input
                    otherUser={conversation.otherUser}
                    conversationId={conversation.id || null}
                    user={user}
                    postMessage={postMessage}
                  />
                  </Grid>
                  <Upload 
                    otherUser={conversation.otherUser}
                    conversationId={conversation.id || null}
                    user={user}
                    postMessage={postMessage}
                  />
                </Grid>
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ActiveChat;
