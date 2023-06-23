const AutherController = require('../controllers/auther.controller');
 
module.exports = app => {
    app.get('/api/authers', AutherController.findAllAuthers);
    app.get('/api/authers/:id', AutherController.findOneSingleAuther);
    app.put('/api/authers/:id', AutherController.updateExistingAuther);
    app.post('/api/authers', AutherController.createNewAuthers);
    app.delete('/api/authers/:id', AutherController.deleteAnExistingAuther);
}