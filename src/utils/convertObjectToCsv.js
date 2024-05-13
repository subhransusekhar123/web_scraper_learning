import ObjectsToCsv from "objects-to-csv";
import { Parser } from '@json2csv/plainjs';
import { unwind } from '@json2csv/transforms';


const convertObjectToCsv = async(data) => { //takes array
    try{
        const csv = new ObjectsToCsv(data);
        await csv.toDisk('./public/temp/test.csv')
        console.log(data,"done buddy before")
    }catch(err){
        console.log(err)
    }

    // try {
    //     const opts = {
    //       transforms: [
    //         unwind({ paths: ['colors'] })
    //       ]
    //     };
    //     const parser = new Parser(opts);
    //     const csv = parser.parse(data);
    //     console.log(csv);
    //   } catch (err) {
    //     console.error(err);
    //   }
    
}

convertObjectToCsv([{a: 'subhransu', name: 'hello'}, {a: 'subhransu', name: '"hello", "world", "and" , "people"'} ])

export default convertObjectToCsv ;
