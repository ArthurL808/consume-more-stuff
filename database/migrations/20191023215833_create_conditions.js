
exports.up = function(knex) {
  return knex.schema.createTable('conditions',(table)=>{
      table.increments();
      table.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('condtions');
};
