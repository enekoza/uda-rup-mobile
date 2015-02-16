module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist", '.tmp'],
                
        html2js: {
            options:{
                base: './',
                module: 'rup.templates'
            },
            dist: {
                src: [ 'rup/**/*.html'],
                dest: 'dist/tmp/js/templates.js'
            }
        },
        copy:{
            main:{ 
                files:[
                    {expand: true, src: 'rup/**/*.js', dest: 'dist/tmp/js/', flatten: true}
                ]
            }
        },
        concat: {
            // 2. Configuration for concatinating files goes here.
            
            dist: {
                src: [
                    'dist/tmp/**/*.js'
                ],
                dest: 'dist/rup.js',
            }
        },
        uglify: {
            build: {
                src: 'dist/rup.js',
                dest: 'dist/rup.min.js'
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-wiredep');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean','copy','html2js','concat','uglify']);

}; 
