import React, { useState } from 'react';
import axios from 'axios';
import { Button, Grid, colors, Typography, Snackbar } from '@material-ui/core'


function App() {

  const [snackBarMessage, setSnackBarMessage] = useState(undefined);

  const onButtonClick = async (button: string) => {
    const msg = await axios.post(`/api/click`, { button });
    setSnackBarMessage(msg.data);
  }

  const renderButtonItem = (name: string) =>
    <Grid item xs={2}>
      <Button size="large" fullWidth style={{ backgroundColor: colors.purple[500] }} color='primary' variant="contained" onClick={() => onButtonClick(name)}>
        {name}
      </Button>
    </Grid>

  return (
    <div>
      <Grid container spacing={8} direction="column" alignItems={'center'} justify={'center'} style={{ height: '100vh' }}>
        <Grid item container direction="column" alignItems={'center'}>
          <Grid item>
            <Typography variant="h4">Press The Buttons</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">try clicking the same button 3 times in a row</Typography>
          </Grid>
        </Grid>
        <Grid item spacing={10} container direction="row" alignItems={'center'} justify={'center'}>
          {['A', 'B'].map(renderButtonItem)}
        </Grid>
      </Grid>
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={Boolean(snackBarMessage)} autoHideDuration={5000} onClose={() => setSnackBarMessage(undefined)} >
        <Button style={{ backgroundColor: colors.lightBlue[500] }} variant="contained">
          {snackBarMessage}
        </Button>
      </Snackbar>
    </div>
  );
}

export default App;
