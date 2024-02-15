/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("userInformation",(table)=>{
        table.increments("user_id").primary();
        table.string("user_first_name");
        table.string("user_last_name");
        table.string("user_username");
        table.string("user_password");
        table.string("user_email");
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("userInformation")
};
