About
=====

We use this bootstrap API at [Olivr](http://olivr.com) to create NodeJS based micro-services.

It is licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License), so feel free to use it for any project and of course please raise issues/pull requests if you have problems.

[Demo](https://bootstrap-api.herokuapp.com/documentation) (hosted on heroku free plan - available 18h/day - first load takes a minute)


Features
=======

 - Server: [NodeJS](https://nodejs.org)
 - Linting: [Standard](http://standardjs.com/)
 - Task Management: [Gulp](http://gulpjs.com/)
 - API:
   - Framework: [Hapi](http://hapijs.com/)
   - Testing: [Lab](https://github.com/hapijs/lab), [Code](https://github.com/hapijs/code)
   - Validation: [Joi](https://github.com/hapijs/joi)
   - Documentation: [Swagger](http://swagger.io/)


Dev [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
===

Run `gulp`, it will automatically test, lint and start your API, watching any modification and re-linting/starting with nodemon.

It sets the environment variable `NODE_ENV=dev`

> Use [TDD](https://en.wikipedia.org/wiki/Test-driven_development):

> 1. Write a test in `./test/`
> 2. Add your endpoint in `./lib/api.js`
> 3. Run `gulp`

You can checkout your API on [http://localhost:3000](http://localhost:3000) and see its documentation on [http://localhost:3000/documentation](http://localhost:3000/documentation)


Test [![Build Status](https://api.travis-ci.org/OlivrCom/bootstrap-api.svg)](https://travis-ci.org/OlivrCom/bootstrap-api)
====

It is compatible with [Travis](https://travis-ci.org).

It sets the environment variable `NODE_ENV=test`

> Add this repo (which you most likely forked already):

> 1. [Sync Travis with your Github account](https://travis-ci.org/profile) and add this repo.
> 2. Push your repo (if you didn't change/remove the [`deploy`](.travis.yml#L7) part, it will fail at deployment)


Prod
====

Heroku [![Deployment Status](http://heroku-badge.herokuapp.com/?app=bootstrap-api&style=flat&root=documentation)](https://bootstrap-api.herokuapp.com/documentation)
---------

It is compatible with [Heroku](http://keroku.com) through the [Heroku/Travis integration](http://docs.travis-ci.com/user/deployment/heroku/).

> Create your app on Heroku:

> 1. [Create a new app](https://dashboard.heroku.com/new)
> 2. In your newly created app settings, create a new config var with key `NODE_ENV` and value `prod`


> Change the Deploy configuration in [.travis.yml](.travis.yml):

> 1. Change your `deploy.app` name
> 2. Change your [encrypted](http://docs.travis-ci.com/user/encryption-keys/) `deploy.api_key`


> Push your app:
> It is now available on `https://<YOUR APP NAME>.herokuapp.com`