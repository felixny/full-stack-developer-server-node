/* import posts from "./tuits.js";
let tuits = posts; */
import tuitsDao from "../tuits-dao.js";



/* const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.handle = "Martin Garrix";
    tuits.push(newTuit);
    res.json(newTuit);
}
 */

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;

    const updatedTuit = req.body;
    console.log('updated', updatedTuit);
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    console.log('new tuit', newTuit);
    const first = newTuit.tuit.split(' ')[0]
    newTuit.likes = Math.floor(Math.random() * 1000);
    newTuit.dislikes = Math.floor(Math.random() * 1000);
    newTuit.handle = first;
    newTuit['postedBy'] = {
        username: newTuit.handle
    }
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    console.log('inserted Tuit', insertedTuit);
    res.json(insertedTuit);

}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
