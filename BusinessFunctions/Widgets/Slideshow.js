/* This class has all the business functions for Carousel widget */

import { selectorsSlideshow } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Slideshow {
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
    return selectorsSlideshow.container
      .find(".tile")
      .nth(i - 1)
      .child("a")
      .withAttribute("href");
  }

  CheckRightArrowVisible() {
    return selectorsSlideshow.navArrowRight.with({ visibilityCheck: true });
  }

  CheckLeftArrowVisible() {
    return selectorsSlideshow.navArrowLeft.with({ visibilityCheck: true });
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "SlideshowAutomation01"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsSlideshow.container
      .find(".tile")
      .nth(0)
      .child("a")
      .withAttribute("href")
      .with({
        visibilityCheck: true
      })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
