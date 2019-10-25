
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('conditions').del()
    .then(function () {
      // Inserts seed entries
      return knex('conditions').insert([
        {name: 'new'},
        {name: 'good'},
        {name: 'fair'},
        {name: 'worn'},
        {name: 'used'}
      ]);
    });
};
