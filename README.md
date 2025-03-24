# JsonText
JsonText is a text file to json file convertor
You can use nodejs or python to convert json files

python: 

    git clone https://github.com/Jamcha123/JsonText
    cd JsonText/pycon

    python3 index.py -f index.txt -o index.json 

    outputs a json file called index.json with the content of index.txt in a array format.

nodejs - npm: 

    npm i jsoncon

    import convertor from 'jsoncon'

    const obj = new convertor();
    obj.convert("index.txt", "index.json") //index.txt is the input file and index.json is the json file

The text file has to be txt file and json file has to be a json file.
The text file has to also exists.

If you want you can support my github sponser.