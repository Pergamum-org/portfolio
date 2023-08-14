import { styled } from "@/styles";

export const Container = styled('section', {
    width: '100%',
    maxWidth: 1080,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'center',
    gap: '$8',

    div:{
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',

      span:{
        position: 'absolute',
        width: 0,
        maxHeight: 290,
        height: "100%",
        background: 'rgba(0,0,0,0.25)',
        top: 0,
        borderRadius: '$md',
        overflow: 'hidden',
        zIndex: 999,

        svg:{
          background: '$gray100',
          width: 32,
          height: 32,
          padding: '$1',
          borderRadius: 999,
          color: '#000'
        }
      },

      '&:hover': {
        span:{
          borderRadius: '$md',
          overflow: 'auto',
          width: '100%',
          maxWidth: 470,
          paddingBottom: '1.5rem',

          display: 'flex',
          gap: '$2',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }
      },

      div: {
        width: '100%',
        maxWidth: 470,
        height: "100%",
        maxHeight: 290,
        
        img: {
          objectFit: 'contain',
          borderRadius: '$md',
          margin: 'auto',
          height: "100%",
          width: '100%',
        },
      }
    },
    "@media (max-width: 800px)": {
      gridTemplateColumns: '1fr',
    }
})