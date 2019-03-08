import * as actionTypes from './actionTypes';
// import axios from 'axios';
import {firebase} from '../firebaseConfig';
// import firebase from 'firebase'
const db = firebase.database();

export const getComplaints = () => {
    return dispatch =>{
        // dispatch(setLoading());
        let complaints = []
        db.ref('result').once('value')
        .then(snapshot => {
            snapshot.forEach(childSnapshot => {
                childSnapshot.forEach((complaint) => {
                    // console.log(complaint)
                    complaints.push({

                        complaint_id: complaint.key,
                        ...complaint.val()
                    });
                    
                });
                return dispatch({
                    type : actionTypes.GET_COMPLAINTS,
                    complaints_list : complaints
                })

            });

        }).catch(e => {
            console.log("error in fetching results", e);
        });
    }
}
