# Gulp + Webpack Boilerplate

A build setup that uses Webpack to compile JS using Babel, and uses Gulp to minify images using imagemin, compile HTML from Pug and compile CSS from Sass.

## Getting Started

Simply run `yarn` from within the project directory to install the dependencies.

## Development

Webpack is run via Gulp, so there should be no need to run that directly.

To build in development mode, run `gulp build`.

To start a local server on port 3000 with livereload and watch enabled, run `gulp`.

## Production

To build in production mode, run `yarn run build:prod`.
