/* This class has all the business functions for Carousel widget */

import { selectorsMap } from "../../PageObjects/ExternalWidget";
import iFramePageObjects from "../../PageObjects/Common/iFramePageObjects";
import { t, ClientFunction } from "testcafe";

export default class Map {
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
  CheckIfMappingPinExists() {
    return selectorsMap.divMarker.exists;
  }

  async waitForPageLoad() {
    const iframeWindowSelector = new iFramePageObjects().getIFrameByTitle(
      "Map"
    );
    await t.switchToIframe(iframeWindowSelector);

    const waitForElementLoad = await selectorsMap.container.with({
      visibilityCheck: true,
      timeout: 30000
    })();

    await t.expect(waitForElementLoad).notEql(null);
  }
}
