import {React} from 'react';
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from '@g-loot/react-tournament-brackets';
import { matches } from '../../matches/random';

const CustomTheme = createTheme( {
    textColor       : { main : '#f1f1f1', highlighted : '#f1f1f1', dark : '#f1f1f1bd' },
    matchBackground : { wonColor : '#393939', lostColor : '#393939' },
    score           : {
      background : { wonColor : '#4FAA84', lostColor : '#F26B50' },
      text       : { highlightedWonColor : '#f1f1f1', highlightedLostColor : '#f1f1f1' },
    },
    border : {
      color            : '#222222',
      highlightedColor : '#f1f1f1',
    },
    roundHeader             : { backgroundColor : '#393939', fontColor : '#f1f1f1' },
    connectorColor          : '#f1f1f1aa',
    connectorColorHighlight : '#f1f1f1',
    svgBackground           : '#222222',
  } )
const TournamentPage = ({ finalWidth, finalHeight }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        theme={CustomTheme}
        onMatchClick={console.log("aa")}
        onPartyClick={console.log("aa")}
        onMouseEnter={console.log("aa")}
        options={{
            style: {
              roundHeader: {
                backgroundColor: CustomTheme.roundHeader.backgroundColor,
                fontColor: CustomTheme.roundHeader.fontColor,
              },
              connectorColor: CustomTheme.connectorColor,
              connectorColorHighlight: CustomTheme.connectorColorHighlight,
            },
          }}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer 
            background={CustomTheme.svgBackground}
            SVGBackground={CustomTheme.svgBackground}
            width={finalWidth} 
            height={finalHeight} 
            {...props}>
                {children}
          </SVGViewer>
        )}
      />
    </div>
  );
};

export default TournamentPage;
