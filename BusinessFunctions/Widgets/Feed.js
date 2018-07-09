/* This class has all the business functions for Nightfall widget */

import { selectorsFeed } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Feed {
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
    return selectorsFeed.container
    .find(".tile")
    .nth(0)
    .withAttribute("id")
    .with({
      visibilityCheck: true
    })();
  }

  CheckBtnLoadVisibleWithText(visibleText) {
    return selectorsFeed.btnLoadMoreFeed.withText(visibleText).exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "FeedAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsFeed.container
      .find(".tile")
      .nth(0)
      .withAttribute("id")
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
