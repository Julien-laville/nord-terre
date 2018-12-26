export const DRAW = 'draw'
export const KILL = 'kill'
export const GOLD_3 = 'g3'
export const GOLD_1 = 'g1'

export const REPLACE = 'replace'

const initTable = {
  current : -1,
  cold : 0,
  isVisible : false,
  deck : [],
  leftCard : null,
  rightCard: null
}


const TableReducer = (state = initTable, action) => {
  if(action.type === GOLD_1) {
    return {
      ...state,
      gold : state.gold += 1
    }
  }
  if(action.type === GOLD_3) {
    return {
      ...state,
      gold : state.gold += 3
    }
  }

  if(action.type === KILL) {
    return {
      ...state,

    }
  }

  return state
}


export default TableReducer