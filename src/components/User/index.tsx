'use client'
import { AvatarRoot, Container, AvatarImage, AvatarFallback, UserName } from './styles'

interface UserProps {
  url: string
  name: string
  cod: string
  linkedin: string
}

export function User({url, name, cod, linkedin}: UserProps) {
  return (
    <Container>
      <AvatarRoot>
        <a href={linkedin} title={name} target='_blank'>
          <AvatarImage src={`${url}`} alt={name} />
        </a>
        <AvatarFallback delayMs={600}>{cod}</AvatarFallback>
      </AvatarRoot>
      <UserName>{name}</UserName>
    </Container>
  )
}