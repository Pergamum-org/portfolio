import { styled } from "@/styles";

export const Container = styled('div', {
  background: '#121214',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4 0.625rem',
  gap: '$4',
  border: '1px solid #121214',
  borderRadius: '$md',
  transition: 'color 0.2s',

  '&:hover': {
    color: '$green400',
    scale: 1.05,
  },

  variants: {
    isBlack: {
      false: {
        background: 'transparent',
      }
    }
  }
})