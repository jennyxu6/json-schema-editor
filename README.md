# JsonForms Editor
A web-based editor to create and modify UI Schemata and Data Schemata for JsonForms. JsonForms can create fully functional form-based UIs out of that.

Checkout [JsonForms](http://github.eclipsesource.com/jsonforms) for further information.

[![Build Status](https://travis-ci.org/eclipsesource/JsonFormsEditor.svg?branch=master)](https://travis-ci.org/eclipsesource/JsonFormsEditor)[![Coverage Status](https://coveralls.io/repos/github/pancho111203/JsonFormsEditor/badge.svg?branch=master)](https://coveralls.io/github/pancho111203/JsonFormsEditor?branch=master)

## Demo
Watch JSONForms Editor in action on the [demo page](https://jsonforms-editor.herokuapp.com/).

The staging demo (for testing) can be found [here](https://jsonforms-editor-staging.herokuapp.com/).

## Working with TypeScript
#### Definitely Typed
In order to work with any library in TypeScript it is recomended to use [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped). This will provide definition files that epxose the public interface of library methods. The propsed way of working with it is to use [tsd](http://definitelytyped.org/tsd/). This can be installed via npm:
```
$ npm install tsd -g
```

Afterwards it can be used from the command line: use ``tsd query`` and ``tsd install`` to query for libraries and install them afterwards to the `typings` directory.
From there they can be referenced in any TypeScript file, using the following declaration at the top of the file:

```
/// <reference path="../../typings/angularjs/angular.d.ts" />
```

## Build Process
Grunt is used as the build tool for JsonForms Editor. It is configurer via `Grundfile.js` and `build.config.js`.

The following tasks can be run from the command line:

**> grunt build** compiles all typescript to javascript, compiles all less to css, concatiantes all library scripts to one big `lib.js` and copies all other javascript files to the build directory. It furthermore adds all html templates to the angular-template cache and builds the `index.html` in order to include all the links to the scripts / css files.

**> grunt dev** does the same as `grunt build`, but starts a watch task afterwards. This will rebuild all, when grunt detects any changes in the typescript, javascript, css or html files.

**> grunt test** runs all the tests defined in the `src` folder. Uses Karma as a test-runner and jasmine as testing framework.

**> grunt** is currently a shortcut to start the `grunt dev` task.

**> grunt upload** uploads the current version of the repo to the staging server (for testing)

**> grunt deploy** deploys the application to the demo page and adds a new release to the main repo


## Setup Server

The web server runs with the NodeJS technology. To run it execute the file /backend/bin/www with node.

    node backend/bin/www

### Config

To be able to use the GitHub integration, the file backend/config/keys.js should be changed to contain the actual Application OAuth keys.

# json-schema-editor
Web-based editor for JSON schemata.

Please sign the CLA using the CLA assistant before contributing: https://cla-assistant.io/eclipsesource/json-schema-editor
