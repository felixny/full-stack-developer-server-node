import importedUsers from './users.js';

let users = importedUsers;

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params.uid;
    users = users.filter(usr =>
        usr._id !== userId);
    res.sendStatus(200);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    const res = users.filter(u => u.type === type);
    let resarray = [];
    for (var i = 0; i < res.length; i++) {
       resarray.push(res[i].username);
       /* console.log(resarray); */
    }
    /* console.log(resarray); */
    return resarray;
}

const updateUser = (req, res) => {
    const userId = req.params.uid;
    const updatedUser = req.body;
    console.log(updatedUser);
    users = users.map(usr => usr._id === userId ? updatedUser : usr);
    console.log(users);
    res.sendStatus(200);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    console.log(type);
    if (type) {
        res.json(findUsersByType(type));

        return;
    }

    res.json(users);
}

export default userController; 