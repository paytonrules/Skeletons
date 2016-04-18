var browserSync = require('browser-sync');

browserSync({
  server: '.',
  files: ['*.html', 'config.js', 'app/*', 'app/**/*'],
  serveStatic: ['app']
});
