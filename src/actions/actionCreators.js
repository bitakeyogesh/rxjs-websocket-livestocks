import actions from "./actions";

export const doStartListeningToData = () => {
  return { type: actions.START_LISTENING };
};

export const doRecieveMessage = (message) => {
  return { type: actions.MESSAGE_RECEIVED, payload: message };
};

export const doUpdateSelectedStock = (stock) => {
  return { type: actions.SELECT_STOCK, payload: stock };
};

const actionCreators = {
  doStartListeningToData,
  doRecieveMessage,
  doUpdateSelectedStock,
};

export default actionCreators;
