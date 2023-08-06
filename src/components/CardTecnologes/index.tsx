import { Container } from "./styles"
import { ReactNode } from "react"

interface CardTecnologesProps {
  name: string
  tecnologeIcon: ReactNode
  isBlack?: boolean    
}
export function CardTecnologes({tecnologeIcon, name, isBlack = false}: CardTecnologesProps) {
  return (
    <Container isBlack={isBlack}>
      {tecnologeIcon}
      <strong>{name.toUpperCase()}</strong>
    </Container>
  )
}