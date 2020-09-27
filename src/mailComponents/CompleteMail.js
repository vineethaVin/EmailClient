import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default class CompleteMail extends React.Component {

    constructor(props) {
        super()
        this.state = { open: false };
    }
    handleClick = (data) => {
        this.setState({ open: !this.state.open });
        this.props.handleMailOnClick(data);
    }
    handleDeleteMail= (data)=>{
    this.props.handleDeleteMail(data);
    }
    render() {
        var data = this.props.mailContent;
        return (
            <div>
                <Typography style={{ textAlign: 'left' }}>
                    {data.subject}
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <Typography style={{ textAlign: 'left' }}>
                            {data.mId}
                        </Typography>
                        <Typography style={{ textAlign: 'left' }}>
                            {data.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonGroup variant="text" color="primary">
                            <Button >  <Typography style={{ color: "#2196f3" }}>Reply</Typography></Button>
                            <Button><Typography style={{ color: "#2196f3" }}>Forward</Typography></Button>
                            <Button><Typography style={{ color: "#2196f3" }} onClick={()=>this.handleDeleteMail(data)}>DELETE</Typography></Button>
                        </ButtonGroup>
                    </CardActions>

                </Card>
            </div>

        );
    }

}