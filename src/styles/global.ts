import { globalCss } from '.'

export const stylesGlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizeLegibility',
    background: '$gray900',
  },

  'body, input, button, textarea': {
    fontFamily: '$default',
    fontSize: '1rem',
    color: '$gray200',

    "@media (max-width: 800px)": {
      fontSize: '86.75%',
    }
  },
})
