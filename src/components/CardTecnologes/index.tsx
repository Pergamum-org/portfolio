import { Container } from "./styles"
import { ReactNode } from "react"

interface CardTecnologesProps {
  name: string
  tecnologeIcon: ReactNode    
}
export function CardTecnologes({tecnologeIcon, name}: CardTecnologesProps) {
  return (
    <Container>
      {tecnologeIcon}
      <strong>{name}</strong>
    </Container>
  )
}