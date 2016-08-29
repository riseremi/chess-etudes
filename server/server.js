import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import chessApp from '../common/reducers/index';
import webpackConfig from '../webpack.config';
import App from '../common/containers/App';

const app = new Express();
const port = 3000;

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Chess Etudes Universal App</title>
        <style>
          .palette {
            font-size: 32px;
            text-align: center;
            width: 512px;
            height: 64px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #bfbfbf;
            border-radius: 3px 3px 0 0;
          }
          .palette--bottom {
            border-radius: 0 0 3px 3px;
          }
          .board-container {
            margin: auto;
            width: 512px;
          }
          .square {
            background-color: #f0d9b5;
            width: 64px;
            height: 64px;
            font-size: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .square--black {
            background-color: #b58863;
          }
          .board-square {
            position: relative;
          }
        </style>
      </head>
      <body>
        <div id="app-mount">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

function handleRender(req, res) {
  const store = createStore(chessApp);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();
  res.send(renderFullPage(html, preloadedState));
}

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler,
  { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(handleRender);

/* eslint-disable no-console */
app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.
      Open up http://localhost:${port}/ in your browser.`);
  }
});
