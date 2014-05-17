require.config({
      baseUrl: "app",
      urlArgs: 'cb=' + Math.random(),
      paths: {
        jquery: 'js/lib/jquery-2.1.1',
        underscore: 'js/lib/underscore',
        backbone: 'js/lib/backbone',
        "backbone-relational": 'js/lib/backbone-relational',
        mustache: 'js/lib/mustache',
        jasmine: '../test/lib/jasmine',
        'jasmine-html': '../test/lib/jasmine-html',
        'jasmine-jquery': '../test/lib/jasmine-jquery',
        'jasmine-fixture': '../test/lib/jasmine-fixture',
        boot: '../test/lib/boot',
        spec: '../test/spec/index',
        text: "js/lib/text"
      },
      shim: {
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
        },
        "backbone-relational": {
          deps: ['backbone'],
          exports: 'Backbone'
        }
        jquery: {
          exports: 'jquery'
        },
        'jasmine': {
          exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
          deps: ['jasmine'],
          exports: 'window.jasmineRequire'
        },
        'boot': {
          deps: ['jasmine', 'jasmine-html'],
          exports: 'window.jasmineRequire'
        },
        'jasmine-jquery': {
          deps: ['jasmine', 'jquery'],
          exports: 'window.jasmineRequire'
        },
        'jasmine-fixture': {
          deps: ['jasmine', 'jquery'],
          exports: 'window.jasmineRequire'
        }
      }
    });

    var specs = [
      '../test/spec/models/PhotoTest',
      '../test/spec/models/PhotoExhibitTest',
      '../test/spec/views/PhotoViewTest',
      '../test/spec/views/PhotoExhibitViewTest',
      '../test/spec/collections/PhotoCollectionTest'
    ];

    require(['boot'], function () {

      // Load the specs
      require(specs, function () {

        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
      });
});