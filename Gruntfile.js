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

  // -----------------------------------------------------------------------------------------------
  // Registered tasks

  /**
   * Build the AngularJS arithmetic component for external use
   */
  grunt.registerTask('build', [
    'clean',
    'babel',
    'copy'
  ]);

  // -----------------------------------------------------------------------------------------------
  // Dependencies

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig(configuration);

};