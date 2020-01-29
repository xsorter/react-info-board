import React from 'react';
import Archive from '../../includes/Archive/Archive';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { EventNote } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
});

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.dummyData = [
      {
        date: "10.12.2019",
        itemsData: [
          {
            id: '#001',
            author: 'Alex Nelin',
            text: 'Lorem ipsum dolor sit amet',
            status: 'opened'
          },
          {
            id: '#002',
            author: 'Roman Mekhed',
            text: 'consectetur adipisicing elit',
            status: 'closed'
          },
          {
            id: '#003',
            author: 'Galina Golovnia',
            text: 'Quos blanditiis tenetur unde suscipit',
            status: 'opened'
          }
        ]
      },
      {
        date: "11.12.2019",
        itemsData: [
          {
            id: '#0011',
            author: 'Alex Nelin',
            text: 'Lorem ipsum dolor sit amet',
            status: 'opened'
          },
          {
            id: '#0022',
            author: 'Roman Mekhed',
            text: 'consectetur adipisicing elit',
            status: 'opened'
          },
          {
            id: '#0033',
            author: 'Galina Golovnia',
            text: 'Quos blanditiis tenetur unde suscipit',
            status: 'closed'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <div className="ArchivePage">
        <div className="cBox">
          <div className={this.props.classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography color="primary" variant="h5" component="h5" gutterBottom>
                  Archive
                </Typography>
                {this.dummyData.map((e, i) => {
                  return (<Archive key={i} items = {e} />)
                })}
              </Grid>
            </Grid>
          </div>
        </div>
        <Link title="Notepad" className="button__notepad" to="/notepad">
          <EventNote>Notepad</EventNote>
        </Link>
      </div>
    );
  }

}

export default withStyles(useStyles)(ArchivePage);
