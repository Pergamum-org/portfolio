'use client'
import { AvatarRoot, Container, AvatarImage, AvatarFallback, UserName } from './styles'

interface UserProps {
  url: string
  name: string
  cod: string
}

export function User({url, name, cod}: UserProps) {
  return (
    <Container>
      <AvatarRoot>
        <AvatarImage src={`${url}`} alt={name} />
        <AvatarFallback delayMs={600}>{cod}</AvatarFallback>
      </AvatarRoot>
      <UserName>{name}</UserName>
    </Container>
  )
}