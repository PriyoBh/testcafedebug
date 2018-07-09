/* This class has all the business functions for Slider widget */

import { selectorsSlider } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Slider {
  constructor() {}

  /*
  getTileImage = ClientFunction(
    i => {
      return widgetContainer
        .find(".tile-media-wrapper")
        .nth(i - 1)
        .withAttribute("style", /^background-image/).exists;
    },
    { dependencies: { widgetContainer } }
  );
*/

  getTileImage(i) {
    return selectorsSlider.container
      .find(".tile-media-wrapper")
      .nth(i - 1)
      .withAttribute("style", /^background-image/);
  }

  CheckBtnLoadVisible() {
    return selectorsSlider.btnNext.exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "Slider"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsSlider.container
      .find(".tile-media-wrapper")
      .nth(0)
      .withAttribute("style", /^background-image/)
      .with({
        visibilityCheck: true
      })();

      await t.expect(waitForElementLoad).notEql(null);
  }
}
