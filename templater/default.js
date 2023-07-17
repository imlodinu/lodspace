module.exports = async (tp) => {
  const title = await tp.user.name_prompt(tp);
  const note_timestamp = tp.user.get_note_time(tp);
  const dailyDir = await tp.user.get_day_folder(tp, true);

  let lines = [];
  const frontmatter_object = {
    title: '"' + title + "'",
    aliases: ['"' + title + "'"],
    date: moment(note_timestamp).format(),
    tags: [moment(note_timestamp).format("YYYY/MM/DD")],
  };
  const formatted_frontmatter = await tp.user.mutate_frontmatter(
    tp,
    frontmatter_object
  );
  lines.push(formatted_frontmatter);
  lines.push(`# ${title}`);
  lines.push(tp.user.date_line(tp));
  lines.push("");
  lines.push("---");
  return lines.join("\n");
};
