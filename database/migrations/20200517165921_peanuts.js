
exports.up = async function(knex) {
    await knex.schema.createTable('peanuts', tbl => {
        tbl.increments()
        tbl.text('name').notNull().unique()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('peanuts')
};
