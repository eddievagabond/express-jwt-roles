'use strict';

module.exports = roles => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return function (req, res, next) {
        if(!req || !req.user) {
            next();
        }

        const userRoles = req.user.roles || [];
        const foundRoles = roles.filter(r => userRoles.some(ur => ur === r));

        if (!foundRoles.length) {
            next({
                status: 403,
                message: 'You do not have permission to this resource.'
            });
        }

        return next();
    };
};
