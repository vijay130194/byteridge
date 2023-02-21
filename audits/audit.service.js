const config = require('config.js');
const db = require('_helpers/db');
const User = db.User;
const Audit = db.Audit;



module.exports = {
    getAll
};

async function getAll(id) {
    const user = await User.findById(id);
    if(!user){
        throw "user not present"
    }
    if(user.role !== 'AUDITOR'){
        throw "user is not an auditor"
    }
    const audits = await Audit.find();
    return audits;
}