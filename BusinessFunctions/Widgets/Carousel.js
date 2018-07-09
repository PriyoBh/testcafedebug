/* This class has all the business functions for Carousel widget */

import { selectorsCarousel } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Carousel {
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
    return selectorsCarousel.container
    .child("li")
    .nth(i-1)
    .withAttribute("original-url");
  }

  CheckHorizontalScrollBarExists() {
    return selectorsCarousel.scrollBar.exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "CarouselAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsCarousel.container
      .child("li")
      .nth(0)
      .withAttribute("original-url")
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
