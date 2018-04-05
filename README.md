A basic example of using [`react-website`](https://github.com/catamphetamine/react-website).

## Development

```sh
npm install
npm start
```

Then go to http://localhost:1234.

## Production

See the `dist` directory for the output files. The output files can be uploaded to the cloud (e.g. Amazon S3) and hosted for a very low price as a "static" website by mapping any URL to `index.html`.

## Explanation

This sample project illustrates the use of [`react-website`](https://github.com/catamphetamine/react-website) library for building a React/Redux application.

[Parceljs](https://parceljs.org/) is used for bundling the app because it's much simpler for beginners than Webpack.

The "Home" page shows the "conventional" (old-fashioned) way of writing React/Redux applications.

The "Advanced" page shows the more convenient way of writing React/Redux applications.

The counters on both pages operate identically the only difference being that the counter on the "Home" page is implemented the "conventional" (old-fashioned) way and the counter on the "Advanced" page is implemented using the ["redux module"](https://github.com/catamphetamine/react-website#redux-module) utility from `react-website` library.

`react-website` packs a lot of utilities not showcased here for sake of simplicity, such as [`@preload()`ing pages](https://github.com/catamphetamine/react-website#preloading-pages), [making `http` requests](https://github.com/catamphetamine/react-website#http-utility), [setting `<meta/>` tags](https://github.com/catamphetamine/react-website#setting-title-and--tags), [programmatic navigation](https://github.com/catamphetamine/react-website#changing-current-location), and more.

## Windows

`npm start` [hangs on Windows](https://github.com/parcel-bundler/parcel/issues/1137) on `Building ...` when you try to run it. If you're persistent with `Ctrl + C` and running it again and again then it can suddenly start working after, say, 50 tries. It still can break and stop watching, etc. A workaround is to open `./node_modules/parcel-bundler/src/WorkerFarm.js` file and add a `maxConcurrentCallsPerWorker` option to it:

```js
class WorkerFarm extends Farm {
  constructor(options) {
    let opts = {
      maxConcurrentWorkers: getNumWorkers(),
      maxConcurrentCallsPerWorker: 5
    };
 ```

It might output a warning `Cannot statically evaluate fs argument` but it can be ignored.
