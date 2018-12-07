const initialState = {
  parties: [],

};
const rootReducer = (state = initialState, action) => {
  if(action.type === 'GET_PARTIES')
    return {parties : action.payload}

  return state
};
export default rootReducer;