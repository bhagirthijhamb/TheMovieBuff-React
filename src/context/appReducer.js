import { TOGGLE_BASKET } from './types';
const appReducer = (state, action) => {
  switch(action.type){
    case TOGGLE_BASKET:
      return { ...state, basketOpen: !state.basketOpen }
    default:
      return state;
  }
}

export default appReducer;