import { Selector, t } from "testcafe";

export default class iFramePageObjects {
  constructor() {}

  // returns the iframe element by title
  getIFrameByTitle(title) {
    return Selector("iframe").withAttribute("title", title);
  }
}
