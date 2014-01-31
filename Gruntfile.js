module.exports = function(grunt) {

    grunt.initConfig({

        'http-server': {
            'dev': {
                // the server root directory
                root: '',

                port: 8282,
                host: "localhost",

                cache: 10,
                showDir : true,
                autoIndex: true,
                defaultExt: "html",

                //wait or not for the process to finish
                runInBackground: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-http-server');
};