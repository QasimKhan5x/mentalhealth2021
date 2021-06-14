const User = require('../models/user')

module.exports = {
    async getUserById(req, res) {
        try {
            const _id = req.params.id;
            const userData = await User.findById({_id});
            if (!userData)
                return res.status(404).send(e);
            else
                res.status(200).send(userData);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async getUser(req, res) {
        try {
            const email = req.query.email;
            let usersData = {};
            if (email) {
                usersData = await User.find({email});
            } else {
                usersData = await User.find();
            }
            if (Object.keys(usersData).length === 0) {
                return res.status(404).send(usersData);
            }   
            res.status(200).send(usersData);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async newUser(req, res) {
        try {
            console.log(req.body);
            const email = req.body.email;
            const existingUser = await User.find({email});
            if (Object.keys(existingUser).length !== 0) {
                return res.status(409).send({});
            }
            const user = new User(req.body);
            const userCreated = user.save();
            res.status(201).send(userCreated);
        } catch (e) {
            res.status(400).send(e);
        }
    },
    async deleteUser(req, res) {
        try {
            const _id = req.params.id;
            if (!_id)
                return res.status(400).send();
            const deleted = await User.findByIdAndDelete(_id);
            res.status(200).send(deleted);
        } catch(e) {
            res.status(500).send(e);
        }
    },
    async deleteUserByEmail(req, res) {
        try {
            const email = req.query.email;
            if (!email) {
                return res.status(400).send("Provide User's Email");
            }
            const deleted = await User.deleteOne({email});
            res.status(200).send(deleted);
        } catch(e) {
            res.status(500).send(e);
        }
    },
    async updateUser(req, res) {
        try {
            const _id = req.params.id;
            const updatedUsers = await User.findByIdAndUpdate(_id, req.body, {
                new: true
            })
            res.status(200).send(updatedUsers);
        } catch(e) {
            res.status(404).send(e);
        }
    },
    async updateUserByEmail(req, res) {
        try {
            const email = req.query.email;
            console.log(email);
            if (!email) {
                return res.status(400).send("Provide User's Email");
            }
            const updatedUsers = await User.updateOne({email}, { $set: req.body }, {
                new: true
            })
            res.status(200).send(updatedUsers);
        } catch(e) {
            res.status(404).send(e);
        }
    }
}


/*const status = require('http-status');

const userModel = require('@models/users.js');


const has = require('has-keys');


module.exports = {
    async getUserById(req, res){
        if(!has(req.params, 'id'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id'};

        let {id} = req.params;

        let data = await userModel.findOne({where: {id}});

        if(!data)
            throw {code: status.BAD_REQUEST, message: 'User not found'};

        res.json({status: true, message: 'Returning user', data});
    },
    async getUsers(req, res){
        let data = await userModel.findAll();

        res.json({status: true, message: 'Returning users', data});
    },
    async newUser(req, res){
        if(!has(req.params, ['name', 'email']))
            throw {code: status.BAD_REQUEST, message: 'You must specify the name and email'};

        let { name, email } = req.body;
        
        await userModel.create({name, email});

        res.json({status: true, message: 'User Added'});
    },
    async updateUser(req, res){
        if(!has(req.body, ['id', 'name', 'email']))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id, name and email'};

        let { id, name, email } = req.body;
    
        await userModel.updateUser({name, email}, {where:{id}});

        res.json({status: true, message: 'User updated'});
    },
    async deleteUser(req, res){
        if(!has(req.params, 'id'))
            throw {code: status.BAD_REQUEST, message: 'You must specify the id'};

        let { id } = req.params;

        await userModel.destroy({where: {id}});

        res.json({status: true, message: 'User deleted'});
    }
}*/
