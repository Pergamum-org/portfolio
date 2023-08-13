'use client'
import { ChatCenteredText, ChatCircleText, WhatsappLogo, X } from "@phosphor-icons/react";
import { Close, Content, Overlay, Trigger, Navgation, Title, Hero, MainContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import whatsapp from '../../assets/whatsapp.png'
import contact from '../../assets/contact.png'

interface ContactProps {
  name: string
  email?: string
}

export function Contact(){
  const [sendMenssage, setSendMessage] = useState<'whatsapp' | 'email'>('whatsapp')
  const { register, handleSubmit } = useForm<ContactProps>()
  const router = useRouter()

  function handleModifyModeSend(send: 'whatsapp' | 'email') {
    setSendMessage(_ => send)
  }

  async function handleContactUs(data: ContactProps){
    if(sendMenssage === 'whatsapp'){
      // redirecinar para wtss
      await router.replace(`https://api.whatsapp.com/send?phone=5575988868391&text=Olá, Pérgamo! Me chamo ${data.name}, gostaria de entrar em contato`)
    } else {
      // redirecinar para email
    }
  }
  return(
    <Dialog.Root>
      <Trigger type='button'>
        Entrar em contato <ChatCircleText size={24} weight='bold' />
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Hero>
            <Close type='button'>
              <X size={24} weight='bold' />
            </Close>

            <Navgation>
              <Title onClick={() => handleModifyModeSend('whatsapp')} select={sendMenssage === 'whatsapp'}>Whatsapp</Title>
              <Title onClick={() => handleModifyModeSend('email')} select={sendMenssage === 'email'} >E-mail</Title>
            </Navgation>
          </Hero>

          <MainContent>
            <div>
            {sendMenssage == 'whatsapp' ? <Image width={400} src={whatsapp} alt=''/> : <Image width={400} src={contact} alt=''/>}
              
            </div>
            <form onSubmit={handleSubmit(handleContactUs)} >
              <label>
                Nome:
                <input required {...register('name')} placeholder='Jone Doe'/>
              </label>
              {
                sendMenssage !== 'whatsapp' && (
                  <label>
                    E-mail:
                    <input type='email' required {...register('email')} placeholder='Jonedoe@gmail.com'/>
                  </label>
                )
              }

              <button type='submit'> Entrar em contato {sendMenssage === 'whatsapp'? <WhatsappLogo weight="bold" size={32} /> : <ChatCenteredText size={32} weight="bold" />}  </button>
            </form>
          </MainContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}