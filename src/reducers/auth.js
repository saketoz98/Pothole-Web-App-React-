import * as actionTypes from '../actions/actionTypes';
const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
    case actionTypes.LOGIN:
        return {
             uid : action.uid
        }
    case actionTypes.LOGOUT:
        return {  }
    default:
        return state
    }
}
