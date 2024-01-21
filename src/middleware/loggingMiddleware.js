

module.exports.loggingRequest = (req, res, next)=>{
    const body = req.body
    const contentType = req.headers['content-type']
    const userAgent = req.headers['user-agent']
    console.log('LOGGING.. ', '- Request Body: ', body, ' - Request Content Type: ', contentType, ' - Request User Agent: ', userAgent)
    next()
}