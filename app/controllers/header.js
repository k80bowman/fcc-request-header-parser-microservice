'use strict';


module.exports = function(req, res) {
    
    var header = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    };
    
    
    //res.json(req.headers);
    res.json(header);
};