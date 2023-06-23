const Auther = require('../models/auther.model');
 
module.exports.findAllAuthers = (req, res) => {
    Auther.find()
        .then((allDaAuthers) => {
            res.json({ authers: allDaAuthers })
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}
 
module.exports.findOneSingleAuther = (req, res) => {
    Auther.findOne({ _id: req.params.id })
        .then(oneSingleAuthers => {
            res.json({ auther: oneSingleAuthers })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
module.exports.createNewAuthers = (req, res) => {
    Auther.create(req.body)
        .then(newlyCreatedAuther => {
            res.json({ auther: newlyCreatedAuther })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
module.exports.updateExistingAuther= (req, res) => {
    Auther.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuther => {
            res.json({ auther: updatedAuther })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
module.exports.deleteAnExistingAuther= (req, res) => {
    Auther.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}