const express = require('express');
const Peanuts = require('./peanuts-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await Peanuts.find());
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const peanut = await Peanuts.findById(req.params.id);
		if (!peanut) {
			return res.status(404).json({
				message: 'Character does not exist.'
			});
		}
		res.json(peanut);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const peanut = await Peanuts.add(req.body);
		res.status(201).json(peanut);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', async (req, res, next) => {
    try {
        const peanut = await Peanuts.remove(req.params.id);
        if (!peanut) {
            res.status(404).json({
                message: 'Character does not exist.'
            });
        } else {
            res.status(201).json({
                message: 'Character removed.'
            });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;