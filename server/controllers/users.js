const User = require('../database/models/User');

async function findAll(req, res) {
  User
  .findAll()
  .then(result => res.json(result));
};

async function findUser(req,res) {
  User
  .findByPk(req.params.id)
  .then(result => res.json(result));
};

async function addUser(req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  User
  .create(newUser)
  .then(result => res.json(result));
};

async function updateUser(req, res) {
  await User
  .update({
    name: req.body.name,
    email: req.body.email,
  }, {
    where: {
      id: req.params.id
    }
  });

  User
  .findByPk(req.params.id)
  .then(result => res.json(result));
}

async function deleteUser(req, res) {
  await User
  .destroy({
    where: {
      id: req.params.id,
    },
  });

  User
  .findAll()
  .then(result => res.json(result));
};

module.exports = {
  findAll,
  findUser,
  addUser,
  updateUser,
  deleteUser,
};