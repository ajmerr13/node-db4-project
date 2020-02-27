
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'recipe 1', instructions_id: 1 },
        {recipe_name: 'recipe 2', instructions_id: 2},
        {recipe_name: 'recipe 3', instructions_id: 3}
      ]);
    });
};