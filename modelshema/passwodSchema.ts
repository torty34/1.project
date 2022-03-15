type schemaPassword = {
    minValue : number | null ,
    maxValue : number | null ,
    priorityPost : boolean ,
    encrypt:boolean ,
}

class PasswordModel {
    minValue : number | null 
    maxValue : number | null 
    priorityPost : boolean 
    constructor(
        values: schemaPassword  
    ){
        this.minValue = values.minValue
        this.maxValue = values.maxValue
        this.priorityPost = values.priorityPost
    }
    get vl(){
        return [this.minValue, this.maxValue , this.priorityPost]
    }
    verify(num:number){
        if(this.minCheck(num) && this.maxCheck(num)){
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
        if(this.maxValue){
            if(num <= this.maxValue){
                return true
            }else{ return false }
        }else{
            return  true
        }
    }
}

export { PasswordModel }
