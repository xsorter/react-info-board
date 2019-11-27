import React from 'react';
import './ResponsiblePerson.sass';
import Api from '../../../Api'

class ResponsiblePerson extends React.Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    Api.getUsers()
      .then(users => {
        const items = [];
        users.documents.map(user => {
          if(user.fields.isResponsible.booleanValue){
            items.push(user.fields);
          }
          return null
        })
        this.setState(items[0])
      })
  }

  render(){
    const name = this.state.shortName ? this.state.shortName.stringValue : 'loading...';
    return(
      <div className="responsible">
        Current week<br/> responsible person:<br/>
        <span className="responsible__name">{name}</span>
      </div>
    )
  }
}

export default ResponsiblePerson;
