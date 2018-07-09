const gulp = require("gulp");
const testcafe = require("gulp-testcafe");
const fs = require("fs");
const argv = require("yargs")
  .alias("e", "env")
  .default("env","qa")
  .alias("b", "browser")
  .default("browser", "chrome")
  .alias("hc", "headless")
  .default("headless", true)
  .alias("bp", "browserpath").argv;

// This function will always make sure that the boolean variable is returned correctly
// irrespective of how the command line arguments handle it
function toBoolean(boolVal) {
  switch (boolVal) {
    case true:
    case "true":
    case "yes":
    case "1":
    case 1:
      return true;
    case false:
    case "false":
    case "no":
    case "0":
    case 0:
    case null:
      return false;
  }
}

let browser = argv.browser;

//if headless, add headless option
if (toBoolean(argv.headless)) {
  browser = argv.browser + ":headless";
}
// if path to browser binary is provided
if (argv.browserpath !== undefined) {
  // check that the headless option is also defined
  if (toBoolean(argv.headless)) {
    browser = argv.browser + ":" + argv.browserpath + ":headless";
  } else {
    browser = argv.browser + ":" + argv.browserpath;
  }
}

//create the reports folder if it does not exist
const dir = "./reports";
fs.mkdir(dir, err => {
  if (err && err.code != "EEXIST") throw "up";
});

//generate a timestamp to append to results file
const date = new Date();
const timestamp = [
  date.getDate(),
  date.getMonth(),
  date.getYear(),
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
  date.getMilliseconds()
].join("_");



gulp.task("runWidgetSanityTestsProd", () => {
  return gulp.src("specs/widgets/checkWidgetsLoading.js").pipe(
    testcafe({
      browsers: [browser],
      reporter: {
        name: "xunit",
        outStream: fs.createWriteStream("reports/report_" + timestamp + ".xml")
      }
    })
  );
});
