module.exports = function(grunt) {

  // Configuração do Projeto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
        css: {
            options:{
                config: 'config.rb'
            }
        }
    },
    cssmin:{
        minificar: {
            files:{
                'assets/css/framework.min.css':'assets/css/framework.css'
            }
        }
    },
    watch: {
        dev: {
            files: ['src/sass/**/*'],
            tasks: ['compass', 'cssmin']
        }
    }

  });

  // Carrega as tarefas
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Define comandos para tarefas.
  grunt.registerTask('default', ['']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('build', ['compass', 'cssmin']);

};
