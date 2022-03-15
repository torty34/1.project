import { Collection }       from    "../dataManager.ts"
import { SchemaManager }    from    "../modelshema/mods.ts"
class ControllerManager{
    schema      : any ;
    collection  : any ;
    constructor(schema:SchemaManager, collection: Collection){
        this.schema     = schema ;
        this.collection = collection ;
    }
    Get(id:string){
        return this.collection.Get(id)
    }
    Post(id:string , data:any){

        const dataToSave = data
        const valueSchema = this.schema.Post(dataToSave)
        dataToSave._id =id 
        if(valueSchema){
        console.log(valueSchema ,dataToSave)
            this.collection.Post(dataToSave)
            return true
        }else{ return false }
    }
    Put(id:string , data:any){
        if(this.schema.Put(data)){
            this.collection.Put(id,data)
            return true
        }else{ return false }
    }
    Delete(id:string){
        this.collection.Delete(id)
        return true
    }
}
export { ControllerManager }
