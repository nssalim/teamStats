// Team Stats
// To create and extract information about a sports team. 


// create data using data structures such as objects, arrays, etc. and then, manipulate them, as well as, gain insights from them.


console.log('TEAM STATS\n')
// the team has players, and it plays games
const team = {
  _players: [
    {firstName: 'Sabrina',
    lastName: 'Duncan',
    age: 24},
    {firstName: 'Jill',
    lastName: 'Munroe',
    age: 23},
    {firstName: 'Kelly',
    lastName: 'Garrett',
    age: 25},
    {firstName: 'John',
    lastName: 'Bosley',
    age: 46}
    ],

  _games: [
    {opponent: 'Aces',
    home: 40,
    rival: 30},
    {opponent: 'Conquerors', 
    home: 30,
    rival: 15},
    {opponent: 'Assassins',
    home: 15,
    rival: 30}
    ],


// has getter methods for _players and _games keys. 
get players(){
return this._players;},

get games(){
return this._games;
},


// add a new player to team
addPlayer(firstName, lastName, age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age: age};
  this.players.push(player);
},


// add a new game for the team to play
addGame(rivalTeamName, homePoints, rivalPoints){
  const game = {
    opponent: rivalTeamName,
    home: homePoints,
    rival: rivalPoints
    };
  this.games.push(game);
},
}


// invoke new player(s)
team.addPlayer('Natalie', 'Cook', 26);
team.addPlayer('Dylan', 'Sanders', 21);
team.addPlayer('Alex', 'Munday', 22);
console.log(team.players);
// Output:
// TEAM STATS

// [ { firstName: 'Sabrina', lastName: 'Duncan', age: 24 },
//   { firstName: 'Jill', lastName: 'Munroe', age: 23 },
//   { firstName: 'Kelly', lastName: 'Garrett', age: 25 },
//   { firstName: 'John', lastName: 'Bosley', age: 46 },
//   { firstName: 'Natalie', lastName: 'Cook', age: 26 },
//   { firstName: 'Dylan', lastName: 'Sanders', age: 21 },
//   { firstName: 'Alex', lastName: 'Munday', age: 22 } ]

// // Invoke new game results and print the team‘s updated games array
team.addGame('Majestics', 40, 40);
team.addGame('Saints', 15, 40);
team.addGame('Titans', 30 , 15);
// console.log(team.games);
// Output

