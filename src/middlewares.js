export const getPartiesMiddle = async (dispatch) => {
  let parties = []
  try {
    let rawParties = await fetch('http://localhost:8001/parties', {mode : 'cors'})
    parties = await rawParties.json()
  } catch (e) {
    console.error(e)
  }

  dispatch({type : 'GET_PARTIES', payload : parties})
}

export const getPartyInfo = (dispatch) => {

}



export const createParty = async (dispatch) => {
  let rawResponse = await fetch('http://localhost:8001/new', {mode : 'cors', method : 'post'})
  let response = await rawResponse.json()

  dispatch({type : 'CREATE_PARTY', payload: response})
}