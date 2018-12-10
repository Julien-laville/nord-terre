import {DISPLAY_PARTIES, CREATE_PARTY, JOIN_PARTY} from './home_component.jsx'

const initialState = {
  parties: [],
  partyId : -1,
  display : DISPLAY_PARTIES
};
const rootReducer = (state = initialState, action) => {
  if(action.type === 'GET_PARTIES') {
    let a =  {
      ...state,
      parties : action.payload
    }
    return a
  }


  if(action.type === JOIN_PARTY) {
    return {
      ...state,
      partyId : action.payload,
      display : JOIN_PARTY
    }
  }

  if(action.type === CREATE_PARTY) {
    return {
      ...state,
      display : CREATE_PARTY
    }
  }
  if(action.type === 'UP_D') {
    return {
      ...state,
      display : this.payload
    }
  }
  return state
};

export default rootReducer;