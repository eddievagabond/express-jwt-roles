# express-jwt-roles
Express role middleware for use with express-jwt. Inspired by koa-jwt-roles.

**Written for NodeJS 4+**

This module checks against the request user decoded by express-jwt.

## Simple usage:
```js
... app, express-jwt
// add this index.js to middleware folder
const roles   = require('../middleware');
const router  = express.Router();

// single check - single route
router.get('/user', roles('admin'),  (req, res, next) =>  {
    // if the jwt has admin in roles, this will hit
});

// multiple check - single route
router.get('/', roles(['admin', 'moderator']), (req, res, next) => {
    // if the jwt has admin or moderator, this will hit
});
```

## Router usage:

If you have a lot of routes, the previous example can become very tedious. The next example makes life a bit easier if an entire route prefix uses the same roles.

```js
// this could be an admin router where you only want admin to access.
... app, express-jwt
// add this index.js to middleware folder
const roles   = require('../middleware');
const router  = express.Router();

router.use('/user', roles('admin'));
// -- or
router.use('/user', roles(['admin', 'user']));

router.get('/user/:id', (req, res, next) => {
    // admin can access this
});
```
