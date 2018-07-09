/* This class has all the business functions for Grid widget */

import { selectorsWaterfall } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Waterfall {
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
  getTile(i) {
    return selectorsWaterfall.container
      .find(".tile-avatar-wrapper")
      .nth(i - 1)
      .child("a")
      .withAttribute("class", "tile-avatar-link");
  }

  CheckBtnLoadVisibleWithText(visibleText) {
    return selectorsWaterfall.btnLoadMoreWaterfall.withText(visibleText).exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "WaterfallAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsWaterfall.container
      .find(".tile-avatar-wrapper")
      .nth(0)
      .child("a")
      .withAttribute("class", "tile-avatar-link")
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
