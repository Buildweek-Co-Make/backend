const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');

const issuesRouter = require('../issues/issuesRouter');
const usersRouter = require('../user/usersRouter');


const server = express();

server.use(express.json());
server.use(cors()); 
server.use(helmet());

server.use('/api/issues', issuesRouter)
server.use('/api/users', usersRouter)

server.get('/', (req,res) => {
    res.json({ api: "Issues, Issues, Everywhere!" })
}) 

module.exports = server;