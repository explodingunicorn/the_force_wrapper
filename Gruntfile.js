module.exports = function(grunt) {

  grunt.initConfig({
    run: {
      node: {
        options: {
          wait: true
        },
        cmd: "node",
        args: [
          'src/main.js',
          '-n'
        ]
      },
      electron: {
        options: {
          wait: true
        },
        cmd: "electron",
        args: [
          'src/main.js',
          '-e'
        ]
      }
    },


    processhtml: {
      electron: {
        options: {
          process: true
        },
        files: {
          './src/index.html': ['./src/dist/index.html']
        },
      },
      node: {
        options: {
          process: true
        },
        files: {
          './src/index.html': ['./src/dist/index.html']
        }
      },
    },

  });

  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('node', ['processhtml:node', 'run:node']);
  grunt.registerTask('electron', ['processhtml:electron', 'run:electron']);
};
