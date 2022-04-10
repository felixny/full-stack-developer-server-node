import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    handle: String,
    test: String,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});

export default schema;