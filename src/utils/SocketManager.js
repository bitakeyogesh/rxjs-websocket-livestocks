import Config from "./Config";
import { Observable } from "rxjs";

export default class SocketManager {
  constructor() {
    this.connect();
  }
  static getInstance() {
    if (!SocketManager.instance) {
      SocketManager.instance = new SocketManager();
    }
    return SocketManager.instance;
  }

  connect() {
    this.socket = new WebSocket(Config.socketDomain);
    this.socket.onopen = () => {
      console.log("connected");
    };
    this.socket.onclose = () => {
      console.log("disconnected");
      this.socket = null;
      setTimeout(() => this.connect(), Config.retryTimeout);
    };
  }

  disconnect() {
    this.socket && this.socket.close();
  }

  listenToSocket() {
    return new Observable((observer) => {
      if (this.socket) {
        this.socket.onmessage = (data) => observer.next(data);
      }
    });
  }
}
