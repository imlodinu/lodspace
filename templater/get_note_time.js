module.exports = (tp, format) => {
  // console.log("tp.frontmatter.created:", tp.frontmatter.created);
  // console.log("tp.frontmatter.date:", tp.frontmatter.date);
  // console.log("tp.user.get_datetime_from_object(tp.frontmatter):", tp.user.get_datetime_from_object(tp.frontmatter));
  // console.log("tp.file.creation_date():", tp.file.creation_date());
  // console.log("tp.date.now():", tp.date.now());

  let noteTimestamp =
    (moment(tp.file.title).isValid() ? tp.file.title : false) ||
    tp.frontmatter.created ||
    tp.frontmatter.date ||
    tp.user.get_datetime_from_object(tp.frontmatter) ||
    tp.file.creation_date() ||
    tp.date.now();

  console.log(noteTimestamp);
  noteTimestamp = moment(Date.parse(noteTimestamp));
  if (format) {
    return noteTimestamp.format(format);
  } else {
    return noteTimestamp;
  }
};
