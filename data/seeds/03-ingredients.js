
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_name: 'ingredients 1', ingredients_price: 11},
        {ingredients_name: 'ingredients 2', ingredients_price: 7.5},
        {ingredients_name: 'ingredients 3', ingredients_price: 7}
      ]);
    });
};