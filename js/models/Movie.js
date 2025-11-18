class Movie {
constructor(data){
    this._title = data.title
    this._synopsis = data.synopsis
    this._picture = data.picture
    this._duration = data.duration
    this._released_in = data.released_in
}
get title(){
    return this._title.fr ?? this._title.en;
    

}
get duration(){

    return (Math.floor(this._duration/60)+'h'+(this._duration % 60).toString().padStart(2,'0'))
}
get synopsis(){
    return this._synopsis
}
get picture(){
    return `assets/${this._picture}`
}
get released_in(){
    return this._released_in
}
get thumbnails(){
    return `assets/thumbnails/${this._picture}`
}
}
