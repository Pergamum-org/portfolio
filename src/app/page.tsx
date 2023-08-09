'use client'
import { 
  Container, 
  Header, 
  MainContent, 
  Hero, 
  InforOwners, 
  Datails, 
  Avatars, 
  Title, 
  Progress, 
  AboutMe,
  WeWorks,
  Tecnologes,
  GradientTecnologs,
  Projects
} from '@/styles/pages/home'
import { Airplay, GithubLogo, ChatCircleText, LinkSimpleHorizontal, TwitterLogo, LinkedinLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { User } from '@/components/User'
import Image from 'next/image'

import progressImage from '../assets/progressPC.png'
import dataBaseSQL from '../assets/Database.png'
import virtualCrash from '../assets/virtualCrash.png'
import { CardTecnologes } from '@/components/CardTecnologes'
import { getTecs } from '@/utils/getTecs'
import { GridProjects } from '@/components/GridProjects'

export default function Home() {
  const users = [
    {
      name: 'Carlos',
      cod: 'CE',
      url: 'https://i.ibb.co/6PY0B0X/Rectangle.png',
      linkedin: 'https://www.linkedin.com/in/carlos-eduardo-de-almeida-43317b23a/'
    },
    {
      name: 'Romulo',
      cod: 'RE',
      url: 'https://i.ibb.co/TbJFLrx/Rectangle-2.png',
      linkedin: 'https://www.linkedin.com/in/romulo-pinheiro-206b3723a/'

    },
    {
      name: 'Pedro',
      cod: 'PH',
      url: 'https://i.ibb.co/KGNrd8x/Rectangle-1.png',
      linkedin: 'https://www.linkedin.com/in/pedro-lima-2ab9831b0/'
    }
  ]
  const tecs = getTecs()
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
            <section>
              <InforOwners>
                <Title>
                  <h1>Freelancers e Desenvolvimento <span>Web</span></h1>
                  <p>Empresa voltada para o desenvolvimento de soluçãoes WEB e acompanhamento empresarial</p>
                </Title>
                <Avatars>
                  {users.map(user => {
                    return <User name={user.name}  url={user.url}  cod={user.cod} linkedin={user.linkedin}  key={user.name} />
                  })}
                </Avatars>
              </InforOwners>
              <nav>
                <Link href='https://github.com' target='_blank'><LinkSimpleHorizontal size={32} weight="bold" /></Link>
                <Link href='https://github.com' target='_blank'><TwitterLogo size={32} weight="bold" /></Link>
                <Link href='https://github.com' target='_blank'><LinkedinLogo size={32} weight="bold" /></Link>
                <Link href='https://github.com' target='_blank'><GithubLogo size={32} weight="bold" /></Link>
              </nav>
            </section>
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
          </p>
          <p>
            Nós da Pérgamo estamos voltados para aplicações com as mais diversas tecnologias que foquem no desempenho e funcionalidade buscada. A transparência do serviço, qualidade e a ética são nossos principais pilares.
          </p>
          <p>
            Somos <span>apaixonados</span> por tecnologia, e por isso seu futuro está seguro em nossas mãos!
          </p>
        </AboutMe>
        <WeWorks>
          <h2>Atuação no mercado</h2>
          <p>Nós temos trabalhos feitos para o mercado jurídico e de estocagem. Trabalhamos animações 3D com Virtual Crash 5 e em aplicações com interação com banco de dados SQL e NoSQL.</p>
          <div>
            <Image src={virtualCrash} width={400} alt='Virtual Crash 5, software de simulação de acidentes' />
            <Image src={dataBaseSQL} width={314} alt='SQL database' />
          </div>
        </WeWorks>
        <Projects>
          <h2>Projetos</h2>
          <GridProjects />
        </Projects>
        <Tecnologes>
          <h2>Tecnologias</h2>
          <p>Temos experiências com as seguintes tecnologias em nossos projetos e trabalhos anteriores:</p>
          <GradientTecnologs>
            {tecs.map((tec, index) => {
              return <CardTecnologes name={tec.name} key={tec.name} tecnologeIcon={tec.icon} isBlack={index%2 !== 0} />
            })}
          </GradientTecnologs>
        </Tecnologes>
      </MainContent>
    </Container>
  )
}
