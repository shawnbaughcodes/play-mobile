const admin = require('firebase-admin');

module.exports = function (req, res) {
    if (!req.body.email && !req.body.password) {
        return res.status(422).send({ error: 'Bad Input' });
    }
    const email = String(req.body.email);
    const password = String(req.body.password);

    admin.auth().createUser({ email, password })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err }));
};
