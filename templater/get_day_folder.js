module.exports = async function (tp, make = true) {
  const noteTimestamp = moment(tp.user.get_note_time(tp));
  const dailyDir =
    "/daily/" +
    moment(noteTimestamp).format("YYYY") +
    "/" +
    moment(noteTimestamp).format("YYYY-MM") +
    "/" +
    moment(noteTimestamp).format("YYYY-MM-DD") +
    "/";
  if (make) {
    try {
      await tp.app.vault.createFolder(dailyDir);
    } catch (e) {
      console.log(e);
    }
  }
  sleep(1);
  return dailyDir;
};
