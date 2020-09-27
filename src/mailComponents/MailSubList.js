import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DraftsIcon from '@material-ui/icons/Drafts';
import UndoIcon from '@material-ui/icons/Undo';

const search = {
  position: 'relative',
  backgroundColor: '#eeeeee',
}
const searchIcon = {
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
  marginLeft: '5%',
  color: '#2196f3'
}
const inputRoot = {
  color: 'inherit',
  marginLeft: '15%'

}

class MailSubList extends React.Component {

  render() {
    return (
      <Paper elevation={0} >
        <Grid container spacing={2}>
          <Grid style={search} item xs={2}>
            <div style={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase style={inputRoot}
              placeholder="Search Mail and People"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Grid>
          <Grid item xs={1}>
            <Button style={{ color: '#2196f3', position: 'relative' }}
              startIcon={<AddCircleOutlineIcon />}>
              New</Button>
          </Grid>
          <Grid item xs={2}>
            <Button style={{ color: '#2196f3' }}
              startIcon={<DraftsIcon />}>
              Mark as Unread</Button>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Button style={{ color: '#2196f3' }}
              startIcon={<UndoIcon />}>
              undo</Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
export default MailSubList;