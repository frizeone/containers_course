/**
 * Created by vasa on 02.10.13.
 * Edit by vitality on 11.11.16.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sco: {
            courseName: "<%= courseName %>",
            app: 'app',
            tmp: 'tmp',
            dist: 'dist',
            bower: 'bower_components'
        },
        /**
         * копирование
         */
        copy: {
            server: {
                files: [
                    {
                        cwd: '<%= sco.app %>/',
                        expand: true,
                        src: ['resource_*/**/*'],
                        dest: '<%= sco.dist %>/'
                    }, /**  папка с разделом */
                    {
                        cwd: '<%= sco.app %>/',
                        expand: true,
                        src: ['interface/**/*'],
                        dest: '<%= sco.dist %>/'
                    }, /**  папка с общими файлами */
                    {
                        cwd: '<%= sco.app %>/',
                        expand: true,
                        src: ['js-scorm/*'],
                        dest: '<%= sco.dist %>/'
                    }, /**  папка SCORM */
                    {
                        cwd: "<%= sco.bower %>/fontawesome/",
                        expand: true,
                        src: "fonts/*",
                        dest: "<%= sco.dist %>/"
                    }, /**  слив шрифта с bower_components */
                    {
                        cwd: "<%= sco.bower %>/bootstrap/dist/",
                        expand: true,
                        src: "fonts/*",
                        dest: "<%= sco.dist %>/"
                    }, /**  слив шрифта с bower_components */
                    {
                        cwd: "<%= sco.bower %>/fancybox/source/",
                        expand: true,
                        src: "fancybox_sprite.png",
                        dest: "<%= sco.dist %>/css"
                    }, /**  слив иконок с bower_components */
                    {
                        cwd: "<%= sco.bower %>/fancybox/source/",
                        expand: true,
                        src: "fancybox_overlay.png",
                        dest: "<%= sco.dist %>/css"
                    } /**  слив иконок с bower_components */
                ]
            }
        },
        /**
         * объединение
         */
        concat: {
            server: {
                files: {
                    '<%= sco.dist %>/js/deps.js': [
                        "<%= sco.bower %>/jquery/dist/jquery.min.js", /**  сборка js из bower_components */
                        /* "<%= sco.bower %>/bootstrap/dist/js/bootstrap.bundle.min.js", /**  сборка js bundle из bower_components */


                        "<%= sco.bower %>/bootstrap/dist/js/bootstrap.bundle.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/angular/angular.min.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/angular-route/angular-route.min.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/angular-sanitize/angular-sanitize.min.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/angular-cookies/angular-cookies.min.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/jquery-zoom/jquery.zoom.min.js", /**  сборка js из bower_components */
                        "<%= sco.bower %>/fancybox/source/jquery.fancybox.pack.js", /**  сборка js из bower_components */
                        "<%= sco.app %>/js/*.js", /**  контроллеры */
                        "<%= sco.app %>/js/controllers/**/*.js" /**  контроллеры */
                    ],
                    '<%= sco.dist %>/css/global.css': [
                        "bower_components/bootstrap/dist/css/bootstrap.css", /**  сборка css из bower_components */
                        "bower_components/fontawesome/css/font-awesome.min.css", /**  сборка css из bower_components */
                        "bower_components/animate-css/animate.min.css", /**  сборка css из bower_components */
                        "bower_components/fancybox/source/jquery.fancybox.css", /**  сборка css из bower_components */
                        "<%= sco.app %>/css/**/*.css" /**  сборка своего css */
                    ]
                }
            }
        },
        /**
         * очистка деплоя
         */
        clean: {
            server: {
                src: ['<%= sco.dist %>/**/*']
            }
        },
        /**
         * отслеживание изменений
         */
        watch: {
            server: {
                files: ['app/**/*'],
                tasks: ['build'],
                options: {
                    atBegin: true,
                    interrupt: true
                }
            }
        },
        /**
         * просмотр
         */
        connect: {
            server: {
                options: {
                    base: '<%= sco.dist %>',
                    directory: '<%= sco.dist %>',
                    port: 8000,
                    keepalive: true,
                    debug: true
                }
            }
        },
        /**
         * просмотр и отслеживание одновременно
         */
        concurrent: {
            server: ['connect:server', 'watch:server'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-concurrent');


    grunt.registerTask('build', ['clean', 'copy', 'concat']);

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });

}
;
