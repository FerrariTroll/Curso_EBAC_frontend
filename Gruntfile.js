
module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "dist/main.css": "source/main.less"
        }
      }
    },
    uglify: {
      build: {
        files: {
          'dist/main.min.js': ['js/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
