import Stateful from "../appl/stateful";

export default class Tooltip extends Stateful {

  /**
   * Construct the Tooltip
   */
  constructor() {
    super();
  }

  showTooltip() {
    setTimeout(() => {
      const tooltip = document.getElementsByClassName('ytp-tooltip')[0];
      const tooltip_text = document.getElementsByClassName('ytp-tooltip-text')[0];
      const tooltip_bg = document.getElementsByClassName('ytp-tooltip-bg')[0];
      if (!tooltip || !tooltip_text || !tooltip_bg) return;
      tooltip_text.innerHTML = `Watch With Friends!`;
      tooltip.removeAttribute('aria-hidden');
      tooltip.classList.add('ytp-tooltip');
      tooltip.classList.add('ytp-bottom');
      tooltip.classList.remove('ytp-preview');
      tooltip.setAttribute('style', `max-width: 300px; top: calc(100% - 7.5rem); left: calc(100% - 28rem); display: inherit;`);
      tooltip_bg.setAttribute('style', `width: 158px; height: 90px; display: none;`);
    }, 100);
  }

  hideTooltip() {
    const tooltip = document.getElementsByClassName('ytp-tooltip')[0];
    const tooltip_text = document.getElementsByClassName('ytp-tooltip-text')[0];
    const tooltip_bg = document.getElementsByClassName('ytp-tooltip-bg')[0];

    if (!tooltip || !tooltip_text) return;
    tooltip.setAttribute('style', `max-width: 300px; top: 0px; left: 0px; display: none;`);
    tooltip_bg.setAttribute('style', `width: 158px; height: 90px; `);
  }

};