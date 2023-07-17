module.exports = async (tp, raw) => {
  const { position, ...frontmatter } =
    tp.frontmatter && Object.keys(tp.frontmatter).length > 0
      ? tp.frontmatter
      : tp;

  let output = "";
  const yaml = await import("https://unpkg.com/js-yaml?module");
  try {
    output += yaml.dump(frontmatter, {
      // quotingType: '"',
      // forceQuotes: true,
    });
    if (raw) {
      return output;
    } else {
      return ["---", output, "---"].join("\n");
    }
  } catch (e) {
    console.log(e);
  }
};
