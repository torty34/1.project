import {MongoClient , Bson} from "https://deno.land/x/mongo@v0.28.0/mod.ts"
class Collection{
    collection:any
    constructor(
        urlDB:string,
        nameDB:string,
        nameCollection:string,
    ){
        this.collection=this.Collection(urlDB,nameDB,nameCollection)
    }
    private async Collection(
        urlDB:string,
        nameDB:string,
        nameCollection:string,
    ){
        let db:any =new MongoClient()
        await db.connect(urlDB)
        db = db.database(nameDB)
        db = db.collection(nameCollection)
        return db
    }

    async Get(id:string){
        //console.log("data get",id)
        const db = await this.collection
        let data = `{"_id":"${id}"}`
        //console.log(data)
        //let data = `{"_id":"2"}`
        data = JSON.parse(data)
        data = await db.find(data).toArray()
        //console.log(data)
        return data
        //return new Response(JSON.stringify(data))
    }
    async Post(
        //id:string,
        dataJson:any){
       const dbClient= await this.collection
       //let dataToSave = dataJson
       //dataToSave._id =id
       //console.log("collection",dataJson)
       const  dataToSave = await dbClient.insertOne(dataJson)
       return true
    }
    async Put ( id:string,dataJson:any){
        const dbClient = await this.collection
        await dbClient.updateOne({_id:id},{$set: dataJson})
        return true
    }
    async Delete(id:string){
        const dbClient = await this.collection
        await dbClient.deleteOne({_id:id})
        return true
    }

}

async function pruevaGet(){
    const datajson={name : "pablo",age:199}
    const prueva = new Collection("mongodb://localhost:8000","test", "profile")
    //const ara = await prueva.Delete("4")
    //console.log( ara)
    //let ara = await prueva.Put("4",{name:"jojo",age:90})
 
    let ara = await prueva.Post({name:"iguana",age:15,gender:"male" , _id:"4"})
    //console.log(ara)
}
// pruevaGet()

export {Collection}

