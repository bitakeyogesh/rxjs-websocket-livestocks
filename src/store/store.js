import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "../epics/epics";

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
};
