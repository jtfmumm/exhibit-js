require.config({
    baseUrl: "/app",
    paths: {
        jquery: "libs/jquery-2.1.1.js", // Local
        underscore: "http://underscorejs.org/underscore-min.js", // Remote
        backbone: "https://github.com/documentcloud/backbone/blob/master/backbone-min.js" // Remote on github
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"] // Backbone depends on jquery and underscore
        }
    }
});

require(["jquery", "backbone", "underscore"], function ($, Backbone, _) {
    // Dependencies are loaded...
    // Execute code
});