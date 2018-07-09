import Slider from "../../BusinessFunctions/Widgets/Slider";
import NightFall from "../../BusinessFunctions/Widgets/Nightfall";
import Quadrant from "../../BusinessFunctions/Widgets/Quadrant";
import Grid from "../../BusinessFunctions/Widgets/Grid";
import Masonry from "../../BusinessFunctions/Widgets/Masonry";
import Waterfall from "../../BusinessFunctions/Widgets/Waterfall";
import Carousel from "../../BusinessFunctions/Widgets/Carousel";
import BillBoard from "../../BusinessFunctions/Widgets/Billboard";
import Feed from "../../BusinessFunctions/Widgets/Feed";
import Slideshow from "../../BusinessFunctions/Widgets/Slideshow";
import Map from "../../BusinessFunctions/Widgets/Map";
const testcafe = require("testcafe");

fixture`Test all the widgets gets loaded successfully`
  .page`http://www.google.com`;

//initialise page function objects

const objSlider = new Slider();
const objNightFall = new NightFall();
const objQuadrant = new Quadrant();
const objGrid = new Grid();
const objMasonry = new Masonry();
const objWaterfall = new Waterfall();
const objCarousel = new Carousel();
const objBillBoard = new BillBoard();
const objFeed = new Feed();
const objSlideshow = new Slideshow();
const objMap = new Map();

//test slider widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Slider.html`(
  "Test whether a slider widget gets loaded",
  async t => {
    //check whether the page has been loaded

    await objSlider.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objSlider.getTileImage(2).exists;
    await t
      .expect(isVisibleSecondTile)
      .ok("Second tile is not present in the page");

    //check whether third tile is visible
    let isVisibleThirdTile = await objSlider.getTileImage(3).exists;
    await t
      .expect(isVisibleThirdTile)
      .ok("third tile is not present in the page");

    //check whether load more button is visible
    let isButtonVisible = await objSlider.CheckBtnLoadVisible();
    await t.expect(isButtonVisible).ok("load button not visible");
  }
);

//test nightfall widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Nightfall.html`(
  "Test whether a NightFall widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objNightFall.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objNightFall.getTileImage(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objNightFall.getTileImage(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objNightFall.CheckBtnLoadVisibleWithText(
      "LOAD MORE CONTENT"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test quadrant widget loads properly

test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Quadrant.html`(
  "Test whether a quadrant widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objQuadrant.waitForPageLoad();
    //check whether the first tile in first quadrant is visible
    let isFirstTileVisible = await objQuadrant.getTileinQuadrant(1, 1).exists;
    console.log(isFirstTileVisible);
    await t.expect(isFirstTileVisible).ok();

    //check whether the second tile in second quadrant is visible
    let isSecondTileVisible = await objQuadrant.getTileinQuadrant(2, 1).exists;
    await t.expect(isFirstTileVisible).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objQuadrant.CheckBtnLoadVisibleWithText(
      "Load more content"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test grid widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Grid.html`(
  "Test whether a grid widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objGrid.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objGrid.getTileImage(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objGrid.getTileImage(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objGrid.CheckBtnLoadVisibleWithText(
      "Load more content"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test masonry widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Masonry.html`(
  "Test whether a masonry widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objMasonry.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objMasonry.getTileImage(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objMasonry.getTileImage(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objMasonry.CheckBtnLoadVisibleWithText(
      "Load more content"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test waterfall widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Waterfall.html`(
  "Test whether a masonry widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objWaterfall.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objWaterfall.getTile(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objWaterfall.getTile(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objWaterfall.CheckBtnLoadVisibleWithText(
      "Load more content"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test carousel widget loads properly
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Carousel.html`(
  "Test whether a carousel widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objCarousel.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objCarousel.getTile(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objCarousel.getTile(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether horizontal scroll bar is visible
    let isScrollBarVisible = await objCarousel.CheckHorizontalScrollBarExists();
    await t.expect(isScrollBarVisible).ok();
  }
);

//test whether billboard gets loaded successfully
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Billboard.html`(
  "Test whether a billboard widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objBillBoard.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objBillBoard.getTile(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objBillBoard.getTile(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether right nav arrow is visible
    let rightNavArrow = await objBillBoard.CheckRightArrowVisible();
    await t.expect(rightNavArrow.exists).ok();

    //check whether left nav arrow is visible
    let leftNavArrow = objBillBoard.CheckLeftArrowVisible();
    await t.expect(leftNavArrow.exists).ok();
  }
);

//test whether feed gets loaded successfully
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Feed.html`(
  "Test whether a feed widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objFeed.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objFeed.getTile(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objFeed.getTile(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether load more content button is visible
    let isButtonVisible = await objFeed.CheckBtnLoadVisibleWithText(
      "LOAD MORE CONTENT"
    );
    await t.expect(isButtonVisible).ok();
  }
);

//test whether slideshow gets loaded successfully
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Slideshow.html`(
  "Test whether a slideshow widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objSlideshow.waitForPageLoad();

    //check whether second tile is visible
    let isVisibleSecondTile = await objSlideshow.getTile(2).exists;
    await t.expect(isVisibleSecondTile).ok();

    //check whether third tile is visible
    let isVisibleThirdTile = await objSlideshow.getTile(3).exists;
    await t.expect(isVisibleThirdTile).ok();

    //check whether right nav arrow is visible
    let rightNavArrow = await objSlideshow.CheckRightArrowVisible();
    await t.expect(rightNavArrow.exists).ok();

    //check whether left nav arrow is visible
    let leftNavArrow = await objSlideshow.CheckLeftArrowVisible();
    await t.expect(leftNavArrow.exists).ok();
  }
);

//test whether map widget gets loaded successfully
test.page`https://stackla-testing.s3.amazonaws.com/automation/prod/Map.html`(
  "Test whether a map widget gets loaded",
  async t => {
    //check whether the page has been loaded
    await objMap.waitForPageLoad();
    //tests whether the tracking pin exists
    let isPinVisible = await objMap.CheckIfMappingPinExists();
    await t.expect(isPinVisible).ok();
  }
);
