module.exports = function (grunt) {

  var configuration = {};

  // -----------------------------------------------------------------------------------------------
  // Plugin tasks

  /**
   * Transpile the AngularJS arithmetic component using Babel
   */
  configuration.babel = {
    options : {
      sourceMap : true,
      presets : ['es2015']
    },
    components : {
      files : {
        'build/angular-arithmetic.es5.js' : 'components/arithmetic/arithmetic.js'
      }
    }
  };

  /**
   * Clean the build directory
   */
  configuration.clean = ['build'];

  /**
   * Copy the Angular arithmetic component for external use
   */
  configuration.copy = {
    components : {
      files : {
        'build/angular-arithmetic.js' : 'components/arithmetic/arithmetic.js'
      }
    },
  };

  /**
   * Lint the ES6 components
   */
  configuration.eslint = {
    components : [
      'components/**/*.js'
    ]
  };

  /**
   * Run a karma instance to unit test the AngularJS components
   */
  configuration.karma = {
    components : {
      options : {
        preprocessors : {
          'components/**/*.js' : ['babel'],
        },
        files : [
          'node_modules/angular/angular.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'components/**/*.js'
        ],
        browsers : ['PhantomJS'],
        frameworks : ['jasmine'],
        singleRun : true,
        babelPreprocessor : {
          options : {
            presets : ['es2015']
          }
        }
      }
    }
  };

  /**
   * Watch for components changes
   */
  configuration.watch = {
    components : {
      files : 'components/**/*.js',
      tasks : 'test'
    }
  };

  // -----------------------------------------------------------------------------------------------
  // Registered tasks

  /**
   * Build the AngularJS arithmetic component for external use
   */
  grunt.registerTask('build', [
    'clean',
    'test',
    'babel',
    'copy'
  ]);

  /**
   * Test the AngularJS components
   */
  grunt.registerTask('test', [
    'eslint',
    'karma'
  ]);

  // -----------------------------------------------------------------------------------------------
  // Dependencies

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig(configuration);

};