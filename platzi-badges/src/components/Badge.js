import React from 'react';

import './styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends React.Component{  
  render(){
    const {firstName, lastName, jobTitle, twitter} = this.props;
    return(
      <div className="Badge" data-test-id="badge-container">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"/>
        </div>
        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} alt="avatar"/>
          <h1>{firstName} <br/>{lastName}</h1>
        </div>
        <div className="Badge__section-info">
          <p>{jobTitle}</p>
          <div>@{twitter}</div>          
        </div>
        <div className="Badge__footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;