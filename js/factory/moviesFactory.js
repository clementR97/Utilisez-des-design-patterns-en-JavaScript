class movieFactory{
   constructor(data,type){
    if(type === 'oldApi'){
        return new OldMovie(data)
    }
    else if(type === 'newApi'){
        return new Movie(data)
    }
    else if(type === 'externalApi'){
        return new externalMovie(data)
    }
    else{
        throw 'Unknow type format'
    }
   }
}