const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const login = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
    }
};
const signup = (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes()
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login };
