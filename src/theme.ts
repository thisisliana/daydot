import { createTheme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'
const breakpoints = createBreakpoints({})

const mainFonts = '"tajawal", "Ubuntu Condensed", "maecellus", "Roboto", "Helvetica", "Arial", sans-serif'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6b5d7d',
    },
    secondary: {
      main: '#e8cfcd',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: mainFonts,
    body1: {
      marginBottom: 10
    },
    h2: {
      fontWeight: 100,
      [breakpoints.down('md')]: {
        fontSize: 20
      },
      [breakpoints.up('md')]: {
        fontSize: 30
      },
      [breakpoints.up('lg')]: {
        fontSize: 40
      }
    },
    h3: {
      fontSize: 28,
      lineHeight: '40px',
      fontWeight: 100,
      [breakpoints.down('md')]: {
        fontSize: 40,
        marginTop: '110px',
        textAlign: 'center'
      },
      [breakpoints.up('md')]: {
        fontSize: 70,
        marginTop: '152px',
        marginLeft: '45px'
      },
      [breakpoints.up('lg')]: {
        fontSize: 90,
        marginTop: '152px',
        marginLeft: '130px'
      }
    }
  },
})
