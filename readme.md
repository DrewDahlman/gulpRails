## Gulp + Rails
Enhancing the Rails Asset Pipeline using Gulp.

## Why
The Rails asset pipeline is a great way of delivering assets to your application, dealing with minifying and concatenation your JS and CSS, but it can be a process to use such neat tools such as browserfy, auto prefixer and such.

The project is intended to not replace the pipeline, but rather enhance it using a build system, in our case Gulp.

## How it works
The idea is pretty straight forward, you have a `frontend` that is going to be your `javascript`, `styles` & `images` for your application, these are piped into your `app/assets` directory upon save and made available for your application to use.

There is a manifests directory inside of javascript, this is where you can easily add scripts you want made available to your application such as vendor ( jQuery, underscore and so on )

