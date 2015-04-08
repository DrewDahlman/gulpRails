## Gulp + Rails
Enhancing the Rails Asset Pipeline using Gulp.

## Wins
 - Get to use bower for dependency management
 - CoffeScript linting and error catching
 - Sass Error catching
 - Get to use Browserify ( export and require )
 - Can still use gems for dependencies
 - You can modify your build process to suit your needs
 	- Some projects have special requirements for compiling, with a build system such as gulp you have full control over how that process happens.

## Why
The Rails asset pipeline is a great way of delivering assets to your application, dealing with minifying and concatenation of your JS and CSS, but it can be a process to use such neat tools such as browserify, auto prefixer and other great features of a proper build system.

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

This is exactly like you would normally include scripts.

The order that they are in the manifest file is the order they will be in your application.

We are using bower for dependency management, you can easily add new dependencies there rather than using the rails gem system, BUT you are also able to still use the classic gem system if you really need to. just add the require to the statement in the manifest file.

## How to use
To use simply copy the contents of the `package` directory into your application root and run:
 - `npm install`
 - `bower install`
 - `gulp`
 - you're ready to go!

## Example
If you CD into the example you can run:
 - `npm install`
 - `bower install`
 - `gulp`

The example project is a straight up barebones rails 4.2.1 app. Nothing has been modified only dropping in the gulp packages on the root.

You will see that your app copies all changes made to `frontend` into the `app/assets` directory.

If you want to run the full app run:
 - `vagrant up`
 - `vagrant reload`
 - go to http://192.168.56.102

The example uses the [Vagrant + Puppet Boilerplate project](https://github.com/DrewDahlman/vagrant-puppet-boilerplate)

## To ignore or not to ignore?
When working on a team you may find that you get conflicts between your compiled files such as app.js & app.css. Getting around this is easy and in fact there are two very viable options.

 - .gitignore
 	- You can set `.gitignore` to ignore everything inside of `app/assets/` this will mean that your compiled scripts will never actually leave your machine, and that you will never have any issues with conflicts.
 	- Doing this method will mean that your server will need to run gulp and do the build for you which is also very easy to setup.
 	- ssh into your server and install `node`, `npm` & `gulp` as global
 	- In your deployment run `gulp dist` and gulp will build your files for you on the server and you're good to go!

 - Binary
 	- This is also a very easy thing to do
 	- in your `.gitignore` add the following
 
 <pre>
 	app/assets/stylesheets/app.css binary
 	app/assets/javascripts/app.js binary
 </pre>

 	- By setting your files to binary they will not be diffed and you can continue deving without worry of weird conflicts!