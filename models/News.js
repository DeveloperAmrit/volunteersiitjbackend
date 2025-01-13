import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true // Removes extra spaces
    },
    newsId: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate clientId
    },
    imgsrc: {
        type: String,
        required: true,
    },
    para1: {
        type: String,
        required: true,
        trim: true
    },
    para2: {
        type: String,
        trim: true
    },
    creator: {
        type: String,
        required: true,
        trim: true
    },
    creatorId: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const News = mongoose.model('news', newsSchema);

export default News;