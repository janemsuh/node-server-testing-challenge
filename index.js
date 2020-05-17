const express = require("express");
const server = express();
const port = process.env.PORT; // 5000

const peanutsRouter = require('./peanuts/peanuts-router');

server.use(express.json());
server.use('/peanuts', peanutsRouter);

server.get('/', (req, res) => {
    res.json({
        message: 'The Peanuts API is up'
    })
});

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong'
	});
});

if (!module.parent) {
	server.listen(port, () => {
		console.log(`Running at http://localhost:${port}`);
	});
};

module.exports = server;