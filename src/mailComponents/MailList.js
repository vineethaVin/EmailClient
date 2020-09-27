import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


export default class MailList extends React.Component {

  constructor(props) {
    super()
    this.state = { open: false };
  }
  handleClick = (data) => {
    this.setState({ open: !this.state.open });
    this.props.handleMailOnClick(data);
  }
  render() {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        { this.props.mailList.map((data, key) => {
          return (
            <React.Fragment  key={key}>
              <ListItem  button onClick={() => this.handleClick(data)}>
                <ListItemText >
                  <Typography style={{ overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2%' ,fontWeight: data.unread ? 'bold' : '400'}}>{data.mId}</Typography>
                  <Typography style={{ overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2%',fontWeight: data.unread ? 'bold' : '400' }}>{data.subject}</Typography>
                  <Typography style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2%',fontWeight: data.unread ? 'bold' : '400' }}>{data.content}</Typography>
                </ListItemText>
              </ListItem>
              <Divider light />
            </React.Fragment>
          )
        })}

      </List>

    );
  }

}