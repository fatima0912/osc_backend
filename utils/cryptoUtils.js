const bcrypt = require('bcrypt');

const getHash = (pwd) => {
    return bcrypt.hash(pwd, 1);
};

const compare = (pwd, hash) => {
    return bcrypt.compare(pwd, hash);
};

module.exports = { getHash, compare };























