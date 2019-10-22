import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomePageListItem from './HomePageListItem/HomePageListItem';
import Typography from '@material-ui/core/Typography';
class HomePageList extends Component {
  state = {
    warningList: [
      {
        id: 'unid-1',
        title: 'Title-1',
        content: 'Content-1 Content-1 Content-1 Content-1',
      },
      {
        id: 'unid-2',
        title: 'Title-2',
        content: 'Content-2 Content-2 Content-2 Content-2',
      },
      {
        id: 'unid-3',
        title: 'Title-3',
        content: 'Content-3 Content-3 Content-3 Content-3',
      },
    ],
  };
  deleteWarning = warningIndex => {
    const newWarnings = [...this.state.warningList];
    newWarnings.splice(warningIndex, 1);
    this.setState({ warningList: newWarnings });
  };
  render() {
    return (
      <div className="HomePageList">
        <Grid container spacing={3}>
          <Grid item xs={12} /*onClick={() => this.deleteWarning(index)} key={warning.id}*/>
            <Typography color="primary" className="HomePageList__title" variant="h5" component="h5">
              Latest updates
            </Typography>
          </Grid>
          {this.state.warningList.map((warning, index) => {
            return (
              <HomePageListItem key={warning.id} title={warning.title} content={warning.content} />
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default HomePageList;
