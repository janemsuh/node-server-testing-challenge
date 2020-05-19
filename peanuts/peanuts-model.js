const db = require('../database/config')

async function add(data) {
	const [id] = await db('peanuts').insert(data);
	return findById(id);
}

function find() {
	return db('peanuts');
}

function findById(id) {
	return db('peanuts').where('id', id).first();
}

function remove(id) {
    return db('peanuts').where('id', id).del();
};

module.exports = {
	add,
	find,
    findById,
    remove
}