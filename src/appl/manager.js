import Stateful from "./stateful";

export default class Manager extends Stateful {

  /**
   * Construct a Stateful application-tier Manager
   * @param params Provided parameters to be assigned to class context
   */
  constructor(params) {
    super();
    Object.assign(this, params);
    this.init(params);
  }

  /**
   * Inherited initialization function
   *  Initialization is referenced from the constructor
   */
  init() {
    throw new Error('init() not implemented!');
  }

};