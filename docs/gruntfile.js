module.exports = function(grunt) {
	var pkg = grunt.file.readJSON('package.json');

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: pkg,
		bgShell: {
			_defaults: {
				bg: true
			},
			startClient: {
				cmd: 'xdg-open http://localhost:4000'
			}
		},
		watch: {
			game: {
				files: ['src/app.js', 'src/**/*.*', 'dist/index.html'],
				tasks: ['less:bundle', 'autoprefixer:dist', 'browserify:bundle', 'express:dev'],
				options: {
					livereload: 4001
				}
			}
		},
		browserify: {
			bundle: {
				files: {
					'dist/bundle.js': ['src/frontend/app.js']
				}
			}
		},
		preprocess: {
			options: {
				context: {
					DEBUG: false
				}			
			},
			index: {
				src: 'src/frontend/index.html',
				dest: 'dist/index.html'
			},
			livereload: {
				src: 'src/frontend/index.html',
				dest: 'dist/index.html',
				options: {
					context: {
						DEBUG: true
					}
				}
			}
		},
		express: {
			dev: {
				options: {
					script: 'src/app.js'
				}
			}
		},
		less: {
			bundle: {
				files: {
					'temp/style.css': ['src/frontend/**/*.less']
				}
			}
		},
		autoprefixer: {
			dist: {
				files: {
					'dist/style.css': 'temp/style.css'
				}
			}
		}
	});

	grunt.registerTask('default' , '', function(numberClients) {
		numberClients = numberClients || 1;

		for (var i = 0; i < numberClients; ++i) {
			grunt.task.run('bgShell:startClient');
		}
		grunt.task.run('serve');
	});

	grunt.registerTask('serve', 'test', function() {
		grunt.task.run('preprocess:index', 'less:bundle', 'autoprefixer:dist', 'browserify:bundle', 'express:dev', 'watch:game');
	});

	grunt.registerTask('debug', 'test', function() {
		grunt.task.run('preprocess:livereload', 'less:bundle', 'autoprefixer:dist', 'browserify:bundle', 'express:dev', 'watch:game');
	});
};