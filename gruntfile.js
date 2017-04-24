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
            files: "sass/*.sass",
            tasks: ["sass"]
        },
        sass: {
            dev: {
                files: {
                    "css/main.css": "sass/main.sass"
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        "*css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
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
  grunt.registerTask("default", ["sass", "imagemin", "browserSync", "watch"]);
};