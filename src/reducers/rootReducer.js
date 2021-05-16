import actions from "../actions/actions";

export const rootReducer = (state = { stockData: [] }, action) => {
  switch (action.type) {
    case actions.MESSAGE_RECEIVED:
      return { ...state, stockData: action.payload };
    case actions.SELECT_STOCK:
      return { ...state, selectedStock: action.payload };
    default:
      return state;
  }
};
