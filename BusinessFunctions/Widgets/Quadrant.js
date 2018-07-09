/* This class has all the business functions for Slider widget */

import { selectorsQuadrant } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Quadrant {
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
  //gets the jth tile in ith quadrant
  getTileinQuadrant(i, j) {
    return selectorsQuadrant.container
      .find("div")
      .withAttribute("data-index", (i - 1).toString())
      .child("div")
      .nth(j)
      .with({ visibilityCheck: true });
  }

  CheckBtnLoadVisibleWithText(visibleText) {
    return selectorsQuadrant.btnLoadMoreQuadrant.withText(visibleText).exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "QuadrantAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsQuadrant.container
      .find("div")
      .withAttribute("data-index", "0")
      .with({
        visibilityCheck: true
      })();
    await t.expect(waitForElementLoad).notEql(null);
  }
}
