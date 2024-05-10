import readCsv from "../utils/readCsv.js";
import dataAfterScrapingWebs from "../utils/scrapWebsite.js";

const extractEmailFromUrl = async(req,res) => {
    //data came 
    //push it to read data in csv

    //after that send it to mongodb
    //fetch that and run it to scrap website
    let data;
    console.log(req.file, "extractEmailFromUrl")
    const csvFile = req.file.path;
    if(req.file?.path){
        data = readCsv(csvFile)
        console.log(data, "extractEmailFromUrl");
    }

    // if(data){
    //     dataAfterScrapingWebs(data)
    // }

} 

export default extractEmailFromUrl ;