import {React} from 'react';
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme,
} from '@g-loot/react-tournament-brackets';
import { matches } from '../../matches/random';
import CustomTheme from './Themes';


const TournamentPage = ({ finalWidth, finalHeight }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        theme={CustomTheme}
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
