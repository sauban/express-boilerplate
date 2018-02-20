
const helloFn = (req, res, next) => {
    req.mid_msg = 'Hello from the middleware :)';
    next();
};

module.exports = helloFn;