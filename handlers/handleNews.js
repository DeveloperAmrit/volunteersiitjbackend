import News from '../models/News.js';
import { nanoid } from 'nanoid';

export function createNews(title,imgsrc,para1,para2,creator){
    const newsId = nanoid();

    const newNews = new News({
        title: title,
        newsId: newsId,
        imgsrc: imgsrc,
        para1: para1,
        para2: para2,
        creator: creator
    });

    newNews.save()
        .then(news=> console.log("News saved:",news))
        .catch(err=> console.log("Error while saving news",err));
}

export async function modifyNews(newsId,updates){
    try{
        const updatedNews = await News.findOneAndUpdate({ newsId: newsId },updates,{new:true})
        if(updatedNews){
            console.log("news updated ",updatedNews);
            return true;
        }
        else{
            console.log("No such news found",newsId);
            return false;
        }
    }
    catch(err){
        console.log("Error occured while modifying news",err)
    }
}

export async function deleteNews(newsId){
    try{
        const result = await News.findOneAndDelete({ "newsId" : newsId })
        if(result){
            console.log("News deleted ",newsId)
            return true;
        }
        else{
            console.log("No such news found");
            return false;
        }
    }
    catch(err){
        console.log("Error occured while deleting news",err);
    }
    
}