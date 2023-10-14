const mongoose = require('mongoose');
const { model } = require("mongoose");
const Trip = mongoose.model('trips');
const User = mongoose.model('users');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    Trip
        .find({}) // empty filter for all
        .exec((err, trips) => {
            if(!trips){
                return res
                    .status(404)
                    .json({ "message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });  
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    Trip
        .find({ 'code': req.params.tripCode })
        .exec((err, trip) => {
            if(!trip){
                return res
                    .status(404)
                    .json({"message": "trip not found" });
            }else if (err){
                return res
                    .status(404)
                    .json(err)
            }else{
                return res
                    .status(200)
                    .json(trip);
            }
        });
};

const tripsAddTrip = async (req, res) => {
    console.log('Request Body:', req.body); // was having major issues so I added this line in to help troubleshoot the location
    getUser(req, res,
        (req, res) => {
    Trip
        .create({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        },
        (err, trip) => {
            if(err){
                return res
                    .status(400) // bad request, invalid content
                    .json(err);
            }else{
                return res
                    .status(201) // created
                    .json(trip);
            }
        });
    })   
}

/*const tripsDeleteTrip = async (req, res) => {
    //
    getUser(req, res,
        (req, res) => {
            console.log("inside trips.js on server #tripsDeleteTrip");
            Trip.findOneAndDelete({'code': req.params.tripCode}. {useFindAndModify: false})

            .then(trip => {
                if(!trip){
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
                }
                //res.send(trip);
                return res
            }).catch(err => {
                if(err.kind === 'ObjectId'){
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
            }
            return res
                .status(500) // error
                .json(err)
        })
        console.log("return from delete trip");
    });
}*/

const tripsDeleteTrip = async (req, res) => {
    getUser(req, res, (req, res) => {
        console.log("inside trips.js on server #tripsDeleteTrip");
        Trip.findOneAndDelete({'code': req.params.tripCode}, { useFindAndModify: false }) // Added the useFindAndModify option
            .then(trip => {
                if(!trip) {
                    return res.status(404).send({ message: "Trip not found with code " + req.params.tripCode });
                }
                res.status(200).json({ message: "Trip deleted successfully!" }); // Added a response here
            })
            .catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({ message: "Trip not found with code " + req.params.tripCode });
                }
                return res.status(500).json(err);
            });
    });
}


const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    getUser(req, res,
        (req, res) => {
    Trip
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true, useFindAndModify: false})
        .then(trip => {
            if(!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if(err.kind === 'ObjectId'){
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500)
                .json(err);
        })
    })
}

const getUser = (req, res, callback) => {
    console.log('in #getUser');
    if(req.auth && req.auth.email){
        User
            .findOne({ email: req.auth.email })
            .exec((err, user) => {
                if(!user){
                    return res
                        .status(404)
                        .json({ "message": "User not found" });
                }else if (err) {
                    console.log(err);
                    return res
                        .status(404)
                        .json(err);
                }
                callback(req, res
                    /*res.json({ "message": "User found"}),
                    console.log('callback'),
                    console.log(req.auth)*/
                    );
            });
    } else {
        return res
            .status(404)
            .json({ "message": "User not found" });
    }
};


module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip,
    getUser
};