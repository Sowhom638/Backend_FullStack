const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/create/john', async (req, res) => {
//     try {
//         let createdUser = await userModel.create({
//             name: 'John Doe',
//             age: 30,
//             email: 'john.doe@example.com'
//         });
//         res.send(createdUser);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

app.get('/create', async (req, res) => {
    try {
        let createdUser = await userModel.create({
            name: 'Nilu Doe',
            age: 21,
            email: 'nilu.doe@example.com'
        });
        res.send(createdUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/read', async (req, res) => {
    try {
     
        res.send( await userModel.find());
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/update', async (req, res) => {
    try {
        let updatedUser = await userModel.findOneAndUpdate(
            { name: "John Doe", email: "john.doe@example.com" },
            { email: "john.doe@gmail.com" },
            { new: true }
        );
        res.send(updatedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/delete', async (req, res) => {
    try {
        let deletedUser = await userModel.findOneAndDelete({ name: "John Doe", email: "john.doe@example.com" });
        res.send(deletedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3501, () => {
    console.log('Server is running on port 3501');
});
