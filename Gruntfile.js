module.exports = function (grunt) {

  var configuration = {};

  // -----------------------------------------------------------------------------------------------
  // Plugin tasks

  /**
   * Transpile the AngularJS components using Babel
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

  // -----------------------------------------------------------------------------------------------
  // Registered tasks

  /**
   * Build the AngularJS components
   */
  grunt.registerTask('build', [
    'clean',
    'babel'
  ]);

  // -----------------------------------------------------------------------------------------------
  // Dependencies

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig(configuration);

};