
exports.seed = function(knex, Promise) {
  return knex('blogs').del()
    .then(function () {
      return knex('blogs').insert([
        {id: 1, user_id: 99901, blog:'Today I went to find some termites but there were none at my local store so I had to walk a really long way to find them!'},
        {id: 2, user_id: 99902, blog:'Man I love grapes. Why do they have to be so small?'}
      ]);
    });
};
