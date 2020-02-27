exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 3, description: 'instructions 1.'},
        {recipe_id: 2, description: 'instructions 2.'},
        {recipe_id: 1, description: 'instructions 3.'}
      ]);
    });
};