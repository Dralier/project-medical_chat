const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

require('dotenv').config();

const login = async (req, res) => {
    try {
        const {username, password} = req.body;
        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
    }
};
const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');
        const serverClient = connect(api_key, api_secret, app_id);
        const hashedPassword = await bcrypt.hash(password, 10)
        const token = serverClient.createUserToken(userId);
        res.status(200).json({token, fullName, username, userId,hashedPassword, phoneNumber})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login };
