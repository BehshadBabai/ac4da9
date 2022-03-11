import React, { useState } from 'react';
import { FormControl, FilledInput, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Upload } from './Upload';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments
    };
    if(formElements.text.value || attachments.length){
      await postMessage(reqBody);
      setText('');
      document.getElementById('upload').setAttribute('style','color: black');
      setAttachments([]);
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container alignContent='flex-end'>
        <Grid item xs={10} md={11}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={handleChange}
          />
          </FormControl>
        </Grid>
        <Grid container item xs={2} md={1} justifyContent='center' alignContent='center'>
        <Upload
          setAttachments={setAttachments}
        />
        </Grid>
      </Grid>
    </form>
  );
};

export default Input;
