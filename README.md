About
=====

At [Olivr](http://olivr.com), we Bootstrap our API's using this repo to create NodeJS based micro-services.

It is licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License), so feel free to use it for any project and of course please feel free to raise issues and contribute through pull requests. 

[Demo](https://bootstrap-api.herokuapp.com/documentation) (hosted on heroku free plan - available 18h/day)


Features
========

 - Server: [NodeJS](https://nodejs.org)
 - Linting: [Standard](http://standardjs.com)
 - Task Management: [Gulp](http://gulpjs.com)
 - API:
   - Framework: [Hapi](http://hapijs.com)
   - Testing: [Lab](https://github.com/hapijs/lab), [Code](https://github.com/hapijs/code)
   - Validation: [Joi](https://github.com/hapijs/joi)
   - Documentation: [Swagger](http://swagger.io)


Dev
===
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Run `gulp`, it will automatically test, lint and start your API, watching any modification and re-linting/starting with nodemon.

Gulp sets the environment variable `NODE_ENV=dev`

> Use [TDD](https://en.wikipedia.org/wiki/Test-driven_development):

> 1. Write a test in `./test/`
> 2. Add your endpoint in `./lib/api.js`
> 3. Run `gulp`

You can see your API on [http://localhost:3000](http://localhost:3000) and see its documentation on [http://localhost:3000/documentation](http://localhost:3000/documentation)


Test
====

Travis CI [![Build Status](https://api.travis-ci.org/OlivrCom/bootstrap-api.svg)](https://travis-ci.org/OlivrCom/bootstrap-api)
---------

This API is compatible with [Travis](https://travis-ci.org).

It sets the environment variable `NODE_ENV=test`

> Add this repo (which you most likely forked already):

> 1. [Sync Travis with your Github account](https://travis-ci.org/profile) and add this repo
> 2. Push your repo (if you didn't change/remove the [`deploy`](.travis.yml#L7) part, it will fail at deployment)

Code Climate [![Code Climate](https://codeclimate.com/github/OlivrCom/bootstrap-api/badges/gpa.svg)](https://codeclimate.com/github/OlivrCom/bootstrap-api) [![Test Coverage](https://codeclimate.com/github/OlivrCom/bootstrap-api/badges/coverage.svg)](https://codeclimate.com/github/OlivrCom/bootstrap-api/coverage)
------------

This API is compatible with [Code Climate](https://codeclimate.com) through the [Travis/Code Climate integration](http://docs.travis-ci.com/user/code-climate/)

> 1. Add this repo to Code Climate and get the repo token
> 2. Edit the `addons.code_climate.repo_token` in [.travis.yml](.travis.yml)
> Tip: Use [Travis to encrypt](http://docs.travis-ci.com/user/encryption-keys/) your token with `travis encrypt <token> --add addons.code_climate.repo_token`

Prod
====

Heroku hosting [![Deployment Status](http://heroku-badge.herokuapp.com/?app=bootstrap-api&style=flat&root=documentation)](https://bootstrap-api.herokuapp.com/documentation)
--------------

This API is compatible with [Heroku](http://keroku.com) through the [Travis/Heroku integration](http://docs.travis-ci.com/user/deployment/heroku/).

> Create your app on Heroku:

> 1. [Create a new app](https://dashboard.heroku.com/new)
> 2. In your newly created app settings, create a new config var with key `NODE_ENV` and value `prod`


> Change the Deploy configuration in [.travis.yml](.travis.yml):

> 1. Change your `deploy.app` name
> 2. Change your [encrypted](http://docs.travis-ci.com/user/encryption-keys/) `deploy.api_key`
> Tip: Use [Travis to encrypt](http://docs.travis-ci.com/user/encryption-keys/) your key with `travis encrypt <api key> --add deploy.api_key`

> Push to GitHub:

> 1. Watch the build in Travis
> 2. Watch the deployment in Heroku
> 3. Your API is now available on `https://<app name>.herokuapp.com/documentation`

New Relic monitoring
--------------------

This API is compatible with [New Relic](http://newrelic.com) through the [Heroku/New Relic integration](https://docs.newrelic.com/docs/agents/nodejs-agent/hosting-services/nodejs-agent-heroku)

> 1. [Add the New Relic element](https://elements.heroku.com/addons/newrelic) to your app
> 2. Edit the `app_name` in [newrelic.js](newrelic.js) with your heroku app name (recommended but could be any name)
> 3. Edit the `logging.level` in [newrelic.js](newrelic.js) to suit [your desired logging level](https://github.com/trentm/node-bunyan#levels)

----------

*Original credits to: [OlivrCom/bootstrap-api](https://github.com/OlivrCom/bootstrap-api)*
