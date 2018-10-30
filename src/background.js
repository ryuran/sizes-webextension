const browser = require('webextension-polyfill');

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript(null, {code: `typeof window.imagesSizes !== 'undefined';`}).then((result) => {
    if (result[0] !== true) {
      browser.tabs.executeScript(null, {file: 'scripts/imagesSizes.js'});
      return;
    }

    browser.tabs.executeScript(null, {code: `window.imagesSizes.toggle();`});
  });
});
