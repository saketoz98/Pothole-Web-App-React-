import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import Desc from './Desc';
import MapContainer from './Map';
import FormContainer from './FormContainer';
import { Modal, Button } from 'antd';
import {firebase} from '../../firebaseConfig';
const db = firebase.database();
const { Meta } = Card;

export class ComplaintDetails extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        complaint : {...this.props.details},
        status : ""
      }
    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleOk = async () => {
        this.setState({
          confirmLoading: true,
        });
        // setTimeout(() => {
        //   this.setState({
        //     visible: false,
        //     confirmLoading: false,
        //   });
        // }, 2000);
        const complaint_id = this.props.details.complaint_id;
        const uid = this.props.details.uid;
        const snapshot = await db.ref('result/' + uid + '/' + complaint_id).update({
            status: this.state.status
        });
        this.setState({
            confirmLoading:false,
            visible : false,
            complaint :{...this.state.complaint, status : this.state.status}

        });

      }
    handleStatusChange = (status)=>{
        this.setState({
            status : status
        });
    } 
    
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
    
    render() {
        console.log("details",this.state.complaint)
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
                    description={
                        <div>
                            <Desc desc={this.state.complaint}  />
                            <Button type="primary" onClick={this.showModal}>
                                Change Status
                            </Button>
                            <Modal
                                title="Status"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                confirmLoading={this.state.confirmLoading}
                                onCancel={this.handleCancel}
                                onOk={this.handleOk}
                            >
                                <FormContainer handleStatusChange={this.handleStatusChange} status={this.props.details.status}/>
                            </Modal>
                        </div>
                        
                                }
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
