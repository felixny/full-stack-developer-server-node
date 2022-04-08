import tuitsModel from './tuits-model.js';
const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
const updateTuit = (tid, tuit, likes) => tuitsModel.updateOne({ _id: tid }, { $set: tuit })

export default {findAllTuits, createTuit, deleteTuit, updateTuit};