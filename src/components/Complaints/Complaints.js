import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../actions/index';
import { Spin } from 'antd';
import { Row, Col } from 'antd';
import { Card, Icon, Avatar } from 'antd';
import Table from './Table';
import { withRouter } from "react-router";

export class Complaints extends Component {
  
    componentDidMount(){
        this.props.getComplaints();

    }

    render() {
      // console.log(this.props);
      let complaints_list = this.props.complaints.complaints_list;
      // console.log(complaints_list)
      const complaints = []
      for (let index = 0; index < complaints_list.length; index++) {
          // console.log(complaints_list[index].location_add) 
          complaints.push( {
            key: complaints_list[index].complaint_id,
            pic_url : complaints_list[index].pic_url,
            date : complaints_list[index].date,
            status : complaints_list[index].status,
            username : complaints_list[index].user_name,
            address : complaints_list[index].location_add
          } )        
      }
      
      let table;
      if(complaints === [] || complaints.length === 0 ){
          table =  (  <div className="example">
                          <Spin />
                        </div>
                   )
      }
      else{
          table = (
            <Table data = {complaints} />          
          )
      }
      return (
        <div>
          {table}
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  complaints : state.complaints
})

const mapDispatchToProps = dispatch=>{
  return{
    getComplaints : ()=>dispatch(actionCreator.getComplaints())

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Complaints));
