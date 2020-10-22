module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
}
