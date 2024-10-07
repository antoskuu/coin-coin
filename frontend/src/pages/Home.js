// Home.js
import { Bracket } from 'react-brackets';
import React, { useState } from 'react';

// Fonction pour mélanger les équipes aléatoirement
const shuffleTeams = (teams) => {
  for (let i = teams.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [teams[i], teams[j]] = [teams[j], teams[i]];
  }
  return teams;
};

// Fonction pour générer le bracket
const generateBracket = (teams) => {
  const shuffledTeams = shuffleTeams([...teams]);
  let currentRoundTeams = shuffledTeams;
  console.log(currentRoundTeams.len);
  const generatedRounds = []; // Create a new array to hold the rounds

  //Premier tirage

  const round = {
    title: `Round ${generatedRounds.length + 1}`,
    seeds: [],
  };

  for (let i = 0; i < currentRoundTeams.length; i += 2) {
    round.seeds.push({
      teams: [
        { name: currentRoundTeams[i] },
        { name: currentRoundTeams[i + 1] || { name: 'Bye' } },
      ],
      winner : 'TBD',
    });
  }

  generatedRounds.push(round);
  currentRoundTeams = round.seeds.map(seed => seed.teams[0].name);

  while (currentRoundTeams.length > 1) {
    console.log(currentRoundTeams.length);
    const round = {
      title: `Round ${generatedRounds.length + 1}`,
      seeds: [],
    };

    for (let i = 0; i < currentRoundTeams.length; i += 2) {
      round.seeds.push({
        teams: [
          { },
          { },
        ],
        winner : 'TBD',
      });
    }

    generatedRounds.push(round);
    currentRoundTeams = round.seeds.map(seed => seed.teams[0].name) || [];
  }

  return generatedRounds; 
};

const updateBracket = (rounds) => {
  // Start from the first round's winners
  let currentRoundTeams = rounds[0].seeds.map(seed => seed.winner?.name || 'TBD'); // Safely access the winner's name
  
  const generatedRounds = []; // Create a new array to hold the updated rounds

  // Add the first round as it is (since no updates yet)
  generatedRounds.push(rounds[0]);

  // Continue creating rounds based on winners of previous round
  while (currentRoundTeams.length > 1) {
    const round = {
      title: `Round ${generatedRounds.length + 1}`,
      seeds: [],
    };

    for (let i = 0; i < currentRoundTeams.length; i += 2) {
      round.seeds.push({
        teams: [
          { name: currentRoundTeams[i] || 'Bye' },
          { name: currentRoundTeams[i + 1] || 'Bye' },
        ],
        winner: 'TBD',
      });
    }
    
    generatedRounds.push(round);
    // Update currentRoundTeams to be the first team from each pair (which are the winners)
    currentRoundTeams = round.seeds.map(seed => seed.teams[0].name);
  }

  return generatedRounds; 
};


const Home = () => {
  const initialTeams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G', 'Team H'];
  const [rounds, setRounds] = useState(generateBracket(initialTeams)); // Initialize state with the first bracket

  // Function to generate a new bracket on button click
  const handleUpdateBracket = () => {
    const newRounds = updateBracket(rounds); // Generate new rounds
    setRounds(newRounds); // Update the state with the new rounds
  };

  const handleResultGame = () => {
    // Create a deep copy of rounds to avoid mutating the original state
    const newRounds = [...rounds];
    newRounds[0] = {
      ...newRounds[0],
      seeds: newRounds[0].seeds.map((seed, index) => 
        index === 0 ? { ...seed, winner: seed.teams[0] } : seed // Set winner of the first game
      ),
    };
  
    setRounds(newRounds);  // Update state with new rounds
  };
  

  return (
    <div>
      <h1>Arbre du tournoi</h1>
      <button onClick={handleUpdateBracket}>Générer un nouvel arbre</button>
      <button onClick={handleResultGame}>Result game</button>

      <Bracket rounds={rounds} /> {/* Use the rounds from state */}
    </div>
  );
};

export default Home;
