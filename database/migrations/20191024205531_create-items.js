
exports.up = function (knex) {
    return knex.schema.createTable('items', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.integer('price').notNullable();
        table.string('manufacturer');
        table.integer('user_id').notNullable().references('id').inTable('users');
        table.integer('category_id').notNullable().references('id').inTable('categories');
        table.integer('itemStatus_id').notNullable().references('id').inTable('itemStatuses');
        table.integer('condition_id').notNullable().references('id').inTable('conditions');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('items');
};