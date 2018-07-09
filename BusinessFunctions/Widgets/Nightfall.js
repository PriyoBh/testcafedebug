/* This class has all the business functions for Nightfall widget */

import { selectorsNightfall } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Nightfall {
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
    return selectorsNightfall.container
      .find(".tile-image")
      .nth(i - 1)
      .withAttribute("style", /^height/);
  }

  CheckBtnLoadVisibleWithText(visibleText) {
    return selectorsNightfall.btnLoadMoreNightfall.withText(visibleText).exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "NightfallAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsNightfall.container
      .find(".tile-image")
      .nth(0)
      .withAttribute("style", /^height/)
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
