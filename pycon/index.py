import json
import os
import argparse

def convertor(input_file: str, output_file: str):
    if input_file not in os.listdir():
        return input_file + " is not in python folder"
    if input_file.split(".")[1] != "txt":
        return input_file + " is not a text file"
    if output_file.split(".")[1] != "json":
        return output_file + " is not a json file"
    f1 = open(input_file, "r")
    ans = str(f1.read()).split(" ")
    f1.close()
    
    nums = []
    for x in range(len(ans)):
        target = ans[x].split("\n")
        nums += target[:]

    f2 = open(output_file, "w")
    mydicts = {"arr": nums}
    json.dump(mydicts, f2)
    f2.close()
    return output_file + " has been created from " + input_file
args = argparse.ArgumentParser(prog="JsonText", description="A text file to JSON convertor")
args.add_argument("-f", "--file")
args.add_argument("-o", "--output")
parser = args.parse_args()
print(convertor(parser.file, parser.output))