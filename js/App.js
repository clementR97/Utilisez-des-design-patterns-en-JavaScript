class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        // this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.MoviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const MoviesData = await this.MoviesApi.getMovies()
        // const oldMoviesData = await this.oldMoviesApi.getMovies()
        const externalMoviesData = await this.externalMoviesApi.getMovies()

        // const OldMovies = oldMoviesData.map(movie => new movieFactory(movie,'oldApi'))
        const Movies = MoviesData.map(movie => new movieFactory(movie,'newApi'))
        const externalMovies = externalMoviesData.map(movie => new movieFactory(movie,'externalApi'))
        
        const FullMovies = Movies.concat(externalMovies)

        FullMovies

            .forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
