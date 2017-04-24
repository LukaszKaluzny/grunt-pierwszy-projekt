module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: "images/",
  				src: ["**/*.{png,jpg,gif}"],
  				dest: "images/build/"
  			}]
  		}
  	},
  	watch: {
      options: {
          cwd: "/",
          spawn: false
      },
            files: "*.sass",
            tasks: ["sass"]
        },
        sass: {
            dev: {
                files: {
                    "main.css": "main.sass"
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        "*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    watchOptions: { // na Google wyczytałem, że ta opcja również powinna pomóc...
                      ignored: ''
                    },
                    reloadDelay: 2000, //próbowałem też z tą opcją
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });
	
  // Load the plugins tasks 
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-browser-sync");
  // Default task(s).
  grunt.registerTask("default", ["browserSync", "watch", "sass", "imagemin"]);
};