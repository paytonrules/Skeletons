# Requirements

The requirements of this are JSPM and Node. Node because it's the only way to run any JavaScript CLI tools, and JSPM because that's the preferred package manager.

To install Node: `brew install node`.

To install JSPM: `npm install jspm -g`

To Install PhantomJS: Go to their website. They change their mind a lot.

# Running the App

```
npm start
```

# Running Tests

```
npm test
```

To run them with auto-reloading:

```
npm run testem
```

# Travis CI setup

- Should work out of the box

# Bundle for Production

```
jspm bundle
```

You might want to run a bundler that runs tests on bundle, a debugger for bundle, and a dist directory. Don't care yet.

# Debugging

Just works if you have sourcemaps enabled.
