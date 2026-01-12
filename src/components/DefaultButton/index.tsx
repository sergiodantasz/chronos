import styles from './styles.module.css'

interface DefaultInputProps extends React.ComponentProps<'button'> {
  icon: React.ReactNode
  color?: 'green' | 'red'
}

export const DefaultButton = ({ icon, color = 'green', children, ...rest }: DefaultInputProps) => {
  return (
    <button
      className={styles.button + ' ' + styles[color]}
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}
