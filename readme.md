#Standalone Gulp.js Scss compiler
Made with care by Luke Zhang (@lukezhangstudio)

## The Goal
Create a portable version of scss compiler using gulp-scss and gulp.js. This would be embeddable within larger web projects where native support for scss is unstable or non-existent (such as .Net MVC).

## Get started
- Double click the 'continously_build_scss.bat' and you're good to go
- For server builds, run the "build_scss_once.bat"
- In visual studios, go to tools -> external tools -> add the 'continously_build_scss.bat'. Now it's accessible via menu items

## How this works
- This uses a standalone build of NodeJS, NPM (Node package manager), and GulpJS to run Node-sass
- The css framework lives in the ./framework folder by default

## Configuration
- gulpfile.js is where the the scss compile tasks live
- Simply edit the input/output target variable at the top of the file to configure which files to compile.
- I recommend compiling only one scss file and use @import to include whatever other file you require. If for some reason you need to pass in an array of files to compile, please see [this post on stackoverflow](http://stackoverflow.com/questions/21386940/why-does-gulp-src-not-like-being-passed-an-array-of-complete-paths-to-files)

## Common errors
- SourceMap is a great feature that allows chrome inspector to figure out which scss file it actually came from. However, it libsass requires unix-style filepaths in order for it to work. Run the debug_build_no_sourcemap.bat to see what is the underlying error and fix it.
- Windows filenames too long. A known problem with node-modules on Windows because filenames are only 255char long in cmd.exe. Make sure the styles folder is not deeply nested in folders. If you are encountering this error, I suggest you look carefully at how you've mapped TFS directories, because visual studios suffers from the same bug.

## Future improvements
- GulpJS is very flexible and it should be used. Extending this tool to have other tasks that adds minification, autoprefixer, scss lint, would be a very very good idea.

## This is possible because of:
- Gulp.js
- Gulp-sass
- Node.exe binary
- NPM standalone. (can only be found in the dist source on node. Use the standalone copy to avoid needing globally installing NPM.)

# Upgrading scss or adding new functionality
At the time of writing, NPM does not handle dependencies in a way that works well with Window's archaic 250char limit for filenames+filepath. Here are the instructions to updating gulp, adding gulp modules, or any other NodeJS based tool.

1. Delete the node_modules entirely.
2. Fetch the latest version of Standalone [npm](http://nodejs.org/dist/)
3. Unzip NPM into the folder. The contents should be a single node_modules directory with NPM inside, and NPM.cmd in the root folder.
4. Make sure you are not behind a firewall and install the Gulp, Gulp-sass, and whatever other modules you require. Eg. ```npm.cmd install --save-dev gulp``` 
5. Run NPM dedup to automatically flatten node_modules as much as possible. ```npm.cmd dedup```
6. Manually cut and paste all node_modules to the root node_modules directory. This is by far the most tedious and annoying part of the process. A trick is to search for node_modules from to root, and look at the number of highlighted sections in the search result paths. Flatten as much as possible.
  ```
  -- example
  Root
  - node_modules
  -- npm
  --- node_modules
  ----- lodash

  Copy and paste lodash so its at the top level node_module.
  Root
  - node_modules
  -- npm
  -- lodash

  ``` 
7. If you have done step 6 correctly, then you would be able to check in to TFS without causing a filename error on build.
8. Tips and tricks, add the gulp tasks to your NPM scripts inside package.json. see current implementation for [example](package.json)