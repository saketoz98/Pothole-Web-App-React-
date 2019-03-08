import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import Desc from './Desc';
import MapContainer from './Map';
const { Meta } = Card;

export class ComplaintDetails extends Component {
  render() {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
            <Col span={12}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={this.props.details.pic_url}/>}
                >
                    <Meta
                    title="Complaint Details"
                    description={<Desc desc={this.props.details} />}
                    />
                </Card>
            </Col>
            <Col span={12}>
                <MapContainer 
                    latitude={this.props.details.latitude} 
                    longitude={this.props.details.longitude}
                />
            </Col>
            
            </Row>
        </div>
    )
  }
}

export default ComplaintDetails
