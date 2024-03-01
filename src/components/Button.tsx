interface IButtonProps extends React.HTMLProps<HTMLButtonElement>{
  text: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({text, type, ...props}: IButtonProps) {
  return (
    <button type={type} {...props} className='bg-button hover:bg-buttonHover w-24 h-10 md:w-32 md:h-12 text-xs md:text-sm  rounded-md p-2 mt-3'>{text}</button>
  )
}