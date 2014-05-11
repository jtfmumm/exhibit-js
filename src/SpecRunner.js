require.config({
      baseUrl: "",
      urlArgs: 'cb=' + Math.random(),
      paths: {
        jquery: 'app/js/lib/jquery-2.1.1',
        underscore: 'app/js/lib/underscore',
        backbone: 'app/js/lib/backbone',
        mustache: 'app/js/lib/mustache',
        jasmine: 'test/lib/jasmine',
        'jasmine-html': 'test/lib/jasmine-html',
        boot: 'test/lib/boot',
        spec: 'test/spec/index'
      },
      shim: {
        backbone: {
          deps: ['underscore', 'jquery'],
          exports: 'Backbone'
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
        }
      }
    });

    var specs = [
      'test/spec/models/todo_spec'
    ];

    require(['boot'], function () {

      // Load the specs
      require(specs, function () {

        // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
        window.onload();
      });
});