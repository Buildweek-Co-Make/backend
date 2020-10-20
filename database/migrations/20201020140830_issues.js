exports.up = function(knex) {
    return knex.schema.createTable("issues", tbl => {
      tbl.increments();
      tbl
        .string('title', 255)
        .notNullable()
        .unique()
        .index();
      tbl.text('description')
        .notNullable();
      tbl.integer('userId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
    
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string("username", 128).notNullable().unique().index();
        tbl.string("password", 256).notNullable();

      });


  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("issues");
  };
  