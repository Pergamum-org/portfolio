import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems:'center',
  width: '100%',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'grid',
  gridTemplateColumns: '0.8fr 1fr',
  width: '100%',
  background: '$gray650',
  padding: '$9',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',

  div: {
    gridColumnStart: '2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h1: {
      display: 'flex',
      alignItems: 'center',
      gap: '$3',
      color: '$green500',
      svg: {
        color: '#d9d9d9'
      }
    },

    button: {
      fontSize: '$sm',
      color: '$gray200',
      fontWeight: '$bold',

      display: 'flex',
      alignItems: 'center',
      gap: '$2',
      padding: '$3 $2',
      background: '$gray900',

      border: '1px solid $gray900',
      borderRadius: '$sm',
      cursor: 'pointer',

      outline: 'none',
      transition: 'background-color 0.2s',

      '&:not(:disabled):hover, &:not(:disabled):focus':{
        border: '1px solid $gray300',
        background: '$gray950',
      }
    }
  }
})

export const MainContent = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - 120px)',
  margin: '4rem auto',
  background: '$gray650',
  padding: '4rem 0',
  display:'flex',
  flexDirection: 'column',
  gap: '4rem'
})

export const Hero = styled('div', {
  display: 'grid',
  gridTemplateColumns: ' 0.4fr 1fr',
  width: '100%',
})

export const Datails = styled('div', {
  gridColumnStart: '2',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  paddingRight: '120px',

  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4',

    a:{
      border: '1px solid black',
      width: 64,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$gray200',
      borderRadius: '999px',
      transition: 'color 0.2s',

      '&:hover, &:focus':{
        color: '$green700'
      }
    }
  }
})

export const InforOwners = styled('div', {
  gap: '4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Title = styled('div', {
  textAlign: 'center',

  h1: {
    color: '$gray200',

    span:{
      color: '$green400'
    }
  },

  p: {
    color: '$gray400',
  }
})
export const Avatars = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
})

export const Progress = styled('div', {
  width: 426,
  height: 288,
  margin: '0 auto',

  img: {
    objectFit: 'cover',

  }
})

export const AboutMe = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '$8',
  maxWidth: 1080,
  flexDirection: 'column',
  margin: '0 auto',

  h2: {
    color: '$green400',
    fontSize: '3.75rem',
  },

  p: {
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$2xl',
    textAlign: 'center',

    span: {
      color: '$green400',
      fontWeight: '$bold',
    },
  }
})

export const TextError = styled('p', {
  fontSize: '$sm',
  color: '#f75a68',
})
