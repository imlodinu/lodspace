#ztlit <%*
const title = await tp.system.prompt("Title");
await tp.file.move("_inbox/" + title);
%>
# notes
<%* tp.file.cursor(); %>