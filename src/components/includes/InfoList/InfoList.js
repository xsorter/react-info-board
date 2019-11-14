import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import InfoListItem from './InfoListItem/InfoListItem';
import Typography from '@material-ui/core/Typography';
class InfoList extends Component {
  state = {
    itemList: this.props.dataArr,
  };
  removeItemHandler = (itemIndex, action) => {
    const newItemList = [...this.state.itemList];
    if (action === 'Delete') {
      newItemList.splice(itemIndex, 1);
    }
    this.setState({ itemList: newItemList });
  };
  render() {
    return (
      <div className="InfoList">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography color="primary" variant="h5" component="h5">
              Latest updates
            </Typography>
          </Grid>
          {this.state.itemList.map((listItem, index) => {
            return (
              <InfoListItem
                click={action => this.removeItemHandler(index, action)}
                title={listItem.title}
                content={listItem.content}
                key={listItem.id}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default InfoList;
