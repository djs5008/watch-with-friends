import Manager from "./manager";
import Button from "../model/button";
import Menu from "../model/menu";
import Tooltip from "../model/tooltip";

export default class UIManager extends Manager {

  /**
   * Initialize the UIManager
   */
  init() {
    this.setState({
      button: new Button(),
      menu: new Menu(),
      tooltip: new Tooltip(),
    });
    this.setupTooltipHandlers();
    this.setupMenuHandlers();
  }

  /**
   * Get the HTML Element representing the Button
   * @returns {*|HTMLElement}
   */
  get button() {
    return this.state.button.element;
  }

  /**
   * Get the HTML Element representing the Menu
   * @returns {*|HTMLElement}
   */
  get menu() {
    return this.state.menu.element;
  }

  /**
   * Get the Tooltip
   * @returns {*|Tooltip}
   */
  get tooltip() {
    return this.state.tooltip;
  }

  /**
   * Setup event handlers for the Tooltip
   */
  setupTooltipHandlers() {
    this.button.onmouseenter = () => {
      this.tooltip.showTooltip();
    };

    this.button.onmouseleave = () => {
      this.tooltip.hideTooltip();
    };
  }

  /**
   * Setup event handlers for the Menu
   */
  setupMenuHandlers() {
    this.button.onclick = () => {
      this.state.menu.toggleMenu();
    }
  }

};