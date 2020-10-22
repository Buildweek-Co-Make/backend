exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
      users.string('username', 128).notNullable().unique().index();
      users.string('password', 255).notNullable();
      users.string("first_name").notNullable();
      users.string("last_name").notNullable();
      users.string("email").notNullable()

    })

    .createTable("issues", issues => {
        issues.increments();
        issues.string("title").notNullable();
        issues.string("address").notNullable();
        issues.string("description").notNullable();
    })

  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists("issues")
    .dropTableIfExists('users');
  };
