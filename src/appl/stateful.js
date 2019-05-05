export default class Stateful {

  constructor() {
    this.state = {};
  }

  /**
   * Set the state of the Stateful Object
   * @param state Provide an updated state to be reduced into current state
   */
  setState(state) {
    this.state = {
      ...this.state,
      ...state
    };
  }

};