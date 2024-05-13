import getTime from "../../newIndex.js";
import websiteModel from "../model/websiteModel.js";
import convertObjectToCsv from "../utils/convertObjecttoCsv.js";
import readCsv from "../utils/readCsv.js";
import dataAfterScrapingWebs from "../utils/scrapWebsite.js";
import processStrings from "../utils/validUrl.js";


const extractEmailFromUrl = async (req, res) => {
    //data came 
    //push it to read data in csv

    //after that send it to mongodb
    //fetch that and run it to scrap website
    getTime()
    try {

        let data;
        let saveData;
        let arrayofEmailsAndWebsiteName = [];

        console.log(req.file, "extractEmailFromUrl")
        const csvFile = req.file.path;
        if (req.file?.path) {
            data = await readCsv(csvFile)
            console.log(data, "extractEmailFromUrl");

            processStrings(data.onlyCompany, 1000)
                .then(async (data) => {
                    console.log(data, "dataString")
                    const allwebsitesName = new websiteModel({
                        websiteNamesArray: data,
                        name: req.file.originalname
                    })

                    saveData = await allwebsitesName.save();
                    // console.log(saveData)
                    for (let i = 0; i < data.length; i++) {
                        await dataAfterScrapingWebs(data[i])
                            .then((data) => {
                                // console.log(data)
                                arrayofEmailsAndWebsiteName.push(data)

                            })
                            .catch((err) => console.log(err))
                    }

                    console.log(arrayofEmailsAndWebsiteName, "arrayofEmailsAndWebsiteName")
                    convertObjectToCsv(arrayofEmailsAndWebsiteName)
                        .then((data) => console.log('done buddy', data.toString()))
                        .catch((err) => console.log(err))


                    getTime()

                }) //this is just to add https to all the data


        }

    } catch (error) {
        console.log(error)
    }


    // if(data){
    //     dataAfterScrapingWebs(data)
    // }

}

export default extractEmailFromUrl;