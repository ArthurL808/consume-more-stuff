
exports.up = function(knex) {
  return knex.schema.createTable('userStatuses',(table)=>{
      table.increments();
      table.string('status').notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('userStatuses')
};
