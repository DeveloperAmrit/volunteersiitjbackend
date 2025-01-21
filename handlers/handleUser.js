import User from '../models/user.js';

export function createUser(userId, name, email, photoURL, college, isAdvertiser) {

    const newUser = new User({
        name: name,
        userId: userId,
        email: email,
        photoURL: photoURL,
        college: college,
        isAdvertiser: isAdvertiser
    });

    newUser.save()
        .then(user => console.log("User saved:", user))
        .catch(err => console.log("Error while saving user", err));
}

export async function modifyUser(userId, updates) {
    try {
        // Extract appliedForms from the updates object
        const { appliedForms } = updates;

        // Use $push to append the object containing id and status
        const updatedUser = await User.findOneAndUpdate(
            { userId: userId },
            { $push: { appliedForms: appliedForms } }, // Push the object {id, status}
            { new: true }
        );

        if (updatedUser) {
            console.log("User updated", updatedUser);
            return true;
        } else {
            console.log("No such user found", userId);
            return false;
        }
    } catch (err) {
        console.log("Error occurred while modifying user", err);
    }
}

export async function deleteUser(userId) {
    try {
        const result = await User.findOneAndDelete({ "userId": userId })
        if (result) {
            console.log("User deleted ", userId)
            return true;
        }
        else {
            console.log("No such user found");
            return false;
        }
    }
    catch (err) {
        console.log("Error occured while deleting user", err);
    }

}

export async function fetchUser(userId) {
    try {
        const result = await User.findOne({ "userId": userId })
        if (result) {
            console.log("User fetched", result)
            return result;
        }
        else {
            console.log("No such user found");
            return false;
        }
    }
    catch (err) {
        console.log("Error occured while fetching user", err);
    }
}