interface IButtonProps extends React.HTMLProps<HTMLButtonElement>{
  text: string
  width?: string | number
  height?: string | number
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({text, width=36, height=11, type, ...props}: IButtonProps) {
  return (
    <button type={type} style={{width, height}} {...props} className='bg-button hover:bg-buttonHover rounded-md p-2 mt-3'>{text}</button>
  )
}