/* This class has all the business functions for Grid widget */

import { selectorsGrid } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Grid {
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
    return selectorsGrid.container
      .find(".tile--image")
      .nth(i - 1)
      .child(".tile-source");
  }

  CheckBtnLoadVisibleWithText(visibleText) {
    return selectorsGrid.btnLoadMoreGrid.withText(visibleText).exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "GridAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsGrid.container
      .find(".tile--image")
      .nth(0)
      .child(".tile-source")
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
