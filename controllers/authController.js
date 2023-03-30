const models = require('../models');

module.exports = {

    login: async (req, res, next) => {
        try {
            let user = await models.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);

                if (match) {

                    let tokenReturn = await token.encode(user.id, user.rol, user.nombre, user.email);

                    res.status(200).json({
                        user,
                        tokenReturn
                    });
                } else {
                    res.status(401).send({
                        auth: false,
                        accessToken: null,
                        reason: "Invalid Password!"
                    });
                }
            } else {
                res.status(404).send({
                    message: 'User Not Found.'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Error -> ' + e
            });
            next(e);
        }
    },
}