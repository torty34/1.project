import {NumberModel,StringModel,SchemaManager} from "./mods.ts"
const schema={
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
        priorityPost: false ,
    }),
    day: new NumberModel({
        minValue:0,
        maxValue:31,
        priorityPost: true ,
    })
}
const dataExample = {
    name:"dwa",
    age: 0 ,
    nationality:"aw",
    day: -1 ,
    
}
const example= new SchemaManager(schema)
//console.log( example.Post(dataExample) )
//ole.log(example.schmaPost)
console.log( example.Put(dataExample) )
//example.Post(dataExample)
//
//
//
//
