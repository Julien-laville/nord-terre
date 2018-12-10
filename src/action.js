export const getParties = async () => {
  let partiesResponse = await fetch('/parties')
  let parties = await partiesResponse.json()
  return {type : 'GET_PARTIES', payload : parties}
}

export const upD = (to) => {
  return {type : 'UPDATE_DISPLAY', payload: to}
}
