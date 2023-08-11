import { styled } from "@/styles";
import * as Dialog from '@radix-ui/react-dialog';


export const Trigger  = styled(Dialog.Trigger, {
  background: 'transparent',
  border: 'none',
  borderRadius: '$sm',

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
})

export const Overlay  = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: '0',
  background: 'rgba(0, 0, 0, 0.3)'
})

export const Content  = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1080,
  width: '80vw',
  padding: '2rem',

  borderRadius: '$md',
  background: '#bbb',
})

export const Hero = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Close  = styled(Dialog.Close, {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: 40,
  background: 'transparent',
  outline: 'none',
  border: 'none',
  height: 40,

  button: {
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    border: 'none',
    outline: 'none',
    color: '#000',
    background: 'transparent',
    transition: 'color 0.2s',

    '&:hover':{
      color: '#A80000',
    }
  }
})

export const Navgation = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 400
})

export const MainContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    width: '100%',

    label: {
      display: 'flex',
      flexDirection: 'column',
      gap: '$3',
      color: '$green400',
      fontSize: '$2xl',
      fontWeight: '$bold',

      input: {
        border: '1px solid #bbb',
        borderRadius: '$sm',
        color: '#000',
        padding: '$2',
        outeline: 'none',

        '&::placeholder': {
          color: '$gray600'
        }
      }
    },

    button: {
      marginTop: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$3',

      cursor: 'pointer',
      border: '1px solid $green400',
      borderRadius: '$md',
      background: '$green400',
      transition: 'background-color 0.2s',
      outeline: 'none',
      fontSize: '$2xl',
      fontWeight: 'bold',
      padding: '$3',
    }
  }
})

export const Title = styled('h2', {
    color: '$green400',
    lineHeight: '$base',
    cursor: 'pointer',
    transition: 'color 0.2s',
    borderBottom: '2px solid #bbb',

    '&:hover': {
      color: '$green500'
    },

    variants: {
      select: {
        true: {
          borderBottom: '2px dotted $green400'
        }
      }
    }
})