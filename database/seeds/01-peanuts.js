exports.seed = async function(knex) {
    await knex('peanuts').truncate();
    await knex('peanuts').insert([
        { name: 'Charlie Brown' },
        { name: 'Linus' },
        { name: 'Snoopy' },
        { name: 'Woodstock' },
        { name: 'Sally' },
        { name: 'Lucy' },
        { name: 'Schroeder' },
    ]);
};