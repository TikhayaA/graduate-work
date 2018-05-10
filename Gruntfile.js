module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

        //Less to css
      less: {
          development: {
              options: {
                  paths: ['src/styles'],
                  compress: false,
                  yuicompress: true,
                  optimization: 2
              },
              files: {
                  'dist/css/style.css': 'src/styles/style.less'
              }
          }
      },
      watch: {
        styles: {
           files: ['src/styles/**/*.less'], // which files to watch
           tasks: ['less'],
           options: {
              nospawn: true
           }
        }
     }

  });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
    //Register Tasks
    grunt.registerTask('default', ['less', 'watch']);
};
