const { model } = require('mongoose');
const { UsersSchema } = require('../schemas/UsersSchema');

// console.log("Schema:", UsersSchema);

const UsersModel = model("User", UsersSchema);

module.exports = { UsersModel };