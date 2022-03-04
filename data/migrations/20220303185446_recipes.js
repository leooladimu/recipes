/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // don't forget the return statement 
    return knex.schema.createTable('recipes', recipeColumn => {
      //creates a primary key called id
      recipeColumn.increments();
      recipeColumn.text('title').notNullable();
      recipeColumn.text('source').notNullable();
      recipeColumn.text('ingredients').notNullable();
      recipeColumn.text('instructions').notNullable();
      recipeColumn.text('category').notNullable();
      recipeColumn.integer('user_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
