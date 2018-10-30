browser.browserAction.onClicked.addListener(() => {
  browser.tabs.executeScript(null, {code: `typeof window.imagesSizes !== 'undefined';`}).then((result) => {
    if (result[0] !== true) {
      browser.tabs.executeScript(null, {file: "node_modules/@ryuran/parse-sizes/index.js"}).then(() => {
        browser.tabs.executeScript(null, {file: "index.js"});
      });
      return;
    }

    browser.tabs.executeScript(null, {code: `window.imagesSizes.toggle();`});
  });
});
