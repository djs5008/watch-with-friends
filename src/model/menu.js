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
      popup.classList.add('wwf-menu');
      popup.setAttribute('data-layer', '6');
      popup.appendChild(panel);
      return popup;
    };

    const createPanel = (menu) => {
      const popupPanel = document.createElement('div');
      popupPanel.classList.add('ytp-panel');
      popupPanel.classList.add('panel');
      popupPanel.appendChild(menu);
      return popupPanel;
    };

    const createMenu = (title, startButton) => {
      const popupMenu = document.createElement('div');
      popupMenu.classList.add('ytp-panel-menu');
      popupMenu.classList.add('inner');
      popupMenu.setAttribute('role', 'menu');
      popupMenu.appendChild(title);
      popupMenu.appendChild(startButton);
      return popupMenu;
    };

    const createTitle = () => {
      const popupTitle = document.createElement('div');
      popupTitle.classList.add('title');
      popupTitle.innerHTML = `<h2>Watch With Friends!</h2>`;
      return popupTitle;
    };

    const createStartButton = () => {
      const popupStartButton = document.createElement('div');
      popupStartButton.classList.add('ytp-menuitem');
      popupStartButton.classList.add('start-button');
      popupStartButton.setAttribute('aria-haspopup', 'true');
      popupStartButton.setAttribute('role', 'menuitem');
      popupStartButton.setAttribute('tabindex', '0');
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

    if (this.state.visible) {
      menu.classList.add('visible');
    } else {
      menu.classList.remove('visible');
    }
  }

};