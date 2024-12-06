//const user = require('../models/User');

function userView(user){

    return `userId: ${user.id},userName: ${user.name}`;
}

module.exports = userView;