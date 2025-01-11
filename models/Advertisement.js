import mongoose from 'mongoose';

const advertisementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true // Removes extra spaces
    },
    advertisementId: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate clientId
    },
    deadline: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: String,
        required: true, 
        trim: true
    },
    sequence: { 
        type: [mongoose.Schema.Types.Mixed],
        default: [] 
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

export default Advertisement;