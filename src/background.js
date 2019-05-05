import ClientManager from './appl/client-manager';

chrome.runtime.onInstalled.addListener(() => {
  new ClientManager();
});