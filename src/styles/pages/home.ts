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
  },

  "@media (max-width: 800px)": {
    gridTemplateColumns: '1fr',

    div: {
      gridColumnStart: '1',
    }
  }
})

export const MainContent = styled('main', {
  width: '100%',
  maxWidth: '94vw',
  margin: '4rem auto',
  background: '$gray650',
  padding: '4rem 1.5rem',
  borderRadius: '$md',
  display:'flex',
  flexDirection: 'column',
  gap: '4rem',

  "@media (max-width: 800px)": {
      maxWidth: '100vw',
      borderRadius: 0,
  }
})

export const Hero = styled('div', {
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  width: '100%',

  "@media (max-width: 1000px)": {
    gridTemplateColumns: '1fr',
  }
})

export const Datails = styled('div', {
  gridColumnStart: '2',
  margin: '0 auto',
  width: '100%',
  maxWidth: 1000,

  section:{
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    "@media (max-width: 800px)": {
      flexDirection: 'column',
      gap: "2rem",
    }
  },

  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$4',

    'a, span':{
      border: '1px solid black',
      width: 64,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '$gray200',
      borderRadius: '999px',
      cursor: 'pointer',
      transition: 'color 0.2s',

      '&:hover, &:focus': {
        color: '$green700',
        background: '$gray700'
      }
    },

    "@media (max-width: 800px)": {
      flexDirection: 'row', 
      justifyContent: 'space-around',
      width: '100%',
    }
  },

  "@media (max-width: 800px)": {
    gridColumnStart: '1',
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
  maxWidth: 426,
  maxHeight: 288,
  margin: '0 auto',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
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
    fontSize: '2.5rem',
  },

  p: {
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$md',
    textAlign: 'center',

    span: {
      color: '$green400',
      fontWeight: '$bold',
    },
  }
})

export const WeWorks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$8',
  textAlign: 'center',
  width: '100%',
  maxWidth: 1080,
  margin: '0 auto',

  h2: {
    color: '$green400',
    fontSize: '2.5rem',
  },

  p: {
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$md',
    textAlign: 'center',

    span: {
      color: '$green400'
    }
  },

  div:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 2rem',

    img: {
      objectFit: 'cover',
      borderRadius: '$md'
    },
    
    "@media (max-width: 800px)": {
      flexDirection: 'column',
      gap: "1rem",
    }
  }
})

export const Projects = styled('section', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$8',

  h2:{
    color: '$green400',
    fontSize: '2.5rem',
  },
})

export const Tecnologes = styled('article', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$8',
  textAlign: 'center',
  width: '100%',
  maxWidth: 1080,
  margin: '0 auto',

  h2: {
    color: '$green400',
    fontSize: '2.5rem',
  },

  p: {
    color: '$gray300',
    lineHeight: '$base',
    fontSize: '$md',
    textAlign: 'center',
  },
})

export const GradientTecnologs = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '$5',

  "@media (max-width: 800px)": {
    gridTemplateColumns: 'repeat(2, 1fr)',
  }
})

export const TextError = styled('p', {
  fontSize: '$sm',
  color: '#f75a68',
})
