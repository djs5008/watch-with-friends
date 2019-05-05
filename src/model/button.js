import Stateful from "../appl/stateful";

export default class Button extends Stateful {

  /**
   * Construct the Button
   */
  constructor() {
    super();
    this.setState({
      element: Button.loadElement(),
    });
    this.injectElement();
  }

  /**
   * Get the HTML Element representing the Button
   * @returns {*|HTMLElement}
   */
  get element() {
    return this.state.element;
  }

  /**
   * Load the Button's State's `element`
   * @returns {HTMLButtonElement}
   */
  static loadElement() {
    const button = document.createElement('button');
    button.classList.add('ytp-button');
    button.setAttribute('id', 'watch-width-friends');
    button.setAttribute('aria-haspopup', 'true');
    button.setAttribute('aria-label', 'Watch With Friends!');
    button.setAttribute('style', `position: relative;`);
    const followers = chrome.runtime.getURL('/img/followers.svg');
    button.innerHTML =
      `<div style="width: 60%; height: 60%; margin: auto; background: no-repeat url(${followers}) 50%;" />`;
    return button;
  }

  /**
   * Inject the Button into the page
   */
  injectElement() {
    const button = this.state.element;
    const controlPanel = document.getElementsByClassName('ytp-right-controls')[0];
    controlPanel.insertBefore(button, controlPanel.children[0]);
  }

};