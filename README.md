# gulp-build
Treehouse Javascript Tech Degree Project Eight- Using Gulp to Build a Front End Website
In this project you’ll be provided a website with HTML, SCSS, JPEGs, PNGs and JavaScript files. You’ll be required to set up a Gulp build process to prepare the website for deployment.

The build process must fulfill the following criteria:

Concatenate and minify the JavaScript files
Compile SCSS into CSS in a concatenated and minified file
Generate JavaScript and CSS source maps
Compress any JPEG or PNG files
All output for the build process should be in a dist folder for distribution or deployment.

Run NPM INSTALL command to install all of the dependencies for the build process.

Run GULP SCRIPTS command at the command line to concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder.

Run GULP STYLES command at the command line to compile the project’s SCSS files into CSS, then concatenate and minify into an all.min.css file that is then copied to the dist/styles folder.

Run GULP IMAGES command at the command line to optimize the size of the project’s JPEG and PNG files, and then copy those optimized images to the dist/content folder.

Run GULP CLEAN command at the command line to delete all of the files and folders in the dist folder.

Run GULP BUILD command at the command line to run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.

Run GULP command at the command line to run the build task and serve my project using a local web server.  It will conntinuously watch for changes to any .scss file in my project. When there is a change to one of the .scss files, the gulp styles command is run and the files are compiled, concatenated, and minified to the dist folder. My project should then reload in the browser, displaying the changes.
