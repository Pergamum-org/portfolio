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
  padding: '2rem 4rem',

  borderRadius: '$md',
  background: '#bbb',

  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
})

export const Close  = styled(Dialog.Close, {
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: 40,
  height: 40,

  button: {
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: '#A80000',
    border: 'none',
    outline: 'none',
  }
})