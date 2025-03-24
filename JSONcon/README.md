#jsoncon

jsoncon is a javascript text file to json convertor.
jsoncon inputs a text file and outputs a json file in array format.

How to use: 

    npm i jscon

    import jsoncon from 'jsoncon'

    const obj = new jsoncon();
    obj.convert("index.txt", "index.json") //index.txt is the input file and index.json is the json file

You can use what ever txt file you want but it has to exist and it has to be a txt file.

index.json file just creates a new json file called index.json or it overwrites a preexisting json file.
