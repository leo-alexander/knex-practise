exports.up = function (knex, Promise) {
  return knex.schema.createTable('blogs', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('blog')
  })
}

exports.down = function (knex, Promise) {
   return knex.schema.dropTable('blogs')
}
