"use strict";
var router_1 = require('@angular/router');
var contactus_component_1 = require('./contactus/contactus.component');
var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'contacts', component: contactus_component_1.ContactusComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map