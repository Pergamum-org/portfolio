'use client'
import { Container, Header, MainContent, Hero, InforOwners, Datails, Avatars, Title, Progress, AboutMe } from '@/styles/pages/home'
import { Airplay, GithubLogo, ChatCircleText, LinkSimpleHorizontal, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { User } from '@/components/User'
import Image from 'next/image'

import progressImage from '../assets/progressPC.png'

export default function Home() {
  const users = [
    {
      name: 'Carlos',
      cod: 'CE',
      url: '../../assets/carlos.png'
    },
    {
      name: 'Romulo',
      cod: 'RE',
      url: '../../assets/romulo.png'
    },
    {
      name: 'Pedro',
      cod: 'PH',
      url: '../../assets/pedro.png'
    }
  ]
  return (
    <Container>
      <Header>
        <div>
          <h1>Pérgamo <Airplay size={32} weight='bold' /></h1>
          <button type='button'>Entrar em contato <ChatCircleText size={24} weight='bold' /></button>
        </div>
      </Header>
      <MainContent>
        <Hero>
          <Datails>
            <InforOwners>
              <Title>
                <h1>Freelancers e Desenvolvimento <span>Web</span></h1>
                <p>Empresa voltada para o desenvolvimento de soluçãoes WEB e acompanhamento empresarial</p>
              </Title>
              <Avatars>
                {users.map(user => {
                  return <User name={user.name}  url={user.url}  cod={user.cod}  key={user.name} />
                })}
              </Avatars>
            </InforOwners>
            <nav>
              <Link href='https://github.com' target='_blank'><LinkSimpleHorizontal size={32} weight="bold" /></Link>
              <Link href='https://github.com' target='_blank'><TwitterLogo size={32} weight="bold" /></Link>
              <Link href='https://github.com' target='_blank'><LinkedinLogo size={32} weight="bold" /></Link>
              <Link href='https://github.com' target='_blank'><GithubLogo size={32} weight="bold" /></Link>
            </nav>
          </Datails>
        </Hero>
        <Progress>
          <Image src={progressImage} alt='Progresso em tecnologia' width={426} height={288} />
        </Progress>
        <AboutMe>
          <h2>Pérgamo</h2>
          <p>
            Somos uma empresa focada em criar e disponibilizar sistemas interativos com foco no usuário e funcionalidades. Nascemos como um complemento entre amigos e sócios para
            proporcionar uma gama de conhecimentos amplos e uma estrutura sólida para o
            desenvolvimento. <span>clique para saber mais sobre nós.</span>
            <br />
            Nós da Pérgamo estamos voltados para aplicações com as mais diversas tecnologias que foquem no desempenho e funcionalidade buscada. A transparência do serviço, qualidade e a ética são nossos principais pilares.
            <br />
            Somos <span>apaixonados</span> por tecnologia, e por isso seu futuro está seguro em nossas mãos!
          </p>
        </AboutMe>
      </MainContent>
    </Container>
  )
}
