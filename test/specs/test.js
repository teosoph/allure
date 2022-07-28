const assert = require("assert");

describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    await browser.url("https://webdriver.io");
    const title = browser.getTitle();

    browser.pause(5000)
    console.log(
      "-----------------------------=====================",
      await title
    );
    assert.strictEqual(
      await title,
      "WebdriverIOO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
    );
  });
});
