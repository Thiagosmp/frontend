import React from 'react'
import RegisterProvider, { useRegister } from './register'
import { Props } from 'contexts-types'

export {useRegister}

const GlobalContext: React.FC<Props> = ({ children }:Props) => {
  return (
    <RegisterProvider>
      {children}
    </RegisterProvider>
  )
}

export default GlobalContext