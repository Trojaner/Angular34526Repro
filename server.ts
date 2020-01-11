// These are important and needed before anything else
import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import compression from 'compression';
import express from 'express';
import { join } from 'path';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { AppServerModule } from './src/main.server';

export function getExpressApp() {
  const app = express();

  const DIST_FOLDER = join(process.cwd(), 'dist', 'browser');

  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  app.set('view engine', 'html');
  app.set('views', DIST_FOLDER);

  // Server static files from /browser
  app.get('*.*', express.static(DIST_FOLDER));

  // All regular routes use the Universal engine
  app.get('*', (req, res) => {
    res.render('index', { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  app.use(compression());
  return app;
}

// Start up the Node server
function run() {
  const PORT = process.env.PORT || 4000;

  console.log('Starting server...');
  const app = getExpressApp();
  app.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
  });
}

run();
export * from './src/main.server';
