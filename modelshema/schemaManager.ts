
class SchemaManager{
    schema : any
    schmaPost:string[]
    constructor(schema:any){
        this.schema = schema 
        this.schmaPost = this.schemaPost()
    }

    private schemaPost(){
        const schemaPost=[]
        for(const property in this.schema){
            if(this.schema[property]["priorityPost"]){
                schemaPost.push(property)
            }
        }
        return schemaPost

    }
    Put(data:any){
        let value = true
        for( const property in data ){
            //console.log(property)
            if(this.schema[property] !== undefined){
                value = this.schema[property].verify(data[property])
                //console.log( "put" , value ,property)
            }else{
                value = false
                //console.log( "put" , value ,property)
            }
            if (!(value)){
                return value
            }
        }
        return value
    }
    Post(data:any){
        for(let i=0 ; i< this.schmaPost.length ; i++){
            const property = this.schmaPost[i]
            //console.log(data[property])
            if( ( !(data[property] === 0 ) ) && (!(data[property]))){
               //console.log("not cero") 
               return false
            }
        }
        //const valor = this.Put(data)
        //console.log(valor , "put left post")
        return this.Put(data)
    }

}
export {SchemaManager}
