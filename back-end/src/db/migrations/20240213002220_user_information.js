/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user_information",(table)=>{
        table.increments("user_id").primary();
        table.string("user_first_name");
        table.string("user_last_name");
        table.string("user_username");
        table.string("user_password");
        table.string("user_email");
        table.date("user_dob");
        table.string("user_gender");
        table.string("user_occupation");
        table.string("user_company");
        table.integer("user_weight");
        table.integer("user_height");
        table.time("user_scheduled_time");
        table.boolean("administer_access");
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("user_information")
};
