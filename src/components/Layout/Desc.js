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
        </Row>
      </div>
    )
  }
}
