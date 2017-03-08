exports.up = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('url')
    table.string('photo')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('url')
    table.dropColumn('photo')
  })
}
