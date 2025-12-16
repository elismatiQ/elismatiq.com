const yaml = require("js-yaml");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Add YAML support for data files
  eleventyConfig.addDataExtension("yml, yaml", (contents) =>
    yaml.load(contents)
  );

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "public": "/" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Date filters
  eleventyConfig.addFilter("date", (dateObj, format = "LLLL d, yyyy", locale = "en") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale(locale).toFormat(format);
  });

  eleventyConfig.addFilter("dateFormat", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("en").toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("dateFormatFr", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).setLocale("fr").toFormat("d LLLL yyyy");
  });

  // Get locale string helper
  // Get locale string helper
  eleventyConfig.addFilter("t", function (key) {
    const lang = this.ctx?.lang || "en";
    const siteStrings = this.ctx?.locales?.site || {};
    if (siteStrings[key] && siteStrings[key][lang]) {
      return siteStrings[key][lang];
    }
    return key;
  });

  // Blog collections
  eleventyConfig.addCollection("blogEn", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/en/blog/**/*.md").reverse();
  });

  eleventyConfig.addCollection("blogFr", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/fr/blogue/**/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
