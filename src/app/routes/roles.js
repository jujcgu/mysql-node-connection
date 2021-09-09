const dbConnection = require('../../config/dbConnection');

module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM factoria.roles', (err, result) => {
            console.log(result);
            res.render('roles/roles', {
                roles: result
            });
        });
    });

    app.post('/roles', (req, res) => {
        const { id, nombre, permisos } = req.body;
        connection.query('INSERT INTO roles SET ? ',
          {
            id,
            nombre,
            permisos
          }
        , (err, result) => {
          res.redirect('/roles');
        });
    });
}