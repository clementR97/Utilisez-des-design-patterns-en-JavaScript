// class WishlistSubject {
//     constructor(){
//         this._observers = []
//     }
//     subscribe(observers){
//         this._observers.push(observers)
//     }
//     unsubscribe(observers){
//         this._observers = this._observers.filter(obs=>obs !== observers)
//     }
//     fire(action){
//         this._observers.forEach(observers => observers.update(action))
//     }
// }
class WishlistSubject {
    constructor() {
        this._observers = []
    }

    subscribe(observer) {
        this._observers.push(observer)
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer)
    }

    fire(action) {
        this._observers.forEach(observer => observer.update(action))
    }
}