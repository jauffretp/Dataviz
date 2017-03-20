import pandas as pd

import json


with open('dep.geojson') as data_file:    
    data = json.load(data_file)


    df = pd.read_csv("presence_moyenne_circonscription.csv", sep=";", dtype={"num_dep" : "str"})


    print(df)


    for feature in data["features"]:
    	
    	code = feature["properties"]["code"]
    	prez = df[df["num_dep"] == code]["presence"].iloc[0]
    	print("code : ",code)
    	print("prez :", prez)


    	feature["properties"]["presence"] = int(prez)
    	print("\n \n")



    with open('dep_prez.geojson', 'w') as outfile:
    	json.dump(data, outfile)

    