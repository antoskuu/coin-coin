// Home.js
import { Bracket, RoundProps } from 'react-brackets';
import React from 'react';

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
  const rounds = [];
  let currentRoundTeams = shuffledTeams;

  while (currentRoundTeams.length > 1) {
    const round = {
      title: `Round ${rounds.length + 1}`,
      seeds: [],
    };

    for (let i = 0; i < currentRoundTeams.length; i += 2) {
      round.seeds.push({
        teams: [
          { name: currentRoundTeams[i] },
          { name: currentRoundTeams[i + 1] || { name: 'Bye' } },
        ],
      });
    }

    rounds.push(round);
    currentRoundTeams = round.seeds.map(seed => seed.teams[0].name);
  }

  return rounds;
};

const Home = () => {
  const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G', 'Team H'];
  const rounds = generateBracket(teams);

  return (
    <div>
      <h1>Arbre du tournoi</h1>
      <Bracket rounds={rounds} />
    </div>
  );
};

export default Home;