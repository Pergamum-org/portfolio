'use client'
import { ChatCenteredText, ChatCircleText, WhatsappLogo, X } from "@phosphor-icons/react";
import { Close, Content, Overlay, Trigger, Navgation, Title, Hero, MainContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import whatsapp from '../../assets/whatsapp.png'

interface ContactProps {
  name: string
}

export function Contact(){
  const { register, handleSubmit } = useForm<ContactProps>()
  const router = useRouter()

  async function handleContactUs(data: ContactProps){
      // redirecinar para wtss
      await router.replace(`https://api.whatsapp.com/send?phone=5575988868391&text=Olá, Pérgamo! Me chamo ${data.name}, gostaria de entrar em contato`)
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
              <Title select>Whatsapp</Title>
            </Navgation>
          </Hero>

          <MainContent>
            <div>
              <Image src={whatsapp} alt='logo Whatsapp'/> 
            </div>
            <form onSubmit={handleSubmit(handleContactUs)} >
              <label>
                Nome:
                <input required {...register('name')} placeholder='Jone Doe'/>
              </label>

              <button type='submit'> Entrar em contato <WhatsappLogo weight="bold" size={32} /></button>
            </form>
          </MainContent>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}