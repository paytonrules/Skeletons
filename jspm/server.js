var browserSync = require('browser-sync').create();

browserSync.init({
  server: true,
  files: ['*.html', 'config.js', 'app/*', 'app/**/*'],
  online: false
});
