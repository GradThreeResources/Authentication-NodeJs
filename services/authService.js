const {createUser} = require('../models/user')



// end point to validate email or phone 

// end point to sign in 

exports.createUser = (req, res)=>{
    createUser(req.body.name, req.body.email, req.body.password, req.body.mobile)
    res.send('user created')
}