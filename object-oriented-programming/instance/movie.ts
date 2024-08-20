class Movie {
    constructor(private title: string, private releaseYear: number, private rating: number){}

    get Title(): string{
        return this.title 
    } 

    set Title(title: string){
        this.title = title
    }

    get ReleaseYear(): number{
        return this.releaseYear
    }

    set RealeaseYear(releaseYear: number){
        if (releaseYear < 0){
            throw new Error("Release year cannot be negative")
        }

        this.releaseYear = releaseYear
    }

    get Rating(): number{
        return this.rating
    }
    
    set Rating(rating: number){
        if (rating < 0){
            throw new Error("Rating cannot be negative")
            this.rating = rating
        }
    }
}

class MovieComparer {
    static compareMovies(movie1: Movie, movie2: Movie): string {
      if (movie1.Rating === movie2.Rating) {
        return `${movie1.Title} and ${movie2.Title} have the same rating`
      } else {
        const betterMovie = movie1.Rating > movie2.Rating ? movie1 : movie2
        const lesserMovie = movie1.Rating < movie2.Rating ? movie1 : movie2
        return `${betterMovie.Title} is better than ${lesserMovie.Title}`
      }
    }
  }

  let movie1 = new Movie("The Shawshank Redemption", 1994, 9.3)
let movie2 = new Movie("The Godfather", 1972, 9.2)

console.log(MovieComparer.compareMovies(movie1, movie2))