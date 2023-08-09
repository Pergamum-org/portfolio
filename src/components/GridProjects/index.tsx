import agenda from '../../assets/AgendamentoDescomplicado.gif'
import crud from '../../assets/CRUD.gif'
import loginVendedor from '../../assets/LoginVendedor.gif'
import shoppingImage from '../../assets/AnimationNextIgnite.gif'
import Image from 'next/image'
import { Container } from './style'
import { FaReact, FaNodeJs, FaPhp, FaBootstrap } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoPostgresql } from 'react-icons/bi'
import { IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiPrisma, SiStorybook, SiMysql } from 'react-icons/si'
import { TbBrandNextjs, TbSql } from 'react-icons/tb'
import { RxStitchesLogo } from 'react-icons/rx'



export function GridProjects(){
  return (
    <Container>
            <div>
              <span>
                <SiTypescript size={24} weight='bold' />
                <FaReact size={24} weight='bold' />
                <TbBrandNextjs size={24} weight='bold' />
                <SiPrisma size={24} weight='bold' />
                <SiStorybook size={24} weight='bold' />
                <SiMysql size={24} weight='bold' />
                <RxStitchesLogo size={24} weight='bold' />                
              </span>
              <Image src={agenda} width={470} height={290} alt='projeto de agendamento de horarios em volta de afazeres principais'/>
            </div>
            <div>
              <span>
                <AiFillHtml5 size={24} weight='bold' />
                <BiLogoCss3 size={24} weight='bold' />
                <FaNodeJs size={24} weight='bold' />
                <IoLogoJavascript size={24} weight='bold' />
                <BiLogoPostgresql size={24} weight='bold' />
              </span>
              <Image src={crud} width={470} height={290} alt='Crud de aplicação para usuarios'/>
            </div>
            <div>
            <span>
                <IoLogoJavascript size={24} weight='bold' />
                <FaBootstrap size={24} weight='bold' />
                <AiFillHtml5 size={24} weight='bold' />
                <BiLogoCss3 size={24} weight='bold' />
                <TbSql size={24} weight='bold' />
                <FaPhp size={24} weight='bold' />
              </span>
              <Image src={loginVendedor} width={470} height={290} alt='projeto de simulação de cadastro e venda de produtos'/>
            </div>
            <div>
            <span>
                <SiTypescript size={24} weight='bold' />
                <FaReact size={24} weight='bold' />
                <TbBrandNextjs size={24} weight='bold' />
                <SiPrisma size={24} weight='bold' />
                <TbSql size={24} weight='bold' />
                <RxStitchesLogo size={24} weight='bold' />                
              </span>
              <Image src={shoppingImage} width={470} height={290} alt='projeto de vendas vinculado ao stripe'/>
            </div>
          </Container>
  )
}