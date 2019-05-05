import Manager from "./manager";
import uuid from 'uuid';

export default class ClientManager extends Manager {

  /**
   * Initialize the ClientManager
   */
  init() {
    this.setupUserID();
  }

  /**
   * Setup the initial userID
   *  UserID is used for network communications
   */
  setupUserID() {
    this.setState({
      userID: uuid(),
    });

    chrome.storage.sync.set(this.state, () => {
      console.info('Installed WatchWithFriends v0.0.1 Successfully!');
      console.info(`User ID: ${this.state.userID}`);
    });
  }

};