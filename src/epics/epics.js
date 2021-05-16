import SocketManager from "../utils/SocketManager";
import { switchMap, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { combineEpics } from "redux-observable";
import actions from "../actions/actions";
import actionCreators from "../actions/actionCreators";

export const listenToWebSocketEpic = (action$, store) => {
  return action$.pipe(
    ofType(actions.START_LISTENING),
    switchMap(() => SocketManager.getInstance().listenToSocket()),
    map((data) => JSON.parse(data.data)),
    map((data) => {
      return actionCreators.doRecieveMessage(data);
    })
  );
};

export const rootEpic = combineEpics(listenToWebSocketEpic);

export default rootEpic;
