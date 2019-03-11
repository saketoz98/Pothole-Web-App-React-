import React, { Component } from 'react'
import { Button ,Icon} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';

const paraStyle = {
  color : 'white'
}

export class LoginPage extends Component {
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">BMC Pothole Portal</h1>
          <p style={paraStyle}>
         Manage Pothole Complaints Efficiently</p>
          <Button type="primary" onClick={this.props.startLogin}><Icon type="google"/>Login With Google</Button>
        </div>
      </div>
        
    )
  }
}

const mapDispatchToProps = (dispatch)=>({
  startLogin :()=> dispatch(actions.startLogin())
})

export default connect(null,mapDispatchToProps)(LoginPage);
