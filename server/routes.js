const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/users', async (req, res) => {
    const {name, email} = req.body;
    try{
        const [result] = await db.execute('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
        res.send({message: 'Success'});
    }catch (err){
        res.status(500).send(err);
    }
})

module.exports = router;