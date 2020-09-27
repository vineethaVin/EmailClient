import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/Inbox';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CreateIcon from '@material-ui/icons/Create';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import NoteIcon from '@material-ui/icons/Note';
import Divider from '@material-ui/core/Divider';


const nested = {
  paddingLeft: '10%',
}


export default class MailDisplay extends React.Component {

  constructor(props) {
    super()
    this.state = { open: false };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }
  handleListClick = (value) => {
    var data = [];
    if (value === "Inbox") {
      data = require('./../json/inbox');
      this.props.handleMailList(data);
    }
    else if (value === "spam") {
      data = require('./../json/spam');
      this.props.handleMailList(data);
    }
    else {
      data = [];
      this.props.handleMailList(data);
    }
  }
  render() {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem button onClick={this.handleClick}>
          {!this.state.open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary="Favourites" />
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={nested} onClick={() => this.handleListClick("Inbox")}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("spam")}>
              <ListItemIcon>
                <ErrorOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="spam" />
            </ListItem >
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <BlockIcon />
              </ListItemIcon>
              <ListItemText primary="Junk Email" />
            </ListItem>
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItem>
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </ListItem>
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Delete Items" />
            </ListItem>
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItem >
            <Divider light />
            <ListItem button style={nested} onClick={() => this.handleListClick("")}>
              <ListItemIcon>
                <NoteIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>
          </List>
        </Collapse>
      </List>
      
    );
  }
}