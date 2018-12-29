const API_URL = 'http://localhost:8001'
import {CREATE_PARTY} from './home_component.jsx'

export const getPartiesMiddle = async (dispatch) => {
  let parties = []
  try {
    let rawParties = await fetch(`${API_URL}/parties`, {mode : 'cors'})
    parties = await rawParties.json()
  } catch (e) {
    console.error(e)
  }

  dispatch({type : 'GET_PARTIES', payload : parties})
}

export const joinParty = async (id) => {
  let partyResponse = await fetch(`${API_URL}/join/${id}`)
  return await partyResponse.json()
}



export const getPartyInfo = async (id) => {
  let partyResponse = await fetch(`${API_URL}/party/${id}`)
  return await partyResponse.json()
}


export const createParty = async (dispatch) => {
  let rawResponse = await fetch('http://localhost:8001/new', {mode : 'cors', method : 'post'})
  let response = await rawResponse.json()

  dispatch({type : CREATE_PARTY, payload: response})
}