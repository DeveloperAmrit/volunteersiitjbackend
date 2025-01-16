import Advertisement from '../models/Advertisement.js';


export function createAdvertisement(ad){


    const newAd = new Advertisement(ad);

    newAd.save()
        .then(ad=> console.log("Advertisement saved:",ad))
        .catch(err=> console.log("Error while saving advertisement",err));
}

export async function modifyAdvertisement(advertisementId,updates){
    try{
        const updatedAd = await Advertisement.findOneAndUpdate({ advertisementId: advertisementId },updates,{new:true})
        if(updatedAd){
            console.log("Advertisement updated ",updatedAd);
            return true;
        }
        else{
            console.log("No such Advertisement found",advertisementId);
            return false;
        }
    }
    catch(err){
        console.log("Error occured while modifying advertisement",err)
    }
}

export async function deleteAdvertisement(advertisementId){
    try{
        const result = await Advertisement.findOneAndDelete({ "advertisementId" : advertisementId })
        if(result){
            console.log("Advertisement deleted ",advertisementId)
            return true;
        }
        else{
            console.log("No such advertisement found");
            return false;
        }
    }
    catch(err){
        console.log("Error occured while deleting advertisement",err);
    }
    
}

export async function getAllAdsvetisements(){
    try{
        const result = await Advertisement.find({})
        if(result){
            console.log("Advertisements fetched",result)
            return Array.from(result);
        }
        else{
            console.log("No advertisements found");
            return false;
        }
    }
    catch(err){
        console.log("Error occured while fetching advertisements",err);
    }
    
}

