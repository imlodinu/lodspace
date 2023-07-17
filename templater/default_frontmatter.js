module.exports = async (tp) => {
  const title = await tp.user.name_prompt(tp);
  const note_timestamp = tp.user.get_note_time(tp);
  const dailyDir = await tp.user.get_day_folder(tp, true);

  const frontmatter_object = {
    "page-title": title,
    aliases: [title],
    date: moment(note_timestamp).format(),
    tags: [moment(note_timestamp).format("YYYY/MM/DD")],
  };
  const formatted_frontmatter =
    tp.user.formatted_frontmatter(frontmatter_object);
  return formatted_frontmatter;
};
