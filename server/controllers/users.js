const bcrypt = require('bcrypt');
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
  try {
    //Hashing password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    //Inserting in db
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };

    User
    .create(newUser)
    .then(result => res.json(result));    
  } catch {
    res.status(500).send();
  }
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