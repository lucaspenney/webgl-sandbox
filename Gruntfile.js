module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['js/*.js'],
      tasks: [''],
      options: {
        livereload: true,
      },
    },
    concat: {
      app: {
        src: ['js/sandbox.js', 'js/*.js'], // source files mask
        dest: 'compiled.js', // destination folder
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};