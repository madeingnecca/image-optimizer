var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
	var folder = grunt.option('folder');

	if (folder) {
		grunt.log.writeln('Folder: ' + folder);
	}
	else {
		grunt.log.writeln('Warning: no folder specified');
	}

	grunt.initConfig({
		clean: {
			dist: ['dist/' + (folder ? folder + '/' : '') + '*']
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'orig/' + (folder ? folder + '/' : ''),
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/' + (folder ? folder + '/' : '')
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['clean', 'imagemin']);
};
