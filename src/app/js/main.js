require.config({
    baseUrl: "/js",
    paths: {
        jquery: "lib/jquery-2.1.1", 
        underscore: "lib/underscore", 
        backbone: "lib/backbone",
        jasmine: "lib/jasmine"
    }
});

require(["jquery", "backbone", "underscore"], function ($, Backbone, _) {
    console.log("hi");
    // Dependencies are loaded...
    // Execute code
});