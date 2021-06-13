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
    async getUserByEmail(req, res) {
        try {
            const email = req.params.email;
            const userData = await User.findOne({email});
            if (!userData)
                return res.status(404).send(e);
            else
                res.status(200).send(userData);
        } catch (e) {
            res.status(500).send(e);
        }
    },
    async getUsers(req, res) {
        try {
            const usersData = await User.find();
            res.status(200).send(usersData);
        } catch (e) {
            res.status(404).send(e);
        }
    },
    async newUser(req, res) {
        try {
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
            const email = req.params.email;
            if (!email)
                return res.status(400).send();
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
            const email = req.params.email;
            const updatedUsers = await User.updateOne({email}, req.body, {
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
