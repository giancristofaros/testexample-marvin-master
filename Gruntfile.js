module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({
        clean: {
            all: {
                src: ["./results", "./node_modules/marvin-js"]
            }
        },
        copy: {
          marvin: {
            expand: true, 
            cwd: '../marvin/',
            src: ['package.json', 'bin/marvin.js', 'lib/**/*.*', 'node_modules/**/*.*'],
            dest: './node_modules/marvin-js/'
          }
        },
        shell: {
            test: { command: 'sudo npm test' },
            testWindows: { command: 'npm test' }
        }
    });

    grunt.registerTask('default', ['clean:all', 'copy:marvin', 'shell:testWindows']);

};