import React, { Component } from 'react'
import { Statistic, Row, Col, Button } from 'antd';

export default class Desc extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
            <Col span={24}>
            <Statistic title="Current Status" value={this.props.desc.status} />
            </Col>
            <Col span={24} style={{marginTop:20}}>
            <Statistic title="Area" value={this.props.desc.pothole_area} precision={0} suffix="sqm"  />
            </Col>
            <Col span={24} style={{marginTop:20}}>
            <Statistic title="Number Of Potholes" value={this.props.desc.number_of_potholes} precision={0} />
            </Col>
            <Col span={24} style={{marginTop:20}}>
            <Statistic title="Asphalt Required (kg): " value={this.props.massfn(this.props.desc.pothole_area).toFixed(2)}  />
            </Col>
            <Col span={24} style={{marginTop:20}}>
            <Statistic title="Price Of Asphalt(per kg):" value={30} precision={0} />
            </Col>
            <Col span={24} style={{marginTop:20}}>
            <Statistic title="Cost Estimated (Rs)" value={this.props.massfn(this.props.desc.pothole_area).toFixed(2)*30} precision={2} />
            </Col>
            
        </Row>
      </div>
    )
  }
}
