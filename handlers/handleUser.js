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

export function modifyUser(){
    // modification of data except appliedForms, MadeAds, MadeNews
}

export function addAppliedForms(){

}

export function addMadeAds(){

}

export function addMadeNews(){

}

export function deleteUser(){

}