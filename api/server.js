const express = require('express'); 
const helmet = require('helmet');
const cors = require('cors');
const errHandler = require('./errorHandler.js');


const issuesRouter = require('../issues/issuesRouter');
const usersRouter = require('../user/usersRouter');
const authRouter = require('../auth/auth-router.js');



const server = express();

server.use(express.json());
server.use(cors()); 
server.use(helmet());

server.use('/api/issues', issuesRouter);
server.use("/api/users", usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req,res) => {
    res.json({ api: "Issues, Issues, Everywhere!" })
});

server.use(errHandler);


module.exports = server;