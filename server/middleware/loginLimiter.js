const rateLimit = require('express-rate-limit')
const { logEvents } = require('./logger')

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // equals 1 minuite
    max: 5, // This limits each IP to 5 login requests per 'window' per minute
    message:
        { message: 'Too many login attempts from this IP, please try again after a 60 second pause' },
    handler: (req, res, next, options) => {
        logEvents(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'error.log')
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false // Disables the `X-RateLimit-*` headers
})

module.exports = loginLimiter