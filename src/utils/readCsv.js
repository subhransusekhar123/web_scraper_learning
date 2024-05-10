import fs from 'fs';
import csv from 'csv-parser'





const readCsv = (csvFile) => {
    const results = [];
    const onlyCompany = [];
    
    fs.createReadStream(csvFile)
        .pipe(csv())
        .on('data', (data) =>{ 
            results.push(data)
            
        })
        .on('end', () => {
            console.log(results);

            results.forEach((data) => {
                onlyCompany.push(data.websiteName);
            })

            // console.log(results,onlyCompany)
            return { onlyCompany, results }
        });
}

export default readCsv ;

