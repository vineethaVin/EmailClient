import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import MailList from './MailList';
import MailFolder from './MailFolder';
import MailSubList from './MailSubList';
import Grid from '@material-ui/core/Grid';
import CompleteMail from './CompleteMail';

const menuButton = {
  marginRight: '2%',
}

const title = {
  flexGrow: 1
}


export default class AppBarClass extends React.Component {
  constructor(props) {
    super()
    this.state = {
      open: false,
      mailList: [],
      openMailList: false,
      openMail: false,
      mailContent: ""
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }
  handleMailList = (value) => {
    this.setState({ mailList: value, openMailList: true, openMail: false });
  }
  handleMailOnClick = (value) => {
    //Mark the mail content as read 
    var updateData = value;
    updateData.unread = false;
    var updateMaiList = this.state.mailList;
    updateMaiList[updateMaiList.indexOf(value)] = updateData;
    this.setState({ openMail: true, mailContent: value, mailList: updateMaiList });
  }
  handleDeleteMail = (value) => {
    // delete the mail content
    var mailDataList = this.state.mailList.filter(function (data) {
      return data.mId !== value.mId;
    });
    this.setState({ mailList: mailDataList, openMail: false });
  }
  render() {
    let unreadCount = [];
    unreadCount = this.state.mailList.filter(function (data) {
      return data.unread === true;
    });
    return (
      <div >
        <AppBar style={{ backgroundColor: '#2196f3', width: "100%" }} position="static">
          <Toolbar>
            <div style={{ width: "90%", textAlign: "left" }}>
              <IconButton
                edge="start"
                style={menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleClick}
              >
                <MenuIcon />
                <Typography variant="h6" style={title}>
                  Outlook Mail
              </Typography>
              </IconButton>
            </div>
            <div style={{ float: 'right', width: "10%" }}>
              <IconButton aria-label="show new mails" color="inherit">
                <Badge badgeContent={unreadCount.length} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <MailSubList />
        { this.state.open ?
          <React.Fragment>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <MailFolder handleMailList={this.handleMailList} />
              </Grid>
              <Grid item xs={2}>
                {/**Tag contain the  mail list for the folder */
                this.state.openMailList ?
                  <MailList mailList={this.state.mailList} handleMailOnClick={this.handleMailOnClick} />
                  : ""}
              </Grid>
              <Grid item xs={8}>
                {/**Tag contain the complete mail content */
                this.state.openMail ?
                  <CompleteMail mailContent={this.state.mailContent} handleMailOnClick={this.handleMailOnClick} handleDeleteMail={this.handleDeleteMail} />
                  : ""}
              </Grid>
            </Grid>
          </React.Fragment>
          : ""}

      </div>
    );
  }
}