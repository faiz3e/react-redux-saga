export function mathReducer (state = {value:0}, action) {
    switch (action.type) {
    case 'CLICK_INC':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
    }
  }
