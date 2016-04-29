# App

This is a bare-bones JSPM skeleton.

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
# Bundle for Production

You can use the `jspm bundle` command to bundle up a production distro. I haven't put that in an npm task because I don't have a default way of working yet.

# Debugging

Just works if you have sourcemaps enabled.
