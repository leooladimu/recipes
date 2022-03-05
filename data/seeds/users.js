
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {username: "jon", password: "password"},
        {username: "ted", password: "password"},
        {username: "kate", password: "password"}
      ]);
    });
};