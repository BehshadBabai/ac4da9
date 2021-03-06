import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  return (
    <Box>
      {messages.map((message) => {

        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble
          key={message.id}
          text={message.text}
          images={message.attachments ? message.attachments : []}
          time={time} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            images={message.attachments ? message.attachments : []}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
