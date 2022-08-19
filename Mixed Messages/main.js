//returns a random year between 1960 and 2022
const randomYear = () =>{
    let max = 2022 + 1
    let min = 1960
    let difference = max - min
    let year = Math.floor(Math.random() * difference) + min
    return year
}

//Movie's subgenres arrays
const actionType = ['Disaster', 'Heroic bloodshed', 'Martial Arts', 'Spy', 'Superhero']
const adventureType = ['Pirate Film', 'Swashbuckler', 'Samurai']
const animatedType = ['CGI Animation', 'Cutout', 'Live-action animated', 'Stop Motion', 'Claymation', 'Tradicional']
const comedyType = ['Action-comedy', 'Buddy comedy', 'Dark comedy', 'Mockumentary', 'Parody', 'Romantic comedy', 'Slapstick']
const dramaType = ['Legal Drama', 'Medical Drama', 'Melodrama', 'Political Drama', 'Teen Drama', 'Docudrama']
const fantasyType = ['Contemporary Fantasy', 'Dark Fantasy', 'High/Epic Fantasy', 'Urban Fantasy']
const historicalType = ['Alternate History', 'Biopic', 'Historical Epic', 'Historical Event', 'Historical Fiction', 'Period Piece']
const horrorType = ['Found Footage', 'Ghost Films', 'Monster Movie', 'Slasher', 'Splatter', 'Zombie']
const noirType = ['Neo-noir', 'Horror-noir', 'Tech-noir']
const scifiType = ['Dystopian', 'Post-apocalyptic', 'Military Sci-Fi', 'Steampunk', 'Tech-noir', 'Utopian', 'Space Opera']
const thrillerType = ['Psychological Thriller', 'Mystery Film', 'Techno-thriller']
const westernType = ['Epic Western', 'Revisionist Western', 'Spaghetti Western']

const movieGenre = {
    genres: 
    [
        {name:'Action', subGenres: actionType}, 
        {name:'Adventure', subGenres: adventureType}, 
        {name:'Animated', subGenres: animatedType}, 
        {name:'Comedy', subGenres: comedyType}, 
        {name:'Drama', subGenres: dramaType},
        {name:'Fantasy', subGenres: fantasyType}, 
        {name:'Historical', subGenres:historicalType}, 
        {name:'Horror', subGenres: horrorType}, 
        {name:'Noir', subGenres: noirType}, 
        {name:'Science Fiction', subGenres: scifiType}, 
        {name:'Thriller', subGenres: thrillerType},
        {name:'Western', subGenres: westernType}]}

const movie = []

//add a random movie genre, subgenre and year to the "movie" array and logs it to the console
const todaysMovie = () => {    
    const randomGenreIndex = Math.floor(Math.random() * movieGenre.genres.length)
    const randomSubGenreIndex = Math.floor(Math.random() * movieGenre.genres[randomGenreIndex].subGenres.length)
    movie.push(movieGenre.genres[randomGenreIndex].name)
    movie.push(movieGenre.genres[randomGenreIndex].subGenres[randomSubGenreIndex])
    movie.push(randomYear())
    console.log(`Today's Film\nGenre: ${movie[0]}.\nRecommended Subgenre: ${movie[1]}.\nYear: ${movie[2]}.`)
}

todaysMovie()