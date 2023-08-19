import { styled } from "@/styles"
import * as Avatar from '@radix-ui/react-avatar'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$3'
})

export const AvatarRoot = styled(Avatar.Root, {
  maxWidth: 200,
  width: '100%',
  maxHeight: 200,
  height: '100%',
  borderRadius: 999,
  overflow: 'hidden',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: 'inherit',
  transition: 'transform 0.2s',

  '&:hover':{
    transform: 'scale(1.2)',
  }
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: '$2xl',
  background: '#161616'
})

export const UserName = styled('h2',{
  fontSize: '2rem',
  color: '$green300',
  fontStyle: 'italic',

  "@media (max-width: 500px)": {
    fontSize: "1.5rem",
  }
})