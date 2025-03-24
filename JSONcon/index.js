import fs from 'fs'
import path from 'path'

export default class convertor{
    convert(input_file, output_file){
        const dirpath = path.resolve("./public")
        const files = fs.readdir(dirpath, "utf-8", (err, data) => {
            if(err){
                throw new Error(err)
            }
            let active = false
            data.forEach((e) => {
                if(input_file == e){
                    active = true
                }
            })
            if(active === false){
                throw new Error(input_file + " does not exist in folder")
            }
        })
        let file1 = "" + input_file + "".toString()
        if(file1.split(".")[1] != "txt"){
            throw new Error(input_file + " is not a text file")
        }
        let file2 = "" + output_file + "".toString()
        if(file2.split(".")[1] != "json"){
            throw new Error(output_file + " is not a json file")
        }
        const text = fs.readFileSync("./public/" + file1, "utf-8").split(" ")
        const arr = []
        text.forEach((e) => {
            let target = e.split("\n")
            target.forEach((j) => {
                arr.push(j)
            })
        })
        fs.createWriteStream("./public/" + file2, "utf-8").write(JSON.stringify({"arr": arr}))
        console.log(file1 + " has been converted to " + file2 + ", check the public folder")
        return file1 + " has been converted to " + file2 + ", check the public folder"
    }
}