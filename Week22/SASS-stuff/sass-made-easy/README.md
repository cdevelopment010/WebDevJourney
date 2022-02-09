# SASS made easy

Video by [Kevin Powell](https://www.youtube.com/watch?v=wYWf2m_yzBQ)

## Installation

Node modules are not on GitHub, after creating a copy run the comman `npm install` to get the dependencies. 

## Overview

This video teaches how to install sass and use parcel to build run sass and create a dist folder. 

Make sure npm is installed using `npm -v`, if there is an error download from nodejs. 

The create the folders
* src/scss/main.scss
* src/index.html
    * the link uses scss/main.scss and parcel will compile this

Initialise npm and install sass and parcel
```
npm init -y
npm install sass --save-dev
npm install parcel-bundler --save-dev
```

It is possible to just run sass by using the command
```
sass src/sass:dist/css
```
This will create a css file in dist/css

However, to use parcel, open the package.json and add the following two scripts
```
"dev": "parcel src/index.html",
"build": parcel build src/index.html"
```

Run the commands in the terminal. 
