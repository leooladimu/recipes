const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js');
//const checkRole = require('../auth/check-role-middleware.js');

//checkRole('Student'), <--this was used after the restricted middleware in line 7
router.get('/', restricted,  (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
//checkRole('Student'), <--this was used after the restricted middleware in line 15
router.get('/:id', restricted, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

module.exports = router;