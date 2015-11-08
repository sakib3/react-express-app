command:
-npm init
-bower init
-touch .gitignore and edit: 
node_modules
bower_components
------------------------

Now create two files:
touch app/index.ejs write content into it
touch server/main.js
-------------------------

Run:
npm install --save express
npm install --save ejs
---------------------------

Run:
node server/main.js
---------------------------

Create touch gulpfile.js

install gulp globally and locally

npm install --save gulp gulp-live-server

Then install: npm install --save browser-sync

Then edit gulp.js and RUN gulp serve
---------------------------
Install REACT:
npm install --save react
bower install --save react
npm install -g react-tools  (JSX command line tool)

---------------------------
Install browserify: <needed to convert the jsx into js so that browser can understand>
npm install -g browserify

<Now we need to install reactify and browserify locally>
<take a backend app and visible into frontend>
npm install --save reactify browserify

Now we need:
npm install --save vinyl-source-stream
---------------------------
Chnage the file and 
Then run: gulp bundle 
which will out put the jsx to js and import this new file to app
and run
gulp serve
___________________________

Create components folder inside app folder
it is a specific module.....
and 
touch app/components/GroceryItemList.jsx
---------------------------
touch app/dispatcher.js

install guid , tool for gen random string:
npm install --save guid

_________________________

Install skeleton and addd into file:
bower install --save skeleton