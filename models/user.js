import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true // Removes extra spaces
    },
    userId: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate clientId
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Validates email format
    },
    college: {
        type: String,
        required: true, 
        trim: true
    },
    isAdvertiser: {
        type: Boolean,
        default: false 
    },
    isDeveloper: {
        type: Boolean,
        default: false
    },
    appliedForms: {
        type:[{
            id: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true,
                enum: ['pending', 'approved', 'rejected'], // Validates allowed values
                default: 'pending'
            }
        }],
        default: []
    },
    madeAds: {
        type:[{
            id: {
                type: String,
                required: true
            }
        }],
        default: []
    },
    madeNews: {
        type:[{
            id: {
                type: String,
                required: true
            }
        }],
        default: []
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);

export default User;