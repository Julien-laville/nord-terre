export const getParties = async () => {
  let parties = await fetch('/parties')
  return {type : 'GET_PARTIES', payload : parties}
}
