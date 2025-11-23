const fetchData = () => fetch('/data/data.json')
    .then(res => res.json())
    .catch(e => console.log('error', e))


    class Movie {
        constructor(data) {
            this._id = data._id
            this._title = data._title
            this._img = data._img
            this._rating = data._rating
        }
     
        get id() {
            return this._id
        }
     
        get title() {
            return this._title
        }
     
        get img() {
            return this._img
        }
     
        get rating() {
            return this._rating
        }
     }

class App {
    async init() {
        const data = await fetchData()
    }
}

const app = new App()
app.init()
