// Arrays

const footballTeams = ['arsenal', 'chelsea', 'liverpool'];

const listItem = footballTeams[0];

console.log(footballTeams[2]);

console.log(footballTeams[1]);


// adding to an array

const cleaning = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('cook dinner', 'mop floor');

console.log(cleaning);

// remove the last array

const cleaning = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(cleaning)


// Nested array

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];


//Object

// creating new object

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

  // editing/deleting from a object

    spaceship.color = 'glorious gold';

    spaceship.numEngines = 9;

    delete spaceship['Secret Mission'];

  // accessing key values using bracket notion

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);
