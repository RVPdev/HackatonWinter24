/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("healthMetrics",(table)=>{
        table.increments("user_id").primary();
        table.string("gender");
        table.integer("age");
        table.string("occupation");
        table.integer("sleep_duration");
        table.integer("quality_of_sleep");
        table.integer("physical_activity_level")
        table.integer("stress_level")
        table.timestamps(true, true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("healthMetrics")
};

