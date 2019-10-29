import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import InfoListItem from './InfoListItem/InfoListItem';
import Typography from '@material-ui/core/Typography';
class InfoList extends Component {
  state = {
    itemList: this.props.dataArr,
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
    const showRemoveIcon = this.state.itemList.length > 1 ? true : false;
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
                click={this.removeItemHandler.bind(this, index)}
                titleChange={this.itemTitleChangeHandler.bind(this, index)}
                title={listItem.title}
                content={listItem.content}
                key={listItem.id}
                removable={showRemoveIcon}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default InfoList;
