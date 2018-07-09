import { Selector, t } from "testcafe";

const widgetContainer = Selector(".container");

const selectorsSlider = {
  btnNext: Selector(".next-button i"),
  container: widgetContainer
};
const selectorsNightfall = {
  btnLoadMoreNightfall: Selector(".load-more-action"),
  container: widgetContainer
};
const selectorsQuadrant = {
  container: widgetContainer,
  btnLoadMoreQuadrant: Selector(".load-more--button")
};
const selectorsGrid = {
  container: widgetContainer,
  btnLoadMoreGrid: Selector(".load-more--button")
};

const selectorsMasonry = {
  container: widgetContainer,
  btnLoadMoreMasonry: Selector(".load-more--button")
};

const selectorsWaterfall = {
  container: Selector("#container"),
  btnLoadMoreWaterfall: Selector(".js-load-more")
};

const selectorsCarousel = {
  container: Selector("#container"),
  scrollBar: Selector("div[class*=scrollbar-x-rail]")
};

const selectorsBillboard = {
  container: Selector("#container"),
  navArrowRight: Selector(".nav-arrow [class*=arrow-right]"),
  navArrowLeft: Selector(".nav-arrow [class*=arrow-left]")
};

const selectorsFeed = {
  container: Selector(".container"),
  btnLoadMoreFeed: Selector(".js-load-more")
};

const selectorsSlideshow = {
  container: Selector("#container"),
  navArrowRight: Selector(".nav-arrow [class*=arrow-right]"),
  navArrowLeft: Selector(".nav-arrow [class*=arrow-left]")
};

const selectorsMap = {
  container: Selector("#map"),
  divMarker: Selector("#map .stackla-mapping-pin")
};

export {
  selectorsSlider,
  selectorsNightfall,
  selectorsQuadrant,
  selectorsGrid,
  selectorsMasonry,
  selectorsWaterfall,
  selectorsCarousel,
  selectorsBillboard,
  selectorsFeed,
  selectorsSlideshow,
  selectorsMap
};
