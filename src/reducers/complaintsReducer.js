import * as actionTypes from '../actions/actionTypes';

const initialState = {
    complaints_list : [],
    heading : 'Top 10 Tracks'
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_COMPLAINTS:
      return { 
        ...state,
        complaints_list : [...action.complaints_list]
      }

    default:
      return state
    }
}
