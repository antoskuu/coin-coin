import {
  createTheme
} from '@g-loot/react-tournament-brackets';

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

export default CustomTheme;