
```dataviewjs
this.container.style.minHeight = "800px";
const { postValues } = this.app.plugins.plugins["metadata-menu"].api;
const { renderCalendar } = app.plugins.plugins["obsidian-full-calendar"];
let pages = dv.pages("#task and \"templates\"");

let e = pages.map(f => {
	return {
		backgroundColor: "#303030",
		borderColor: "#2f2f2f",
		allDay: false,
		start: DateTime.fromISO(f.start).toJSDate(),
		end: DateTime.fromISO(f.end).toJSDate(),
		id: f.file.path,
		title: f.file.name,
	};
})


let isMobile = window.innerWidth < 500;
let calendar = renderCalendar(this.container, [e], {
    weekNumbers: true,
    eventClick: async (info) => {
        let fileExists = await this.app.vault.adapter.exists(info.event.id);
        if (fileExists) {
            let file = this.app.vault.getAbstractFileByPath(info.event.id);
            if (info.jsEvent.getModifierState("Control")
                || info.jsEvent.getModifierState("Meta")) {
                let leaf = this.app.workspace.createLeafBySplit(this.app.workspace.getMostRecentLeaf(), "vertical");
                await leaf.openFile(file);
                calendar.render();
           } else {
                let leaf = this.app.workspace.getMostRecentLeaf();
                await leaf.openFile(file);
           }
       }
   },
   eventMouseEnter: (info) => {
        const path = info.event.id;
        this.app.workspace.trigger("hover-link", {
            event: info.jsEvent,
            source: "custom-cal",
            hoverParent: info.jsEvent.target,
            targetEl: info.jsEvent.target,
            linktext: path,
            sourcePath: path
        });
    },
    modifyEvent: async (info) => {
	    console.log(info.start)
	    let file = this.app.vault.getAbstractFileByPath(info.id);
	    await postValues(file, [
		    {name: "start", payload: {value: info.start.toISOString()}},
		    {name: "end", payload: {value: info.end.toISOString()}}
		]);
	    return true
    },
});
await calendar.render();
await calendar.render();
```
