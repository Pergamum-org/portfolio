import { ChatCircleText } from "@phosphor-icons/react";
import { Content, Overlay, Trigger } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

export function Contact(){
  return(
    <Dialog.Root>
      <Trigger asChild>
        <button type='button'>Entrar em contato <ChatCircleText size={24} weight='bold' /></button>
      </Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}