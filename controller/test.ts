import { ControllerManager } from "./controllerManager.ts"
import {Collection} from "../dataManager.ts"
import {NumberModel,StringModel,SchemaManager} from "../modelshema/mods.ts"
const schemaExample={
    name: new StringModel({
        minValue : 0,
        maxValue : 100,
        priorityPost: true,
    }),
    age: new NumberModel({
        minValue:0,
        maxValue:100,
        priorityPost:true
    }),
    nationality: new StringModel({
        minValue: 3,
        maxValue:20,
        priorityPost: true ,
    }),
    day: new NumberModel({
        minValue:null,
        maxValue:null,
        priorityPost: true ,
    })
}
const dataExample = {
    name:"finality",
    age: 0 ,
    nationality:"Machine",
    day: "" ,
    
}
const example= new SchemaManager(schemaExample)
const collection = new Collection("mongodb://localhost:8000","api", "profile")


const profile = new ControllerManager(example,collection)
const  valor =  profile.schema.Post(dataExample)
//console.log(valor)
//console.log( profile.Post("10",dataExample) )
//console.log( profile.Delete("10"))
//console.log( profile.Put("10",dataExample) )
//console.log( await  profile.Get("10") )
