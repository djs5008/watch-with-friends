import Stateful from "../appl/stateful";

export default class Menu extends Stateful {

  /**
   * Construct the Button
   */
  constructor() {
    super();
    this.setState({
      element: this.loadElement(),
      visible: false,
    });
  }

  // TODO
  startSession() {
    alert('test');
  }

  /**
   * Get the HTML Element representing the Menu
   * @returns {*|HTMLElement}
   */
  get element() {
    return this.state.element;
  }

  /**
   * Load the HTML Element representing the Menu
   * @returns {HTMLDivElement}
   */
  loadElement() {
    const createPopup = (panel) => {
      const popup = document.createElement('div');
      popup.classList.add('ytp-popup');
      popup.setAttribute('data-layer', '6');
      popup.setAttribute('style', `opacity: 0;`);
      popup.appendChild(panel);
      return popup;
    };

    const createPanel = (menu) => {
      const popupPanel = document.createElement('div');
      popupPanel.classList.add('ytp-panel');
      popupPanel.setAttribute('style', `width: 90%; height: 90%; position: relative;`);
      popupPanel.appendChild(menu);
      return popupPanel;
    };

    const createMenu = (title, startButton) => {
      const popupMenu = document.createElement('div');
      popupMenu.classList.add('ytp-panel-menu');
      popupMenu.setAttribute('role', 'menu');
      popupMenu.setAttribute('style', 'height: 90%;');
      popupMenu.appendChild(title);
      popupMenu.appendChild(startButton);
      return popupMenu;
    };

    const createTitle = () => {
      const popupTitle = document.createElement('div');
      popupTitle.setAttribute('style', `text-align: center; position: absolute; width: 100%;`);
      popupTitle.innerHTML = `<h2>Watch With Friends!</h2>`;
      return popupTitle;
    };

    const createStartButton = () => {
      const popupStartButton = document.createElement('div');
      popupStartButton.classList.add('ytp-menuitem');
      popupStartButton.setAttribute('aria-haspopup', 'true');
      popupStartButton.setAttribute('role', 'menuitem');
      popupStartButton.setAttribute('tabindex', '0');
      popupStartButton.setAttribute('style', `display: inherit; position: relative; margin: 25% auto auto;`);
      popupStartButton.onclick = this.startSession;
      popupStartButton.innerHTML = `<div class="ytp-menuitem-content">Start Session</div>`;
      return popupStartButton;
    };

    const player = document.getElementById('movie_player');
    const popup =
      createPopup(
        createPanel(
          createMenu(
            createTitle(),
            createStartButton()
          )
        )
      );
    player.appendChild(popup);

    return popup;
  }

  /**
   * Determine whether to show / hide the menu
   *  Renders the menu after state modification
   */
  toggleMenu() {
    if (this.state.visible) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
    this.renderMenu();
  }

  /**
   * Toggle the Menu On
   */
  showMenu() {
    this.setState({
      visible: true,
    });
  }

  /**
   * Toggle the Menu Off
   */
  hideMenu() {
    this.setState({
      visible: false,
    });
  }

  /**
   * Render the Menu
   *  (Called from toggleMenu())
   */
  renderMenu() {
    const menu = this.state.element;

    let opacity = 0;
    let pointerEvents = 'none';

    if (this.state.visible) {
      opacity = 1;
      pointerEvents = 'unset';
    }

    const style =
      `
        display: flex; 
        justify-content: center; 
        align-items: center; 
        width: 100%; 
        height: 100%; 
        z-index: 50;
        pointer-events: ${pointerEvents};
        position: relative;
        opacity: ${opacity};
        transition: opacity 0.2s linear;
      `;
    menu.setAttribute('style', style);
  }

};