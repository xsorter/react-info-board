import React from 'react';
import Archive from '../../includes/Archive/Archive';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Api from '../../../Api';
import Loading from '../../etc/Loading/Loading';

const useStyles = theme => ({
  root: {
    padding: theme.spacing(3, 0),
  },
});

class ArchivePage extends React.Component {
  state = { isLoaded: false };

  componentDidMount(){
    Api.getData()
      .then(data => {
        const newData = [];
        const sortedArr = [];

        data.documents.map( item => {
          newData.push({
            date: item.fields.date.stringValue,
            itemsData: [{
              id: item.fields.id.stringValue,
              author: item.fields.author.stringValue,
              text: item.fields.content.stringValue,
              status: item.fields.status.stringValue
            }]
          })
          return true
        })

        newData.map(e => {
          let current = sortedArr.filter(v => v.date === e.date);
          if(current.length){
            let currentIndex = sortedArr.indexOf(current[0]);
            sortedArr[currentIndex].itemsData = sortedArr[currentIndex].itemsData.concat(e.itemsData);
          } else {
            sortedArr.push(e)
          }
          return true
        })

        this.setState({
          isLoaded: true,
          data: sortedArr
        })
      })
  }

  componentWillUnmount(){
    this.setState({ isLoaded: false })
  }

  render() {
    const data = this.state.data;
    return (
      <div className="ArchivePage">
        <div className="cBox">
          <div className={this.props.classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography color="primary" variant="h5" component="h5" gutterBottom>
                  Archive
                </Typography>

                {this.state.isLoaded ? (
                  <React.Fragment>
                    {data.map((e, i) => {
                      return (<Archive key={i} items = {e} />)
                    })}
                  </React.Fragment>
                 ) : <Loading />}

              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(ArchivePage);
