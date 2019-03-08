import React, { Component } from 'react'
import {firebase}  from '../../firebaseConfig';
import { Spin } from 'antd';
import ComplaintDetails from './ComplaintDetails';
const  db = firebase.database();

export class Complaint extends Component {
    state = {
        complaint : null,
        loading : false
    }
    async componentDidMount(){
        console.log("Complaint Prpops",this.props);
        this.getComplaint()
    }
    getComplaint = async ()=>{
        this.setState({loading:true});
        const pid = this.props.match.params.id;
        const snapshot = await db.ref('result').once('value');
        snapshot.forEach(childSnapshot => {
            childSnapshot.forEach(complaint => {
                const complaint_id = complaint.key;

                if (complaint_id === pid) {
                    console.log(complaint.val());

                    const pothole = {
                        complaint_id: complaint.key,
                        ...complaint.val()
                    }
                    this.setState({
                        complaint : pothole,
                        loading : false
                    });
                    
                }
            })
        })
    }
    render() {
        let complaint;
        if(this.state.loading === true || this.state.complaint === null){
            complaint = (  <div className="example">
                                <Spin />
                            </div>)
        }else{
            complaint = <ComplaintDetails details = {this.state.complaint} />
        }
        return (
        <div>
            {complaint}
        </div>
        )
    }
}

export default Complaint
