
// validate user data middleware - sign up data
module.exports.validateUserData = (req, res, next)=>{
    const {name, email, mobile, password} = req.body       
    if (Object.keys(req.body).length !== 4 ||  !name || !email || !mobile || !password){
        return res.status(400).json({error:'missing required fields'})
    }
    next()
}