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
                <SiTypescript size={28} weight='bold' />
                <FaReact size={28} weight='bold' />
                <TbBrandNextjs size={28} weight='bold' />
                <SiPrisma size={28} weight='bold' />
                <SiStorybook size={28} weight='bold' />
                <SiMysql size={28} weight='bold' />
                <RxStitchesLogo size={28} weight='bold' />                
              </span>
              <div>
                <Image src={agenda} alt='projeto de agendamento de horarios em volta de afazeres principais'/>
              </div>
            </div>
            <div>
              <span>
                <AiFillHtml5 size={28} weight='bold' />
                <BiLogoCss3 size={28} weight='bold' />
                <FaNodeJs size={28} weight='bold' />
                <IoLogoJavascript size={28} weight='bold' />
                <BiLogoPostgresql size={28} weight='bold' />
              </span>
              <div>
                <Image src={crud} alt='Crud de aplicação para usuarios'/>
              </div>
            </div>
            <div>
              <span>
                <IoLogoJavascript size={28} weight='bold' />
                <FaBootstrap size={28} weight='bold' />
                <AiFillHtml5 size={28} weight='bold' />
                <BiLogoCss3 size={28} weight='bold' />
                <TbSql size={28} weight='bold' />
                <FaPhp size={28} weight='bold' />
              </span>
              <div>
                <Image src={loginVendedor} alt='projeto de simulação de cadastro e venda de produtos'/>
              </div>
            </div>
            <div>
            <span>
                <SiTypescript size={28} weight='bold' />
                <FaReact size={28} weight='bold' />
                <TbBrandNextjs size={28} weight='bold' />
                <SiPrisma size={28} weight='bold' />
                <TbSql size={28} weight='bold' />
                <RxStitchesLogo size={28} weight='bold' />                
              </span>
              <div>
                <Image src={shoppingImage} alt='projeto de vendas vinculado ao stripe'/>
              </div>
            </div>
          </Container>
  )
}