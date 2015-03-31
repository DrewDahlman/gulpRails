## Gulp + Rails
Enhancing the Rails Asset Pipeline using Gulp.

## Why
The Rails asset pipeline is a great way of delivering assets to your application, dealing with minifying and concatenation your JS and CSS, but it can be a process to use such neat tools such as browserfy, auto prefixer and such.

The project is intended to not replace the pipeline, but rather enhance it using a build system, in our case Gulp.

## How it works
The idea is pretty straight forward, you have a `frontend` that is going to be your `javascript`, `styles` & `images` for your application, these are piped into your `app/assets` directory upon save and made available for your application to use.

There is a manifests directory inside of javascript, this is where you can easily add scripts you want made available to your application such as vendor ( jQuery, underscore and so on )

It will look something like this:
<pre>
//= require ./vendor/modernizr/modernizr.js

//= require ./vendor/jquery/dist/jquery.js
//= require ./vendor/underscore/underscore.js
//= require ./vendor/jquery-easing/jquery.easing.js

//= require ./app.js
//= require ./templates.js
</pre>

What is happening above is that we are including our scripts similar to writing out 

<pre>
	<script src='../app/jQuery.js'></script>
	<script src='../app/modernizr.js'></script>
	<script src='../app/app.js'></script>
</pre>

The order that they are in the manifest file is the order they will be in your application.

We are using bower for dependency management, you can easily add new dependencies there rather than using the rails gem system, BUT you are also able to still use the classic gem system if you really need to. just add the require to the statement in the manifest file.

## How to use
If you CD into the example you can run:
 - `npm install`
 - `bower install`
 - `gulp`

You will see that your app copies all changes made to `frontend` into the `app/assets` directory.

