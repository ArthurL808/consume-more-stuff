
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {condition: 'new'},
        {condition: 'good'},
        {condition: 'used'}
      ]);
    });
};
