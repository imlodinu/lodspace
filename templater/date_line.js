const pre = "Daily";
function separated_date(date_string) {
	let lines = {
		// day: ["[", moment(date_string).format("DD"), "](", "/", moment(date_string).format("YYYY/YYYY-MM/YYYY-MM-DD"), ".md", ")"].join(""),
		day: ["[", moment(date_string).format("DD"), "](", "/", pre, "/", moment(date_string).format("YYYY/YYYY-MM/YYYY-MM-DD/YYYY-MM-DD"), ".md", ")"].join(""),
		month: ["[", moment(date_string).format("MM"), "](", "/", pre, "/", moment(date_string).format("YYYY/YYYY-MM/YYYY-MM"), ".md", ")"].join(""),
		year: ["[", moment(date_string).format("YYYY"), "](", "/", pre, "/", moment(date_string).format("YYYY/YYYY"), ".md", ")"].join(""),
	};
	return [
		lines.year,
		lines.month,
		lines.day,
	].join("/");
}

module.exports = (tp, full) => {
	let note_timestamp = tp.user.get_note_time(tp);

	let dayBefore = moment(note_timestamp).subtract(1, "days");
	let dayAfter = moment(note_timestamp).add(1, "days");

	// << `[ <% moment(dayBefore).format("YYYY/MM/DD") %> ]( <% moment(dayBefore).format("YYYY/YYYY-MM/YYYY-MM-DD") %> )` | [<% note_timestamp.format("YYYY/MM/DD") %>](<% note_timestamp.format("YYYY/YYYY-MM/YYYY-MM-DD") %>) | [ <% moment(dayAfter).format("YYYY/MM/DD") %> ]( <% moment(dayAfter).format("YYYY/YYYY-MM/YYYY-MM-DD") %> ) >>
	let line = [
		["[", moment(note_timestamp).format("YYYY/MM/DD"), "](", "/", pre, "/", moment(note_timestamp).format("YYYY/YYYY-MM/YYYY-MM-DD/YYYY-MM-DD"), ".md", ")"].join(""),
	];
	if (moment(tp.file.title).isValid()) {
		full = true;
	}
	if (full) {
		line = [].concat(
			"<<",
			// ["[", moment(dayBefore).format("YYYY/MM/DD"), "](", moment(dayBefore).format("YYYY/YYYY-MM/YYYY-MM-DD"), ")"].join(""),
			separated_date(dayBefore),
			dayBefore.link,
			"|",
			// line,
			separated_date(note_timestamp),
			"|",
			separated_date(dayAfter),
			// ["[", moment(dayAfter).format("YYYY/MM/DD"), "](", moment(dayAfter).format("YYYY/YYYY-MM/YYYY-MM-DD"), ")"].join(""),
			">>"
		);
	}
	return line.join(" ");
};