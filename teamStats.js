// Team Stats
// To create and extract information about a sports team. 


// create data using data structures such as objects, arrays, etc. and then, manipulate them, as well as, gain insights from them.
 

// the team has players, and it plays games
const team = {
    _players: [
      {firstName: 'Tom',
      lastName: 'Good',
      age: 32},
      {firstName: 'Margo',
      lastName: 'Leadbetter',
      age: 35},
      {firstName: 'Barbera',
      lastName: 'Good',
      age: 28},
      {firstName: 'Jerry',
      lastName: 'Leadbetter',
      age: 28}
      ],
  
  
    _games: [
      {game: 'Aces',
      chaliesAngels: 40,
      theGoodLife: 30},
      {game: 'Conquerors',
     chaliesAngels: 30,
      theGoodLife: 15},
      {game: 'Assassins',
     chaliesAngels: 15,
      theGoodLife: 30}
      ],
  
  
  // has getter methods for _players and _games keys. 
  get players(){
  return this._players;},
  
  get games(){
  return this._games;
  },
  }
  