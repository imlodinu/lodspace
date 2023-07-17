#ztlit <%*
const title = await tp.system.prompt("Title");
await tp.file.move("_slipbox/" + title.replaceAll(" ", "_"));
%>
# notes
<%* tp.file.cursor(); %>