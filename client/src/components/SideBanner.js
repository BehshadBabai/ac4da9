import { Grid } from '@material-ui/core';

export const SideBanner = ({ xs, sm }) => {
  return (
    <Grid item xs={xs} sm={sm} className='side-banner'>
      <Grid
        item
        container
        justifyContent='center'
        alignContent='center'
        className='overlay'
      >
        <Grid item container className='chat' justifyContent='center'>
          <Grid item className='chatImage'></Grid>
          <Grid item className='chatText' xs={xs}>
            Converse With anyone with any language
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
