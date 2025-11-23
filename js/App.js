class Effect {
    constructor() {
        this._$eventNode = document.querySelector('.btn')
        this._$target = document.querySelector('.box')
        this._effect = 'fade-in'
    }
 
    bindEventOnClick() {
        document.querySelector('.btn').addEventListener('click', () => {
            document.querySelector('.box').classList.add('fade-in')
        })
    }
 }
 
  
 const FadeInEffect = new Effect()
 
 FadeInEffect.bindEventOnClick()