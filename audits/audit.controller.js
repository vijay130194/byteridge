const express = require('express');
const router = express.Router();
const auditService = require('./audit.service');

// routes
router.get('/:id', getAll);


module.exports = router;

function getAll(req, res, next) {
    auditService.getAll(req.params.id)
        .then(users => res.json(users))
        .catch(err => {
            if(err === "Unauthorized User!"){
                return res.status(401).json({"message": err});
            }
            next(err);
        });
}