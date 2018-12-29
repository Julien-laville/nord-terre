import {DISPLAY_PARTIES, CREATE_PARTY, JOIN_PARTY, PLAY_PARTY} from './home_component.jsx'

const initialState = {
  parties: [],
  display : DISPLAY_PARTIES,
  partyID : -1,
  playerID: -1
}

const rootReducer = (state = initialState, action) => {
  if(action.type === 'GET_PARTIES') {
    return  {
      ...state,
      parties : action.payload
    }
  }

  if(action.type === JOIN_PARTY) {
    return {
      ...state,
      display : JOIN_PARTY,
      partyID : action.payload
    }
  }

  if(action.type === CREATE_PARTY) {
    return {
      ...state,
      display: CREATE_PARTY,
      party : action.payload,
      partyID : action.payload.id,
      playerID: 0
    }
  }

  if(action.type === PLAY_PARTY) {
    return {
      ...state,
      party : action.payload,
      display : PLAY_PARTY
    }
  }
  return state
};

export default rootReducer;