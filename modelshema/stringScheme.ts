
type schemaString = {
    minValue : number | null ,
    maxValue : number | null ,
    priorityPost : boolean
}

class StringModel {
    minValue : number | null 
    maxValue : number | null 
    priorityPost : boolean 
    constructor(
        values: schemaString  
    ){
        this.minValue = values.minValue
        this.maxValue = values.maxValue
        this.priorityPost = values.priorityPost
    }
    verify(stringData:string){
        const lengString= stringData.length
        if(this.minCheck(lengString) && this.maxCheck(lengString)){
            return true
        }
        return false
    }
    minCheck(num:number){
        if(this.minValue){
            if( num >= this.minValue ){
                return true
            }else{return false}
        }else{ return true }
    }
    maxCheck(num:number){
        if( this.maxValue ){
            if(num <= this.maxValue){
                return true
            }else{return false}
        }else{return true}        
    }
}
const val = {
    minValue:4,
    maxValue:9,
    priorityPost:true
}
//const stnd= new StringModel(val)
//console.log( stnd.verify("qweqweqwea") )

export { StringModel }
