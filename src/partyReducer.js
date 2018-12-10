const initS = {
  status : '',
  players : []
}

const partyReducer = (state = initS, action) => {
  if(action.type === 'UPDATE_PARTY') {
    return action.payload
  }
  return state


}

export default partyReducer