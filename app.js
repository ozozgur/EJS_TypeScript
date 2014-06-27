/// <reference path="typings/ejs/ejs.d.ts" />
//// usage 1
//// sample data to populate the template from
//var my_supplies = { "supplies": ["mop", "broom", "duster"] };
//// populate page region from template
//var result = new EJS({ url: "templates/supplies.ejs" }).render(my_supplies);
//// add it to page when document is ready
//window.onload = () => { document.getElementById("content").innerHTML = result; };
// usage 2
////sample data to populate the template from
//var my_supplies = { "supplies": ["mop", "broom", "duster"] };
//window.onload = () => { new EJS({ url: "templates/supplies.ejs" }).update("content", my_supplies); };
//// usage 3
window.onload = function () {
    new EJS({ url: "templates/supplies.ejs" }).update("content", "data/supplies.json");
};
//# sourceMappingURL=app.js.map
