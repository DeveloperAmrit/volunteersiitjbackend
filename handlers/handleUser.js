import User from '../models/user.js';
import { nanoid } from 'nanoid';

export function createUser(name,email,college,isAdvertiser){
    const userid = nanoid();

    const newUser = new User({
        name: name,
        userId: userid,
        email: email,
        college: college,
        isAdvertiser: isAdvertiser
    });

    newUser.save()
        .then(user=> console.log("User saved:",user))
        .catch(err=> console.log("Error while saving user",err));
}

export async function modifyUser(userId,updates){
    try{
        const updatedUser = await User.findOneAndUpdate({ userId: userId },updates,{new:true})
        if(updatedUser){
            console.log("User updated ",updatedUser);
            return true;
        }
        else{
            console.log("No such user found",userId);
            return false;
        }
    }
    catch(err){
        console.log("Error occured while modifying user",err)
    }
}

export async function deleteUser(userId){
    try{
        const result = await User.findOneAndDelete({ "userId" : userId })
        if(result){
            console.log("User deleted ",userId)
            return true;
        }
        else{
            console.log("No such user found");
            return false;
        }
    }
    catch(err){
        console.log("Error occured while deleting user",err);
    }
    
}