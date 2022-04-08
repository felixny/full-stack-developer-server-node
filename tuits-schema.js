import mongoose from "mongoose";
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislike: Number,
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});

export default schema;