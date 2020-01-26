import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import InfoListItem from './InfoListItem/InfoListItem';
import Typography from '@material-ui/core/Typography';
import Api from '../../../Api';
import notyContainer from '../../hoc/Noty';
import Loading from '../../etc/Loading/Loading';


class InfoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
      itemList: [],
    };
  }

  componentDidMount() {
    this.setState({ itemList: this.props.dataArr });
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.dataArr !== nextProps.dataArr) {
      this.setState({
        isLoaded: true,
        itemList: nextProps.dataArr
      });
    }
    return true;
  }

  componentWillUnmount() {
    this.setState({
      isLoaded: false
    })
  }

  submitHandler = itemIndex => {
    const newItemList = [...this.state.itemList];
    newItemList[itemIndex].deletionSubmit.booleanValue = true;
    this.setState({ itemList: newItemList });
  };

  removeItemHandler = (itemIndex, action) => {
    const newItemList = [...this.state.itemList];
    const itemId = newItemList[itemIndex].id.stringValue;

    if (action === 'Delete') {
      newItemList.splice(itemIndex, 1);
      Api.deleteData(itemId)
      .then(resp => {
          if (resp === 200){
            const notyMessage = {
              type: 'success',
              show: true,
              message: 'Item Deleted',
            };
            this.props.onMessageFired(notyMessage);
          }
      })
    } else {
      newItemList[itemIndex].deletionSubmit.booleanValue = false;
    }

    this.setState({ itemList: newItemList });
  };

  render() {
    return (
      <div className="InfoList">

        {this.state.isLoaded ?
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
                submit={() => this.submitHandler(index)}
                showPopup={this.state.itemList[index].deletionSubmit.booleanValue}
                title={listItem.title.stringValue}
                author={listItem.author.stringValue}
                content={listItem.content.stringValue}
                status={listItem.status.stringValue}
                date={listItem.date.stringValue}
                key={listItem.id.stringValue}
              />
            );
          })}
        </Grid> : <Loading />}

      </div>
    );
  }
}


export default notyContainer(InfoList);
