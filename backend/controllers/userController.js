// @desc        Display user data
// @route       GET api/users/me
// @acccess     private

const getMe = (req, res) => {
    res.status(200).json({
        msg: 'user data display'
    })
}

// @desc        register user
// @route       POST api/users/register
// @acccess     public

const registerUser = (req, res) => {
    res.status(200).json({
        msg: 'register user'
    })
}

// @desc        Display user data
// @route       POST api/users/login
// @acccess     public

const loginUser = (req, res) => {
    res.status(200).json({
        msg: 'user Login'
    })
}

module.exports = {
    getMe, registerUser, loginUser
}