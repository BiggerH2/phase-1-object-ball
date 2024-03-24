// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

// Function to create and return the game object
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        // Add other players for the home team here
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        // Add other players for the away team here
      },
    },
  };
}

// Function to get the number of points scored by a player
function numPointsScored(playerName) {
  let playerStats = getPlayerStats(playerName);
  return playerStats ? playerStats.points : null;
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
  let playerStats = getPlayerStats(playerName);
  return playerStats ? playerStats.shoe : null;
}

// Function to get the colors of a team
function teamColors(teamName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; // Team not found
}

// Helper function to get player stats from the game object
function getPlayerStats(playerName) {
  let game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
  return null; // Player not found
}

// Example usage
console.log(gameObject()); // Log the game object
console.log(numPointsScored("Alan Anderson")); // Log the points of Alan Anderson
console.log(shoeSize("Jeff Adrien")); // Log the shoe size of Jeff Adrien
console.log(teamColors("Brooklyn Nets")); // Log the colors of the Brooklyn Nets
