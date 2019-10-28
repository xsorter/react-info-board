import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import HomePageListItem from './HomePageListItem/HomePageListItem';
import Typography from '@material-ui/core/Typography';
class HomePageList extends Component {
  state = {
    itemList: [
      {
        id: 'unid-0',
        title: 'Title-0',
        content: 'Content-0 Content-0 Content-0 Content-0',
      },
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
    ],
  };
  removeItemHandler = itemIndex => {
    const newItemList = [...this.state.itemList];
    newItemList.splice(itemIndex, 1);
    this.setState({ itemList: newItemList });
  };
  itemTitleChangeHandler = (index, event) => {
    const newItemList = [...this.state.itemList];
    newItemList[index].title = event.target.value;
    this.setState({ itemList: newItemList });
  };
  render() {
    return (
      <div className="HomePageList">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="primary" className="HomePageList__title" variant="h5" component="h5">
              Latest updates
            </Typography>
          </Grid>
          {this.state.itemList.map((warning, index) => {
            return (
              <HomePageListItem
                click={this.removeItemHandler.bind(this, index)}
                titleChange={this.itemTitleChangeHandler.bind(this, index)}
                title={warning.title}
                content={warning.content}
                key={warning.id}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default HomePageList;
