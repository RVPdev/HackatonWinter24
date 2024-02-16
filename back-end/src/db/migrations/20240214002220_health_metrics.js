/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("health_metrics", (table) => {
    table.increments("metric_id").primary();
    table.integer("person_id");
    table
      .foreign("person_id")
      .references("user_id")
      .inTable("user_information")
      .onDelete("cascade");
    table.string("gender");
    table.integer("age");
    table.string("occupation");
    table.decimal("sleep_duration");
    table.integer("quality_of_sleep");
    table.integer("physical_activity");
    table.integer("stress_level");
    table.integer("daily_steps");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("health_metrics");
};
