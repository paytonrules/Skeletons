# The Skeletons App

For creating skeletons of apps. It's just a bash script (create-app) and project template(s). Each directory has a project template in it and currently this app can create:

* JSPM - a JSPM single page app with browser-sync and Jasmine.

The requirements are bash, sed and awk. Individual templates may have their own requirements, but they'll tell you when you run them. To setup a new project run:

```bash
create-app [template-name] [destination-directory]
```

So for example:

```bash
create-app jspm ~/Projects/my-new-js-app-that-will-takeover-the-world
```

This will create a new jspm app in the target directory with it's dependencies and setup.

# Motiviation

If you work in C# or XCode you are probably used to a File->New Project that sets up a project for you. Clojure has `lein new project-name`. JavaScript requires external tools to do this, and virtually all of them require an enormous amount of magic.

I've been telling people to use JSPM for their JavaScript projects for a year now, and invariably the get hung up during setup and start looking at something more heavyweight like Webpack. I'm not a fan of these heavyweight solutions, so I came up with this for something much more simple. The `jspm` setup uses the bare minimum to get you started. No Angular/React/Karma/Gulp/etc. You can of course add those things but you don't have to.

It occured to me that I can use this for other problematic setups, such as Java and C++ apps that don't use wizards, or non-Rails Ruby apps. You can expect to see more of that in the future.

# Contributing

I am not a particularly good bash programmer so PRs are more than welcome. If you have a setup you find yourself using over and over again, create a new template directory at the same level as `jspm` and include a setup.sh in it. You can use the existing ones as a model.
